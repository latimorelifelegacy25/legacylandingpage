// Mock AI Service - Provides intelligent responses without requiring API keys
// For production with real AI, integrate with Anthropic Claude API or similar

import { APP_DATA } from '../constants';

const RESPONSE_TEMPLATES = {
  greeting: [
    "Welcome to Latimore Life & Legacy! I'm here to help you understand how our strategic financial solutions can protect and grow your family's wealth. What specific area are you interested in learning about?",
    "Hello! As Jackson's AI consultant, I can guide you through our comprehensive suite of wealth protection and accumulation strategies. What financial goals are most important to you right now?",
  ],
  
  services: {
    'wealth accumulation': `Strategic Wealth Accumulation (policy-based planning)

How it works (high level):
Some families use an Indexed Universal Life (IUL) policy to create a pool of dollars that can grow tax-deferred and may be accessed through policy loans/withdrawals. The objective is to participate in index-linked upside while using product features that are designed to limit downside in negative index years.

Typical benefits people like (product and carrier dependent):
- Tax-advantaged policy mechanics
- Access options via loans/withdrawals
- Downside-limiting index strategy features
- Not constrained by traditional retirement account contribution rules

If you want, schedule a Legacy Architecture Review so Jackson can map this to your numbers: ${APP_DATA.links.booking}`,

    'life insurance': `Life Insurance (Human Life Value protection)

We usually size coverage with a simple framework like DIME:
- Debt: what you want paid off
- Income: how many years of income replacement you want
- Mortgage: remaining balance
- Education: future funding goals

Many policies can include Living Benefits riders (availability varies by product/state) that may allow access to benefits for qualifying critical, chronic, or terminal illness.

Want the exact coverage math for your household? Book a consult: ${APP_DATA.links.booking}`,

    'living benefits': `Living Benefits (health/wealth safety net)

Some life insurance policies can include riders that may allow access to benefits while living if you meet the rider's definition for:
- Critical illness
- Chronic illness
- Terminal illness

Funds are generally paid to you (not the provider), and you decide how to use them (subject to rider terms).

If you want to see which products/riders fit your situation, schedule a review: ${APP_DATA.links.booking}`,

    'debt management': `Debt Strategy (cash-flow optimization)

Goal: redirect dollars that normally go to interest into a cleaner payoff plan.

What we do in practice:
- Map debts (balances, rates, minimums)
- Build a payoff sequence that improves cash flow over time
- Pair protection where appropriate so a setback doesn't blow up the plan

If you want a custom breakdown, schedule a consult: ${APP_DATA.links.booking}`,

    'retirement': `Retirement Planning (indexed-style strategy)

Many people like indexed strategies because they can offer:
- Upside participation tied to an index (caps/participation rates vary)
- Downside-limiting features in negative index years (product-specific)
- A more predictable planning experience vs. pure market exposure

The right design depends on your time horizon, taxes, and risk tolerance.

If you want a personalized plan, book here: ${APP_DATA.links.booking}`,
  },

  default: `I can help with:

- Wealth accumulation (policy-based planning)
- Life insurance (coverage sizing with DIME)
- Living benefits (riders for qualifying health events)
- Mortgage protection
- Business protection strategies
- Indexed-style growth approaches (product dependent)
- Legacy and estate planning coordination

Tell me what you're trying to accomplish, or book a review here: ${APP_DATA.links.booking}`
};

function findBestResponse(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Greeting detection
  if (/^(hi|hello|hey|greetings|good (morning|afternoon|evening))/.test(lowerQuery)) {
    return RESPONSE_TEMPLATES.greeting[Math.floor(Math.random() * RESPONSE_TEMPLATES.greeting.length)];
  }
  
  // Service-specific responses
  if (lowerQuery.includes('wealth') || lowerQuery.includes('accumulation') || lowerQuery.includes('iul') || lowerQuery.includes('tax')) {
    return RESPONSE_TEMPLATES.services['wealth accumulation'];
  }
  
  if (lowerQuery.includes('life insurance') || lowerQuery.includes('dime') || lowerQuery.includes('coverage') || lowerQuery.includes('death benefit')) {
    return RESPONSE_TEMPLATES.services['life insurance'];
  }
  
  if (lowerQuery.includes('living benefit') || lowerQuery.includes('critical illness') || lowerQuery.includes('chronic') || lowerQuery.includes('terminal')) {
    return RESPONSE_TEMPLATES.services['living benefits'];
  }
  
  if (lowerQuery.includes('debt') || lowerQuery.includes('mortgage payoff') || lowerQuery.includes('interest')) {
    return RESPONSE_TEMPLATES.services['debt management'];
  }
  
  if (lowerQuery.includes('retire') || lowerQuery.includes('401k') || lowerQuery.includes('index') || lowerQuery.includes('market')) {
    return RESPONSE_TEMPLATES.services['retirement'];
  }
  
  // Default response
  return RESPONSE_TEMPLATES.default;
}

export const mockAIService = {
  async generateContent(userQuery: string): Promise<string> {
    // Simulate network delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
    
    return findBestResponse(userQuery);
  }
};
