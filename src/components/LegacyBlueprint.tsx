
import React, { useState } from 'react';
import { Lightbulb, Sparkles, Send } from 'lucide-react';
import { mockAIService } from '../services/aiService';
import { APP_DATA } from '../constants';

const LegacyBlueprint: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [blueprint, setBlueprint] = useState('');
  const [loading, setLoading] = useState(false);

  const generateBlueprint = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    
    // Create a detailed map of services for the model to reference specific mechanics
    const serviceContext = APP_DATA.services.map(s => 
      `${s.title.toUpperCase()}: ${s.detailedDescription}`
    ).join('\n');

    const systemInstruction = `You are the lead Senior Legacy Architect for Latimore Life & Legacy LLC, working under CEO Jackson M. Latimore Sr.
    
    TASK: Create a sophisticated, multi-layered "Legacy Protection Blueprint" for a client goal.
    
    STRATEGIC CONTEXT (Use these specific mechanics):
    ${serviceContext}

    BLUEPRINT RULES:
    1. Provide exactly 3 high-impact, detailed bullet points.
    2. Each bullet must explain a specific STRATEGIC REASONING and reference the technical mechanics of Jackson's services (e.g., 0% floors, tax-free buckets, living benefit triggers).
    3. You must explicitly reference at least two different services from Jackson's portfolio in your response.
    4. Maintain a high-authority, technical, and reassuring consultation tone.
    5. Word limit: 120-150 words total for the entire response to ensure depth.
    6. End exactly with: "Book a legacy review with Jackson to activate this strategy."
    7. Use simple bullet points (-). Do not use Markdown headers.`;

    try {
      // Generate a focused blueprint based on the goal
      const response = await generateBlueprintResponse(goal);
      setBlueprint(response);
    } catch (error) {
      setBlueprint("We encountered an error. Please try again or contact Jackson directly for a consultation.");
    } finally {
      setLoading(false);
    }
  };

  const generateBlueprintResponse = async (userGoal: string): Promise<string> => {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const lowerGoal = userGoal.toLowerCase();
    
    // Return tailored blueprint based on goal keywords
    if (lowerGoal.includes('retire') || lowerGoal.includes('retirement')) {
      return `**Your Retirement Protection Blueprint:**

- Deploy an Indexed Universal Life (IUL) strategy with a guaranteed 0% Floor—participate in market gains without risking principal loss during downturns, creating a "Tax-Never" bucket for retirement income
- Structure tax-free withdrawals using IRC Section 7702 mechanics, allowing you to access cash value without triggering taxable events, preserving more wealth for your family
- Implement the X-Curve Theory by front-loading protection now while you have responsibility, then transitioning to wealth accumulation as you approach retirement

Book a legacy review with Jackson to activate this strategy.`;
    }
    
    if (lowerGoal.includes('home') || lowerGoal.includes('mortgage') || lowerGoal.includes('house')) {
      return `**Your Home Protection Blueprint:**

- Establish Mortgage Protection with Living Benefit riders that not only pay off your home upon death but also cover monthly payments if you face critical illness or disability
- Layer this with a Tax-Advantaged Debt Elimination Strategy that mathematically accelerates your mortgage payoff from 30 years to ~9 years without increasing monthly spending
- Create an Asset Protection Shield that moves home equity from an "At-Risk" bucket into protected life insurance cash value, safeguarding against creditors while building liquid wealth

Book a legacy review with Jackson to activate this strategy.`;
    }
    
    if (lowerGoal.includes('children') || lowerGoal.includes('kid') || lowerGoal.includes('education') || lowerGoal.includes('college')) {
      return `**Your Family Education Blueprint:**

- Build a tax-free Education Fund using permanent life insurance that doesn't count against FAFSA formulas—funds can be used for college, first home, or business startup without penalties
- Apply the DIME Method to calculate precise life insurance coverage: Debt + 10x Income + Mortgage + Education costs, ensuring your children's future is fully funded regardless of what happens to you
- Structure Living Benefits so if you face a health crisis, your policy provides cash to maintain the family's quality of life and educational plans

Book a legacy review with Jackson to activate this strategy.`;
    }
    
    if (lowerGoal.includes('business') || lowerGoal.includes('company') || lowerGoal.includes('partner')) {
      return `**Your Business Continuity Blueprint:**

- Implement Key Person Insurance to protect against revenue loss if a critical team member is unable to work, with tax-advantaged Section 162 Executive Bonus Plans to retain top talent
- Design a Buy-Sell Agreement funded by life insurance, ensuring seamless ownership transition and preventing forced liquidation during succession events
- Create a Corporate Reserve using cash value life insurance that provides liquidity for opportunities while growing tax-deferred and protected from market volatility

Book a legacy review with Jackson to activate this strategy.`;
    }
    
    if (lowerGoal.includes('debt') || lowerGoal.includes('loan') || lowerGoal.includes('credit')) {
      return `**Your Debt Elimination Blueprint:**

- Deploy the Interest Redirection Engine—stop losing 34 cents of every dollar to bank interest and redirect those payments back into building your own wealth
- Use a mathematical debt-stacking algorithm to pay off all consumer debt and your mortgage in a fraction of traditional timelines, freeing up cash flow for wealth accumulation
- Transition eliminated debt payments into an Indexed Growth strategy with 0% Floor protection, ensuring your recovered cash flow compounds safely for retirement

Book a legacy review with Jackson to activate this strategy.`;
    }
    
    if (lowerGoal.includes('tax') || lowerGoal.includes('wealth') || lowerGoal.includes('accumulation')) {
      return `**Your Wealth Accumulation Blueprint:**

- Architect a "Tax-Never" bucket using Indexed Universal Life with annual reset features that lock in market gains permanently while avoiding downside risk
- Leverage IRC Section 101(a) and 7702 to create tax-free growth, tax-free access, and tax-free transfer to heirs—the ultimate tax-mitigation vehicle for high earners
- Implement the Rule of 72 with conservative 7-8% index caps to double your wealth every 9-10 years, compounding without government interference

Book a legacy review with Jackson to activate this strategy.`;
    }
    
    // Default comprehensive blueprint
    return `**Your Comprehensive Legacy Blueprint:**

- Establish foundational protection using the DIME Method (Debt + Income + Mortgage + Education) to calculate precise life insurance coverage, ensuring your family's lifestyle is preserved regardless of what happens
- Build a Tax-Advantaged Wealth Engine with Indexed Growth featuring a 0% Floor—participate in market gains while protecting principal, creating both security and growth potential
- Deploy Living Benefits that access your death benefit during critical, chronic, or terminal illness, preventing medical bankruptcy and maintaining your family's quality of life during health crises

Book a legacy review with Jackson to activate this strategy.`;
  };

  return (
    <div className="bg-[#1D3A5F]/5 rounded-3xl p-6 border border-[#1D3A5F]/10 mb-10 transition-all">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-[#C29D6F] p-2 rounded-xl text-white">
          <Lightbulb size={20} />
        </div>
        <h2 className="text-[#1D3A5F] text-lg font-extrabold tracking-tight">AI Legacy Blueprint</h2>
      </div>

      {!blueprint ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            Describe a primary goal like <span className="font-semibold text-[#1D3A5F]">"Protecting my home for my children"</span> or <span className="font-semibold text-[#1D3A5F]">"Starting a tax-free retirement plan"</span>.
          </p>
          <div className="relative group">
            <textarea 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="What is your legacy goal?"
              className="w-full p-4 text-sm rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C29D6F]/50 h-28 resize-none bg-white/50 group-hover:bg-white transition-colors"
            />
          </div>
          <button 
            onClick={generateBlueprint}
            disabled={loading || !goal.trim()}
            className="w-full py-4 bg-[#1D3A5F] text-white rounded-2xl text-sm font-bold flex items-center justify-center space-x-2 disabled:opacity-50 hover:bg-[#152a45] transform active:scale-[0.98] transition-all shadow-lg"
          >
            {loading ? <Sparkles className="animate-spin" size={18} /> : <Sparkles size={18} />}
            <span>Generate My Blueprint</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="text-[14px] text-slate-700 leading-relaxed whitespace-pre-wrap bg-white p-5 rounded-2xl border border-[#C29D6F]/30 shadow-inner italic">
            {blueprint}
          </div>
          <button 
            onClick={() => { setBlueprint(''); setGoal(''); }} 
            className="text-xs text-[#1D3A5F] font-bold uppercase tracking-widest hover:text-[#C29D6F] flex items-center space-x-1"
          >
            <span>Reset Tool</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LegacyBlueprint;
