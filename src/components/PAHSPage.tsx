import React, { useEffect, useState } from 'react';

const PAHSPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-09-05T19:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: '#0a0e1a', minHeight: '100vh', color: '#fff', margin: 0, padding: 0 }}>
      <section style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a2a1a 50%, #0a1a0a 100%)', padding: '60px 20px 50px', textAlign: 'center', borderBottom: '3px solid #8B0000' }}>
        <p style={{ color: '#C49A6C', fontWeight: 700, letterSpacing: '0.3em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: 20 }}>PROUD SPONSOR OF</p>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 8px', color: '#fff', textTransform: 'uppercase' }}>POTTSVILLE AREA<br /><span style={{ color: '#C49A6C' }}>HIGH SCHOOL</span></h1>
        <h2 style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', fontWeight: 800, color: '#fff', letterSpacing: '0.15em', margin: '0 0 8px', textTransform: 'uppercase' }}>FOOTBALL '26</h2>
        <p style={{ color: '#8B0000', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: 30 }}>CRIMSON TIDE — GAME DAY 🏈</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 30 }}>
          <img src="https://tjjznpls.gensparkspace.com/assets/img/tide-logo.png" alt="Crimson Tide" style={{ height: 80, objectFit: 'contain' }} />
          <img src="https://tjjznpls.gensparkspace.com/assets/img/latimore-logo.png" alt="Latimore Life and Legacy" style={{ height: 80, objectFit: 'contain' }} />
        </div>
        <img src="https://tjjznpls.gensparkspace.com/assets/img/beatgoeson-banner.png" alt="#TheBeatGoesOn" style={{ maxWidth: 260, width: '100%', margin: '0 auto 30px', display: 'block' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 35 }}>
          {[['days', timeLeft.days], ['hrs', timeLeft.hours], ['min', timeLeft.minutes], ['sec', timeLeft.seconds]].map(([label, val]) => (
            <div key={label as string} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(196,154,108,0.3)', borderRadius: 12, padding: '12px 16px', minWidth: 60, textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#C49A6C', lineHeight: 1 }}>{String(val).padStart(2,'0')}</div>
              <div style={{ fontSize: '0.6rem', color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360, margin: '0 auto' }}>
          <a href="https://latimorelifelegacy.fillout.com/latimorelifelegacy" target="_blank" rel="noopener noreferrer" style={{ background: '#C49A6C', color: '#0a0e1a', padding: '16px 24px', borderRadius: 50, fontWeight: 900, textDecoration: 'none', fontSize: '0.95rem', textTransform: 'uppercase', textAlign: 'center', boxShadow: '0 8px 25px rgba(196,154,108,0.4)' }}>GET YOUR FREE PROTECTION REVIEW</a>
          <a href="tel:+17176152613" style={{ background: 'transparent', color: '#C49A6C', padding: '14px 24px', borderRadius: 50, fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', border: '2px solid #C49A6C', textAlign: 'center' }}>📞 Call Jackson Direct</a>
        </div>
      </section>
      <section style={{ padding: '60px 20px', maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#C49A6C', fontWeight: 700, letterSpacing: '0.25em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: 12 }}>Our Story</p>
        <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', fontWeight: 900, marginBottom: 30, lineHeight: 1.2 }}>A Saved Life Became A <em style={{ color: '#C49A6C' }}>Mission</em></h2>
        <div style={{ background: 'rgba(196,154,108,0.08)', border: '1px solid rgba(196,154,108,0.2)', borderLeft: '4px solid #C49A6C', borderRadius: '0 12px 12px 0', padding: '20px 24px', marginBottom: 28, textAlign: 'left' }}>
          <p style={{ color: '#C49A6C', fontWeight: 700, fontSize: '0.8rem', marginBottom: 6 }}>December 7, 2010</p>
          <p style={{ color: '#ddd', lineHeight: 1.7, margin: 0 }}>Jackson M. Latimore Sr. collapsed from sudden cardiac arrest at ESU's Koehler Fieldhouse — and was saved by an AED placed by the <strong style={{ color: '#C49A6C' }}>Gregory W. Moyer Defibrillator Fund</strong>, honoring a 15-year-old boy who died from the same cause.</p>
        </div>
        <p style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 16 }}>We don't sell fear. We help <strong style={{ color: '#fff' }}>families in Schuylkill, Luzerne, and Northumberland counties</strong> prepare for life's uncertainties with clarity and confidence.</p>
        <p style={{ color: '#C49A6C', fontWeight: 700 }}>Supporting PAHS football is just one way we put our mission into action — <strong>right here, in our community.</strong></p>
        <p style={{ marginTop: 16, color: '#8B0000', fontWeight: 700 }}>#TheBeatGoesOn 🏈 #LatimoreLifeAndLegacy</p>
      </section>
      <section style={{ background: 'rgba(255,255,255,0.03)', padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ color: '#C49A6C', fontWeight: 700, letterSpacing: '0.25em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: 12 }}>What We Do</p>
        <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 900, marginBottom: 40 }}>Your Complete Financial Protection Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, maxWidth: 720, margin: '0 auto 40px' }}>
          {[['🛡️','Life Insurance & Living Benefits'],['💰','Retirement Income & Annuities'],['📈','Indexed Growth & IRA Strategies'],['🏛️','Estate & Legacy Planning'],['🏢','Business Owner & Key Person'],['🏠','Mortgage Protection Term']].map(([icon, title]) => (
            <div key={title} style={{ background: 'rgba(196,154,108,0.07)', border: '1px solid rgba(196,154,108,0.2)', borderRadius: 16, padding: '24px 16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 10 }}>{icon}</div>
              <p style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', margin: 0 }}>{title}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
          {['North American','F&G','American Equity','Ethos','American General','Foresters'].map(c => (
            <span key={c} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '6px 14px', fontSize: '0.75rem', color: '#ccc' }}>{c}</span>
          ))}
        </div>
        <p style={{ color: '#888', fontSize: '0.8rem' }}>Serving <strong style={{ color: '#C49A6C' }}>Schuylkill · Luzerne · Northumberland</strong><br /><span style={{ fontSize: '0.75rem' }}>560,000+ residents across Central Pennsylvania</span></p>
      </section>
      <section style={{ padding: '60px 20px', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#C49A6C', fontWeight: 700, letterSpacing: '0.25em', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: 12 }}>Let's Connect</p>
        <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 900, marginBottom: 10 }}>Start the Conversation</h2>
        <p style={{ color: '#888', marginBottom: 36 }}>A 15-minute call is all it takes to know exactly where you stand.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { href: 'https://latimorelifelegacy.fillout.com/latimorelifelegacy', icon: '📋', label: 'Free Protection Review', sub: 'Get Started — Takes 2 Min', primary: true },
            { href: 'tel:+17176152613', icon: '📞', label: 'Call Jackson Direct', sub: '(717) 615-2613' },
            { href: 'mailto:pahssponsorship@latimorelegacy.com', icon: '✉️', label: 'Email Jackson', sub: 'pahssponsorship@latimorelegacy.com' },
            { href: 'https://agents.ethoslife.com/invite/29ad1', icon: '🔍', label: 'Get a Term Life Quote', sub: 'Apply Online via Ethos' },
            { href: 'https://www.instagram.com/jacksonlatimore.global', icon: '📸', label: 'Follow on Instagram', sub: '@jacksonlatimore.global' },
            { href: 'https://www.facebook.com/LatimoreLegacyLLC/', icon: '👍', label: 'Follow on Facebook', sub: '@LatimoreLegacyLLC' },
            { href: 'https://www.linkedin.com/in/startwithjacksongfi', icon: '💼', label: 'Connect on LinkedIn', sub: 'Jackson M. Latimore Sr.' },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: item.primary ? '#C49A6C' : 'rgba(255,255,255,0.04)', border: '1px solid ' + (item.primary ? '#C49A6C' : 'rgba(255,255,255,0.1)'), borderRadius: 16, textDecoration: 'none', color: item.primary ? '#0a0e1a' : '#fff', textAlign: 'left' }}>
              <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
              <div><div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.label}</div><div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{item.sub}</div></div>
            </a>
          ))}
        </div>
      </section>
      <footer style={{ background: '#060810', padding: '40px 20px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: '#C49A6C', fontWeight: 900, letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: 4 }}>LATIMORE LIFE & LEGACY LLC</p>
        <p style={{ color: '#555', fontSize: '0.75rem', marginBottom: 16 }}>Protecting Today. Securing Tomorrow.</p>
        <p style={{ color: '#444', fontSize: '0.65rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 16px' }}>Jackson M. Latimore Sr. · Licensed in Pennsylvania · NIPR #21638507 · PA D.O.I. License #1268820<br />Schuylkill · Luzerne · Northumberland Counties</p>
        <p style={{ color: '#333', fontSize: '0.6rem', lineHeight: 1.6, maxWidth: 560, margin: '0 auto' }}>Life insurance and annuity products are subject to underwriting approval. This page is for informational purposes only and does not constitute financial, legal, or tax advice. Proud sponsor of Pottsville Area High School Football 2026.</p>
      </footer>
    </div>
  );
};

export default PAHSPage;
