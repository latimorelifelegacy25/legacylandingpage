# 🚀 Deployment Guide - Latimore Life & Legacy

## Quick Deploy Checklist

- [ ] Project builds without errors (`npm run build`)
- [ ] Test locally (`npm run preview`)
- [ ] Update contact information in `src/constants.tsx`
- [ ] Choose hosting platform (Netlify recommended)
- [ ] Deploy `dist/` folder
- [ ] Test on mobile devices
- [ ] Share your link!

---

## Detailed Deployment Steps

### 1️⃣ Pre-Deployment Preparation

#### Update Your Information

Edit `src/constants.tsx` and update:

```typescript
export const APP_DATA: AppData = {
  name: "YOUR NAME",
  title: "YOUR TITLE",
  company: "YOUR COMPANY",
  phone: "(XXX) XXX-XXXX",
  email: "your@email.com",
  // ... etc
};
```

#### Test Locally

```bash
# Install dependencies (first time only)
npm install

# Build the production version
npm run build

# Preview the production build
npm run preview
```

Open `http://localhost:4173` and verify everything works.

---

### 2️⃣ Deploy to Netlify (EASIEST - Recommended for Beginners)

#### Method A: Drag & Drop (No Git Required)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify Drop:**
   - Visit https://app.netlify.com/drop
   - Drag the `dist` folder onto the page
   - Wait 10 seconds
   - Your site is live! 🎉

3. **Get your URL:**
   - Netlify will give you a URL like: `random-name-123.netlify.app`
   - You can customize this in Site Settings

4. **Optional - Custom Domain:**
   - Go to Site Settings > Domain Management
   - Add your custom domain (e.g., `jacksonlatimore.com`)
   - Follow DNS configuration instructions

#### Method B: GitHub Integration (Continuous Deployment)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

4. **Automatic updates:**
   - Every push to GitHub automatically deploys
   - Changes go live in ~2 minutes

---

### 3️⃣ Deploy to Vercel (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project? → No
   - Project name → latimore-legacy (or your choice)
   - Which directory? → `./`
   - Build Command → `npm run build`
   - Output directory → `dist`

4. **Production deployment:**
   ```bash
   vercel --prod
   ```

5. **Your site is live!**
   - URL provided at end of deployment
   - Can add custom domain in Vercel dashboard

---

### 4️⃣ Deploy to GitHub Pages (Free Hosting)

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   
   Add this to your `package.json`:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to GitHub repo → Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Save

5. **Access your site:**
   - Visit `https://YOUR_USERNAME.github.io/YOUR_REPO`
   - May take 5-10 minutes for first deployment

---

### 5️⃣ Custom Domain Setup

#### Using Netlify

1. **Purchase domain** (GoDaddy, Namecheap, Google Domains)

2. **Add to Netlify:**
   - Site Settings → Domain Management → Add custom domain
   - Enter your domain (e.g., `jacksonlatimore.com`)

3. **Configure DNS:**
   
   At your domain registrar, add these records:
   
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: YOUR_SITE.netlify.app
   ```

4. **Enable HTTPS:**
   - Netlify auto-provisions SSL certificate
   - Wait 24 hours for DNS propagation

#### Using Vercel

1. **Add domain in dashboard:**
   - Project Settings → Domains
   - Add domain

2. **Configure DNS** as shown in Vercel dashboard

---

### 6️⃣ Post-Deployment Testing

#### Essential Checks

- [ ] Homepage loads correctly
- [ ] All buttons and links work
- [ ] Images display properly
- [ ] Contact buttons dial/email correctly
- [ ] AI Assistant opens and responds
- [ ] Service modals open
- [ ] Legacy Blueprint calculator works
- [ ] Living Benefits guide opens
- [ ] Mobile responsive on iPhone/Android
- [ ] Load time < 3 seconds

#### Tools for Testing

**Mobile Testing:**
- Use browser DevTools mobile view
- Test on real devices (iPhone, Android)
- Use https://responsivedesignchecker.com

**Performance Testing:**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

**Cross-Browser Testing:**
- Chrome (most users)
- Safari (iPhone users)
- Firefox
- Edge

---

### 7️⃣ Sharing Your Portfolio

#### QR Code Generator

Create a QR code linking to your site:
- https://www.qr-code-generator.com/
- Print on business cards
- Add to marketing materials

#### Social Media

Share announcement posts:

**LinkedIn Template:**
```
🎉 Excited to launch my new digital portfolio!

Discover how I help families in Pennsylvania secure their 
financial legacy with modern life insurance and retirement 
strategies.

🔗 [YOUR_URL]

#FinancialPlanning #LifeInsurance #TheBeatGoesOn
```

**Instagram/Facebook Template:**
```
📱 My digital business card is live!

Tap the link in bio to:
✅ Learn about my services
✅ Book a free consultation
✅ Chat with my AI assistant
✅ Save my contact info

👉 [YOUR_URL]

#LegacyPlanning #FinancialFreedom #Pennsylvania
```

#### Email Signature

```html
Best regards,
Jackson M. Latimore Sr.
Founder & CEO, Latimore Life & Legacy LLC
📱 (856) 895-1457
🌐 [YOUR_URL]
```

---

### 8️⃣ Updating Your Site

#### Netlify (Drag & Drop)

1. Make changes to your code
2. Run `npm run build`
3. Go to Netlify site → Deploys tab
4. Drag new `dist` folder to deploy

#### Netlify (GitHub)

1. Make changes to your code
2. Commit and push to GitHub
3. Automatic deployment happens
4. Check deploy logs in Netlify

#### Vercel

```bash
# Make changes, then:
vercel --prod
```

---

### 🆘 Common Issues & Fixes

#### Issue: "Module not found" error

**Fix:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Issue: Images not loading

**Fix:**
- Check that `bannerUrl` in `constants.tsx` is a valid HTTPS URL
- Verify image URLs are accessible in browser
- Use absolute URLs, not relative paths

#### Issue: Site shows blank page

**Fix:**
1. Check browser console for errors (F12)
2. Verify build completed successfully
3. Test with `npm run preview` locally
4. Check deployment logs for errors

#### Issue: Mobile layout broken

**Fix:**
- Verify viewport meta tag in `index.html`
- Test with Chrome DevTools mobile view
- Clear browser cache and reload

---

### 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. **Get tracking ID** from https://analytics.google.com

2. **Add to `index.html`:**
   ```html
   <head>
     <!-- ... existing meta tags ... -->
     
     <!-- Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     </script>
   </head>
   ```

3. **Redeploy** your site

---

### ✅ You're Live!

Congratulations! Your professional digital portfolio is now live. 

**Next Steps:**
- Add URL to business cards
- Update social media bios
- Share with clients and prospects
- Monitor analytics
- Update content regularly

**Need Help?**
- Email: jackson1989@latimorelegacy.com
- Check README.md for more details
- Review deployment logs for errors

---

**#TheBeatGoesOn** 🎵

Happy deploying! 🚀
