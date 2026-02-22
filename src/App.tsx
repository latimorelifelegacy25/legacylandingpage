import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Calendar, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Globe, 
  Copy, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  Quote, 
  Download,
  Bot,
  Zap,
  Phone,
  ArrowRight,
  FileSearch,
  Scale
} from 'lucide-react';
import { APP_DATA } from './constants';
import { trackCardEvent } from './services/analytics';
import LegacyBlueprint from './components/LegacyBlueprint';
import LivingBenefitsGuide from './components/LivingBenefitsGuide';
import Assistant from './components/Assistant';
import { ServiceItem } from './types';

const SocialBtn: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    onClick={() => trackCardEvent('click', label)}
    className="p-3 bg-slate-50 text-[#1D3A5F] rounded-2xl hover:bg-[#C29D6F] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm"
  >
    {icon}
  </a>
);

declare global { interface Window { gtag?: (...args: unknown[]) => void; } }

const trackEvent = (action: string, category: string, label: string) => {
  trackCardEvent('click', label);
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, { event_category: category, event_label: label });
  }
};

const ContactAction: React.FC<{ href: string; icon: React.ReactNode; label: string; primary?: boolean }> = ({ href, icon, label, primary }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    onClick={() => trackEvent('click', 'contact_button', label)}
    className={`flex-1 flex flex-col items-center justify-center p-4 rounded-3xl transition-all transform active:scale-95 shadow-sm border ${
      primary 
        ? 'bg-[#1D3A5F] text-white border-[#1D3A5F] hover:bg-[#152a45]' 
        : 'bg-white text-[#1D3A5F] border-slate-100 hover:border-[#C29D6F] hover:bg-slate-50'
    }`}
  >
    <div className={`mb-2 ${primary ? 'text-[#C29D6F]' : 'text-[#C29D6F]'}`}>
      {icon}
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
  </a>
);

const ServiceModal: React.FC<{ service: ServiceItem; onClose: () => void }> = ({ service, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D3A5F]/60 backdrop-blur-sm animate-in fade-in duration-300">
    <div className="bg-white w-full max-w-[400px] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
      <div className="p-6 bg-[#1D3A5F] text-white flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-[#C29D6F] p-2 rounded-xl text-white">
            {service.icon}
          </div>
          <h3 className="font-extrabold text-lg tracking-tight">Service Detail</h3>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>
      <div className="p-8 overflow-y-auto max-h-[70vh] custom-scrollbar">
        <h4 className="text-2xl font-black text-[#1D3A5F] mb-4">{service.title}</h4>
        <p className="text-[#C29D6F] font-bold text-sm mb-6 leading-relaxed italic border-l-4 border-[#C29D6F] pl-4">
          "{service.description}"
        </p>
        <div className="prose prose-slate text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
          {service.detailedDescription}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100">
          <a 
            href={APP_DATA.links.booking} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-4 bg-[#1D3A5F] text-white rounded-2xl font-bold text-sm hover:bg-[#152a45] transition-all"
          >
            <span>Consult Jackson on this Strategy</span>
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [showAssistant, setShowAssistant] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    // Track page visit
    trackCardEvent('visit');

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${APP_DATA.name}
ORG:${APP_DATA.company}
TITLE:${APP_DATA.title}
TEL;TYPE=WORK,VOICE:${APP_DATA.phone}
EMAIL;TYPE=WORK,INTERNET:${APP_DATA.email}
URL:${APP_DATA.links.main}
NOTE:${APP_DATA.license} - ${APP_DATA.tagline}
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${APP_DATA.name.replace(/\s/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-0 sm:py-12 font-sans selection:bg-[#C29D6F]/30 pb-24 relative">
      <div className="max-w-[420px] w-full bg-white rounded-none sm:rounded-[3.5rem] shadow-2xl overflow-hidden relative border-x border-slate-200">
        
        {/* Banner */}
        <div className="w-full h-96 bg-white relative flex items-center justify-center overflow-hidden">
          <img 
            src={APP_DATA.bannerUrl} 
            alt="Latimore Life & Legacy Logo" 
            className="w-full h-full object-contain p-6" 
          />
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#C29D6F]" />
        </div>

        {/* Profile Info & Credentials */}
        <div className="text-center px-8 pt-10 pb-4 bg-white">
          <h1 className="text-3xl font-black text-[#1D3A5F] tracking-tight leading-tight">{APP_DATA.name}</h1>
          <p className="text-slate-500 font-semibold text-lg mt-1">{APP_DATA.title}</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="text-[#C29D6F] font-black uppercase text-[11px] tracking-[0.2em]">{APP_DATA.company}</span>
            <CheckCircle2 size={14} className="text-[#C29D6F]" />
          </div>
          <p className="text-slate-400 text-[10px] mt-2 font-bold uppercase tracking-widest">{APP_DATA.license}</p>
          
          <div className="flex justify-center space-x-3 mt-6">
            <SocialBtn href={APP_DATA.links.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialBtn href={APP_DATA.links.facebook} icon={<Facebook size={20} />} label="Facebook" />
            <SocialBtn href={APP_DATA.links.instagram} icon={<Instagram size={20} />} label="Instagram" />
            <SocialBtn href={APP_DATA.links.main} icon={<Globe size={20} />} label="Website" />
          </div>

          {/* Strategic Contact Bar */}
          <div className="mt-8 flex gap-3 px-2">
            <ContactAction href={`tel:${APP_DATA.phone.replace(/\D/g,'')}`} icon={<Phone size={22} />} label="Call" />
            <ContactAction href={`mailto:${APP_DATA.email}`} icon={<Mail size={22} />} label="Email" />
            <ContactAction href={APP_DATA.links.booking} icon={<Calendar size={22} />} label="Book" primary />
          </div>

          <div className="mt-8 px-4 py-6 bg-[#1D3A5F]/5 rounded-3xl border border-[#1D3A5F]/5 relative overflow-hidden group">
            <Quote size={40} className="absolute -top-2 -left-2 text-[#C29D6F]/10 transform -rotate-12 transition-transform group-hover:rotate-0" />
            <p className="text-[#1D3A5F] text-[13px] leading-relaxed italic font-semibold relative z-10 px-2">
              "{APP_DATA.bio}"
            </p>
          </div>

          {/* Prominent Bio CTA */}
          <div className="mt-6 px-4">
            <a 
              href={APP_DATA.links.booking} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('click', 'cta_button', 'Free Legacy Strategy Review')}
              className="flex items-center justify-center space-x-2 w-full py-4.5 bg-[#C29D6F] text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_10px_20px_-5px_rgba(194,157,111,0.4)] hover:shadow-lg hover:-translate-y-0.5 transition-all transform active:scale-95"
            >
              <Zap size={18} fill="currentColor" />
              <span>Free Legacy Strategy Review</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="px-8 space-y-3 mt-8 mb-10">
          <a href={APP_DATA.links.ethos} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 w-full p-4.5 py-4 bg-white border-2 border-[#1D3A5F] text-[#1D3A5F] rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm transform active:scale-[0.98] group">
            <FileSearch size={20} className="group-hover:scale-110 transition-transform" />
            <span>Get Instant Quote</span>
            <ArrowRight size={16} className="ml-auto opacity-30" />
          </a>
        </div>

        {/* Action Utility */}
        <div className="grid grid-cols-2 gap-4 px-8 mb-10">
          <button onClick={() => { handleCopyLink(); trackCardEvent('click', 'Copy Link'); }} className="flex items-center justify-center space-x-2 py-4 border-2 border-slate-100 rounded-2xl text-slate-400 font-bold text-sm hover:border-slate-200 transition-all">
            <Copy size={18} />
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
          <button onClick={() => { handleSaveContact(); trackCardEvent('click', 'Save Contact'); }} className="flex items-center justify-center space-x-2 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl text-[#1D3A5F] font-bold text-sm hover:bg-slate-100 transition-all">
            <Download size={18} />
            <span>Save Contact</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="px-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#1D3A5F] text-lg font-extrabold tracking-tight">Financial Pillars</h2>
            <div className="h-[2px] w-12 bg-[#C29D6F]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {APP_DATA.services.map((service, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedService(service)}
                className="flex flex-col items-center p-5 bg-white border border-slate-100 rounded-[2rem] hover:border-[#C29D6F] hover:shadow-lg transition-all group text-center"
              >
                <div className="bg-slate-50 p-3 rounded-2xl text-[#1D3A5F] group-hover:bg-[#1D3A5F] group-hover:text-white transition-all mb-3 shadow-sm">
                  {service.icon}
                </div>
                <span className="text-[11px] font-bold text-[#1D3A5F] leading-tight uppercase tracking-tighter">{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI & Interactive Tools */}
        <div className="px-8 space-y-10">
          <LegacyBlueprint />
          <LivingBenefitsGuide />
        </div>

        {/* Footer & Compliance */}
        <footer className="px-8 py-12 bg-slate-50 text-center border-t border-slate-100">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-0.5 w-6 bg-slate-200" />
            <Scale size={16} className="text-slate-300" />
            <div className="h-0.5 w-6 bg-slate-200" />
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="text-[10px] text-slate-400 font-bold leading-relaxed text-justify px-2">
              <p className="mb-2">
                COMPLIANCE & LEGAL DISCLOSURES: Latimore Life & Legacy LLC is a licensed financial services firm (PA License #1268820). 
                The "AI Legacy Blueprint" and "Legacy AI" tools are for illustrative and educational purposes only. 
                Strategies generated do not constitute formal tax, legal, or investment advice.
              </p>
              <p>
                Actual policy performance depends on product specifics, underwriting, and carrier-specific guidelines. 
                Indexed products contain participation rates and caps that are subject to change. 0% floor guarantees 
                are subject to the claims-paying ability of the issuing insurance company.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <img 
              src={APP_DATA.bannerUrl} 
              alt="Logo" 
              className="h-12 mx-auto grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
          
          <p className="text-[#1D3A5F] font-black text-[12px] tracking-widest uppercase">{APP_DATA.hashtag}</p>
          <p className="text-slate-400 text-[9px] mt-2 font-bold">© {new Date().getFullYear()} {APP_DATA.company}</p>
        </footer>
      </div>

      {/* Floating Assistant Trigger */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setShowAssistant(true)}
          className="bg-[#C49A6C] text-[#0E1A2B] w-16 h-16 rounded-full font-black shadow-2xl hover:scale-105 transition"
          aria-label="Open Legacy AI"
          type="button"
        >
          AI
        </button>
      </div>

      {/* AI Overlay */}
      {showAssistant && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={() => setShowAssistant(false)}
          />

          {/* Floating AI Panel */}
          <div className="fixed bottom-24 right-6 z-[9999] w-[420px] max-w-[95vw] h-[70vh] sm:h-[600px] bg-[#1D3A5F] rounded-2xl shadow-2xl overflow-hidden">
            <Assistant onClose={() => setShowAssistant(false)} />
          </div>
        </>
      )}

      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
};

export default App;
