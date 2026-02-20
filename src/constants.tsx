
import React from 'react';
import { 
  PiggyBank, 
  ShieldCheck, 
  GraduationCap, 
  Clock, 
  Heart, 
  Network, 
  HeartPulse, 
  TrendingUp, 
  Home, 
  Factory 
} from 'lucide-react';
import { AppData } from './types';

export const APP_DATA: AppData = {
  name: "Jackson M. Latimore Sr.",
  title: "Founder & CEO",
  company: "Latimore Life & Legacy LLC",
  license: "PA License #1268820",
  tagline: "Protecting Today. Securing Tomorrow.",
  hashtag: "#TheBeatGoesOn",
  bio: "To empower every family with the financial tools and protection strategies necessary to turn hard work into a lasting legacy, ensuring financial security is a foundation for generations to come.",
  phone: "(856) 895-1457",
  email: "jackson1989@latimorelegacy.com",
  bannerUrl: "/logo.jpg",
  links: {
    main: "https://jackson1989-design.github.io/latimore-life-legacy-site/",
    ethos: "https://agents.ethoslife.com/invite/29ad1",
    booking: "https://latimorelifelegacy.fillout.com/latimorelifelegacy",
    linkedin: "https://www.linkedin.com/in/startwithjacksongfi/",
    facebook: "https://www.facebook.com/LatimoreLegacyLLC",
    instagram: "https://www.instagram.com/jacksonlatimore.global"
  },
  services: [
    { 
      title: "Wealth Accumulation", 
      icon: <PiggyBank size={24} />,
      description: "Build a robust financial engine using tax-advantaged growth vehicles like Indexed Universal Life (IUL) and modern annuities.",
      detailedDescription: "STRATEGIC OBJECTIVE: Architecting the 'Tax-Never' Bucket. \n\nBENEFITS: This strategy provides high-velocity wealth accumulation while mitigating the two greatest threats to retirement: tax hikes and market volatility. By utilizing Indexed Universal Life (IUL), we create a fund that grows tax-deferred and can be accessed tax-free via participating loans.\n\nTARGET AUDIENCE: Designed for high-income earners and long-term savers who have reached their contribution limits on traditional accounts or want to hedge against future tax increases.\n\nUNIQUE SELLING POINT: Our '0% Floor' guarantee ensures that while you participate in market-linked gains, you never suffer a loss of principal due to market corrections. Your gains are locked in annually through the 'Reset' feature, protecting your harvest from the government and the volatility of the stock market."
    },
    { 
      title: "Asset Protection", 
      icon: <ShieldCheck size={24} />,
      description: "Implement legal and financial safeguards to protect your hard-earned assets from market volatility and creditors.",
      detailedDescription: "STRATEGIC OBJECTIVE: Building the Volatility Shield.\n\nBENEFITS: True wealth isn't just about what you make; it's about what you keep. This strategy focuses on moving assets from 'At-Risk' buckets (Market-exposed, taxable) into 'Protected' buckets. \n\nTARGET AUDIENCE: Ideal for business owners, medical professionals, and individuals with significant home equity or liquid savings who are exposed to litigation risk or market downturns.\n\nUNIQUE SELLING POINT: We utilize specific insurance-based contracts that are contractually guaranteed to preserve principal. Unlike traditional brokerage accounts, these vehicles often carry statutory protections from creditors and legal judgments, providing a 'Financial Fortress' for your family's foundation."
    },
    { 
      title: "Education Funds", 
      icon: <GraduationCap size={24} />,
      description: "Create flexible, tax-free education funding solutions that go beyond the limitations and restrictions of traditional 529 plans.",
      detailedDescription: "STRATEGIC OBJECTIVE: Generational Wealth Kickstart.\n\nBENEFITS: Traditional 529 plans are restrictive—use them wrong and you pay penalties; use them right and they may disqualify you from financial aid. Our alternative focuses on tax-free cash accumulation that doesn't count against FAFSA formulas.\n\nTARGET AUDIENCE: Parents and grandparents who want to provide a head start for children without the government 'strings' attached to traditional college savings plans.\n\nUNIQUE SELLING POINT: Flexibility is king. If the child chooses not to go to college, these funds can be used tax-free for a first home down payment, a business start-up, or even as their own retirement foundation. We turn a 'tuition bill' into a 'lifetime bank'."
    },
    { 
      title: "Debt Management", 
      icon: <Clock size={24} />,
      description: "Eliminate high-interest debt and pay off your mortgage in record time using a specialized mathematical payoff strategy.",
      detailedDescription: "STRATEGIC OBJECTIVE: The Interest Redirection Engine.\n\nBENEFITS: Most families lose 34 cents of every dollar to interest payments. Our strategy redirects that lost interest back into your own pocket. We help you become your own bank, paying off all consumer debt and your mortgage in a fraction of the time.\n\nTARGET AUDIENCE: Homeowners and families currently carrying credit card, auto, or student loan debt who want to stop being 'interest slaves' to big banks.\n\nUNIQUE SELLING POINT: Using a proprietary mathematical algorithm, we show clients how to pay off a 30-year mortgage in an average of 9 years or less without increasing their current monthly spending. We stop the interest drag and accelerate your legacy timeline."
    },
    { 
      title: "Life Insurance", 
      icon: <Heart size={24} />,
      description: "Secure your family's future with modern life insurance policies that provide both death protection and living utility.",
      detailedDescription: "STRATEGIC OBJECTIVE: Human Life Value Protection.\n\nBENEFITS: This is the bedrock of legacy. We ensure that in the event of a breadwinner's passing, the family's standard of living, home, and future dreams remain intact. \n\nTARGET AUDIENCE: Families with young children, high debt-to-income ratios, or anyone whose income is essential to their family's survival.\n\nUNIQUE SELLING POINT: We don't guess; we calculate. Using the DIME Method (Debt, Income, Mortgage, Education), we architect a precise coverage amount that accounts for inflation and long-term needs. We align your coverage with the X-Curve Theory to ensure you are over-protected when you have high responsibility and over-funded when you reach retirement."
    },
    { 
      title: "Living Benefits", 
      icon: <Network size={24} />,
      description: "Access your policy's death benefit while you're still alive in the event of a critical, chronic, or terminal illness.",
      detailedDescription: "STRATEGIC OBJECTIVE: The Health-Wealth Safety Net.\n\nBENEFITS: 60% of all bankruptcies are caused by medical bills—even for people with health insurance. Living Benefits allow you to access your life insurance death benefit while you are still alive to pay for treatment, home care, or income replacement.\n\nTARGET AUDIENCE: Every individual who values their ability to earn an income and wants to ensure a heart attack, stroke, or cancer diagnosis doesn't lead to financial ruin.\n\nUNIQUE SELLING POINT: Unrestricted Cash Access. Unlike traditional health insurance or Long Term Care, the money from Living Benefits is paid directly to YOU, not the hospital. You spend it on whatever you need to maintain your quality of life during a health crisis."
    },
    { 
      title: "Estate Planning", 
      icon: <HeartPulse size={24} />,
      description: "Coordinate a seamless, tax-efficient transfer of wealth to your heirs while avoiding the delays and costs of probate.",
      detailedDescription: "STRATEGIC OBJECTIVE: Efficient Generational Transition.\n\nBENEFITS: Avoid the 12-18 month probate delay and the 3-8% cost of probate fees. We ensure your assets move directly to your loved ones in the most tax-efficient manner possible.\n\nTARGET AUDIENCE: Retirees, business owners, and individuals with significant assets who want to leave a legacy, not a legal mess, for their heirs.\n\nUNIQUE SELLING POINT: Strategic Liquidity. With the 2026 TCJA Sunset approaching, many families will face increased estate taxes. We specialize in providing 'Immediate Liquidity'—ensuring your heirs have the cash to pay final expenses and taxes without being forced to liquidate family property or businesses at a discount."
    },
    { 
      title: "Indexed Growth", 
      icon: <TrendingUp size={24} />,
      description: "Achieve stock market-linked returns with a guaranteed '0% Floor'—meaning you gain when the market grows but never lose principal.",
      detailedDescription: "STRATEGIC OBJECTIVE: Upside Participation, Downside Protection.\n\nBENEFITS: Enjoy the growth of the S&P 500 or other global indices without the risk of 'giving it back' during a crash. This strategy is essential for anyone in the 'Distribution Phase' of retirement.\n\nTARGET AUDIENCE: Conservative to moderate savers who are tired of low interest in CDs/Savings but too afraid of market crashes in traditional brokerage accounts.\n\nUNIQUE SELLING POINT: The 'Annual Reset' Advantage. Every year your account is credited with gains, those gains become your new 'floor'. If the market drops 30% the next year, you lose 0%. You keep 100% of previous gains, allowing for consistent compound growth without the 'Sequence of Returns' risk."
    },
    { 
      title: "Mortgage Protection", 
      icon: <Home size={24} />,
      description: "Ensure your family's home is paid off and secure even if the primary breadwinner is no longer able to provide.",
      detailedDescription: "STRATEGIC OBJECTIVE: Sanctuary Preservation.\n\nBENEFITS: In the event of death or disability, your family's largest monthly expense is eliminated. We clear the deed, providing a debt-free roof over your loved ones' heads.\n\nTARGET AUDIENCE: Current homeowners, new homebuyers, or families with significant remaining mortgage balances.\n\nUNIQUE SELLING POINT: More than just a death benefit. Our mortgage protection includes Disability and Critical Illness riders. If you can't work due to an injury or illness, the policy can pay your monthly mortgage for you, preventing foreclosure and maintaining the family's sanctuary during their most vulnerable moments."
    },
    { 
      title: "Business Strategies", 
      icon: <Factory size={24} />,
      description: "Protect your business and retain top talent with key person insurance, buy-sell funding, and executive bonus plans.",
      detailedDescription: "STRATEGIC OBJECTIVE: Business Continuity & Talent Optimization.\n\nBENEFITS: Protect the business from the loss of a 'Key Person' and ensure a smooth ownership transition. We also help business owners use tax-free growth tools to build their own 'Corporate Reserve'.\n\nTARGET AUDIENCE: Small to mid-sized business owners and partners who want to protect their enterprise and attract elite talent.\n\nUNIQUE SELLING POINT: Section 162 Executive Bonus Plans. We design specialized tax-advantaged accounts that allow business owners to reward key employees with 'Golden Handcuffs'—providing the employee with tax-free retirement benefits while giving the business an immediate tax deduction and ensuring talent retention."
    }
  ]
};

export const PRODUCT_KNOWLEDGE = `
ULTIMATE PROFESSIONAL LEGACY ARCHITECTURE & TECHNICAL DATABASE:

1. THE DIME METHOD:
- Debt: Total consumer debt payoff requirements.
- Income: 10x annual salary for family lifestyle maintenance.
- Mortgage: Total remaining balance on the primary residence.
- Education: Future funding requirements for all children.

2. THE X-CURVE THEORY:
- The Law of Decreasing Responsibility: High need for protection in early life (debt, children, mortgage).
- The Law of Increasing Wealth: High need for asset accumulation in later life (retirement, legacy).
- We bridge these two lines with modern, flexible insurance contracts.

3. THE RULE OF 72:
- A mathematical formula to estimate the number of years required to double your money at a given annual rate of return (72 / interest rate = years to double).

4. TAX DOCTRINE (IRC CODES):
- IRC Section 101(a): Death benefits are generally income tax-free.
- IRC Section 72(e): FIFO tax treatment for cash value withdrawals.
- IRC Section 7702: The definition of life insurance for tax purposes.

5. VOLATILITY BUFFER:
- Using cash value as a non-correlated asset to preserve retirement portfolios during market corrections, preventing the 'Sequence of Returns' risk.
`;

export const COLORS = {
  navy: '#1D3A5F',
  gold: '#C29D6F',
  slate: '#64748b'
};
