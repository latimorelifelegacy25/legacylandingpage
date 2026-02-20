# 🚀 QUICKSTART - Get Your Site Live in 5 Minutes

## What You Have

A complete, production-ready digital portfolio website with:
- ✅ Professional business card layout
- ✅ AI-powered chatbot (no API keys needed!)
- ✅ Interactive service showcase
- ✅ Contact integration
- ✅ Mobile-optimized design
- ✅ All your business information

## Option 1: Deploy NOW (Easiest - 2 minutes)

### Step 1: Build
```bash
npm install
npm run build
```

### Step 2: Deploy to Netlify
1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder onto the page
3. Done! You get a live URL instantly

Your site is now live at: `https://random-name-123.netlify.app`

## Option 2: Test Locally First (5 minutes)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:5173 in your browser

## What to Customize

### Update Your Information (IMPORTANT!)

Edit `src/constants.tsx`:

```typescript
export const APP_DATA: AppData = {
  name: "Jackson M. Latimore Sr.",  // ← Your name
  phone: "(856) 895-1457",          // ← Your phone
  email: "jackson1989@latimorelegacy.com",  // ← Your email
  // ... update all fields
};
```

### Change Colors

In `src/constants.tsx` at the bottom:

```typescript
export const COLORS = {
  navy: '#1D3A5F',   // ← Your primary color
  gold: '#C29D6F',   // ← Your accent color
};
```

## Files You Can Safely Edit

- ✅ `src/constants.tsx` - All business data
- ✅ `src/components/` - Any component
- ✅ `src/index.css` - Styles
- ❌ `package.json` - Don't touch unless you know what you're doing
- ❌ `vite.config.ts` - Leave as is

## Common Tasks

### Add a New Service

In `src/constants.tsx`, add to the `services` array:

```typescript
{ 
  title: "Your New Service", 
  icon: <YourIcon size={24} />,
  description: "Short description",
  detailedDescription: "Long detailed description..."
}
```

### Update Social Links

In `src/constants.tsx`:

```typescript
links: {
  linkedin: "https://linkedin.com/in/yourprofile",
  facebook: "https://facebook.com/yourpage",
  // ... etc
}
```

### Change Banner Image

In `src/constants.tsx`:

```typescript
bannerUrl: "https://your-image-url.com/image.jpg",
```

## Need Help?

1. **README.md** - Full documentation
2. **DEPLOYMENT.md** - Detailed deployment guide
3. **Email**: jackson1989@latimorelegacy.com

## Next Steps After Deployment

1. ✅ Test on mobile phone
2. ✅ Share link on social media
3. ✅ Add to business cards
4. ✅ Update email signature
5. ✅ Tell clients!

---

**That's it!** You're ready to go. 🎉

**#TheBeatGoesOn**
