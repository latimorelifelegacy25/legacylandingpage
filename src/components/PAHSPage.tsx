import React from 'react';

const REVIEW_URL = '/pahs/form/';

const PAHSPage: React.FC = () => {
  const images = [
    {
      href: REVIEW_URL,
      className: 'square',
      src: '/pahs/assets/pahs-friday-night-lights.jpg',
      alt: 'Friday Night Lights Pottsville Area Crimson Tide Latimore sponsor poster',
      caption: 'Friday Night Lights sponsor poster — rendered as the actual finished image.',
      loading: 'eager' as const,
    },
    {
      href: REVIEW_URL,
      className: 'wide',
      src: '/pahs/assets/pahs-free-consultation-coupon.jpg',
      alt: 'Free consultation sponsor coupon with Latimore Life and Legacy QR code',
      caption: 'Free Consultation QR coupon — no mobile side-rail rebuild, no text crushing.',
      loading: 'lazy' as const,
    },
    {
      href: REVIEW_URL,
      className: 'square',
      src: '/pahs/assets/pahs-throwback-tide-thursday.jpg',
      alt: 'Throwback Tide Thursday 2005 Coal Region All-Area Football where the journey began',
      caption: 'Throwback Tide Thursday — preserved uncropped.',
      loading: 'lazy' as const,
    },
  ];

  return (
    <main className="pahs-page">
      <style>{`
        .pahs-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(196,154,108,.17), transparent 28rem),
            radial-gradient(circle at top right, rgba(139,26,47,.2), transparent 26rem),
            linear-gradient(180deg, #08131e 0%, #0d1b2a 45%, #07111b 100%);
          color: #fff;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          padding-bottom: calc(112px + env(safe-area-inset-bottom));
          overflow-x: hidden;
        }
        .pahs-hero { width: min(100%, 1120px); margin: 0 auto; padding: 42px 18px 22px; text-align: center; }
        .pahs-kicker { margin: 0 0 16px; color: #C49A6C; font-size: clamp(.74rem, 2.5vw, .95rem); font-weight: 900; letter-spacing: .34em; text-transform: uppercase; }
        .pahs-title { margin: 0; font-size: clamp(3rem, 13vw, 7.5rem); line-height: .9; text-transform: uppercase; letter-spacing: .03em; font-weight: 1000; }
        .pahs-title span { color: #C49A6C; }
        .pahs-subtitle { width: min(100%, 740px); margin: 20px auto 0; color: rgba(255,255,255,.78); font-size: clamp(1rem, 3.4vw, 1.25rem); line-height: 1.55; font-weight: 650; }
        .pahs-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 26px; }
        .pahs-button { display: inline-flex; min-height: 48px; align-items: center; justify-content: center; padding: 13px 22px; border-radius: 999px; text-decoration: none; text-transform: uppercase; font-size: .82rem; font-weight: 1000; letter-spacing: .12em; border: 1px solid rgba(196,154,108,.52); }
        .pahs-button.primary { background: linear-gradient(135deg, #D5B37F 0%, #C49A6C 48%, #A87B45 100%); color: #0B1722; box-shadow: 0 12px 34px rgba(196,154,108,.26); }
        .pahs-button.secondary { color: #fff; background: rgba(255,255,255,.055); }
        .pahs-assets { width: min(100%, 1180px); margin: 0 auto; padding: 16px 14px 42px; display: grid; gap: 28px; }
        .pahs-image-card { display: block; width: 100%; margin-inline: auto; overflow: hidden; border-radius: 24px; border: 1px solid rgba(196,154,108,.38); background: rgba(255,255,255,.035); box-shadow: 0 24px 60px rgba(0,0,0,.42); text-decoration: none; }
        .pahs-image-card.square { max-width: 920px; }
        .pahs-image-card.wide { max-width: 1120px; }
        .pahs-image-card img { display: block; width: 100%; height: auto; object-fit: contain; }
        .pahs-caption { padding: 12px 16px 14px; color: rgba(255,255,255,.80); background: rgba(0,0,0,.28); font-size: .86rem; line-height: 1.45; text-align: center; font-weight: 700; }
        .pahs-proof { width: min(100%, 920px); margin: 0 auto; padding: 20px 18px 72px; text-align: center; color: rgba(255,255,255,.80); line-height: 1.65; }
        .pahs-proof strong { color: #C49A6C; }
        .pahs-sticky { position: fixed; left: 0; right: 0; bottom: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 18px calc(14px + env(safe-area-inset-bottom)); background: linear-gradient(135deg, rgba(8,19,30,.98), rgba(44,62,80,.98)); border-top: 2px solid #C49A6C; box-shadow: 0 -16px 44px rgba(0,0,0,.46); }
        .pahs-sticky-text { min-width: 0; white-space: nowrap; font-size: clamp(.82rem, 3vw, 1rem); font-weight: 1000; letter-spacing: .1em; text-transform: uppercase; }
        .pahs-sticky-button { flex: 0 0 auto; display: inline-flex; min-height: 48px; align-items: center; justify-content: center; padding: 0 22px; border-radius: 14px; background: linear-gradient(135deg, #D5B37F, #C49A6C); color: #0B1722; text-decoration: none; text-transform: uppercase; font-size: .82rem; font-weight: 1000; letter-spacing: .12em; }
        @media (max-width: 620px) {
          .pahs-hero { padding-top: 34px; }
          .pahs-assets { gap: 22px; padding-inline: 10px; }
          .pahs-image-card { border-radius: 16px; }
          .pahs-caption { font-size: .78rem; }
          .pahs-sticky { padding-inline: 14px; }
          .pahs-sticky-button { min-height: 46px; padding-inline: 18px; }
        }
      `}</style>

      <section className="pahs-hero">
        <p className="pahs-kicker">PAHS Protect Funnel</p>
        <h1 className="pahs-title">Friday Night <span>Lights</span></h1>
        <p className="pahs-subtitle">
          Real campaign assets. No rebuilt coupon. No cropped graphics. No empty video box.
          Scan, request, and get local follow-up from Latimore Life &amp; Legacy LLC.
        </p>
        <div className="pahs-actions">
          <a className="pahs-button primary" href={REVIEW_URL}>Start Protection Review</a>
          <a className="pahs-button secondary" href="#campaign-assets">View Campaign Images</a>
        </div>
      </section>

      <section id="campaign-assets" className="pahs-assets" aria-label="PAHS campaign images">
        {images.map((image) => (
          <a key={image.src} className={`pahs-image-card ${image.className}`} href={image.href} aria-label="Start PAHS Protection Review">
            <img src={image.src} alt={image.alt} loading={image.loading} />
            <div className="pahs-caption">{image.caption}</div>
          </a>
        ))}
      </section>

      <section className="pahs-proof">
        <p>
          <strong>Latimore Life &amp; Legacy LLC</strong> is proud to support Pottsville Area Crimson Tide football
          while helping local families review income protection, life insurance, living benefits, and legacy gaps.
        </p>
      </section>

      <div className="pahs-sticky">
        <div className="pahs-sticky-text">PAHS Protect Review</div>
        <a className="pahs-sticky-button" href={REVIEW_URL}>Start Now</a>
      </div>
    </main>
  );
};

export default PAHSPage;
