# Latimore Life & Legacy - Digital Portfolio

A modern, professional digital portfolio and business card for **Jackson M. Latimore Sr.**, Founder & CEO of Latimore Life & Legacy LLC.

## 🎯 Features

- **Interactive Digital Business Card** - Mobile-optimized professional profile
- **AI-Powered Assistant** - Smart chatbot that answers questions about services
- **Service Showcase** - 10 comprehensive financial services with detailed explanations
- **Legacy Blueprint Tool** - Interactive planning calculator
- **Living Benefits Guide** - Educational resource for policy features
- **Contact Integration** - One-tap call, email, and booking
- **Social Media Links** - Direct connections to all platforms
- **vCard Export** - Save contact directly to phone

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📦 Project Structure

```
latimore-merged/
├── src/
│   ├── components/
│   │   ├── Assistant.tsx         # AI chatbot component
│   │   ├── LegacyBlueprint.tsx   # Interactive planning tool
│   │   └── LivingBenefitsGuide.tsx # Educational guide
│   ├── services/
│   │   └── aiService.ts          # Mock AI service (no API keys needed)
│   ├── App.tsx                   # Main application
│   ├── constants.tsx             # Business data and services
│   ├── types.ts                  # TypeScript definitions
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── index.html                    # HTML template
└── package.json                  # Dependencies
```

## 🎨 Customization

### Update Business Information

Edit `src/constants.tsx` to update:
- Contact information
- Services offered
- Social media links
- Brand colors
- Company tagline and bio

### Modify Brand Colors

The current brand uses:
- Navy: `#1D3A5F`
- Gold: `#C29D6F`

To change colors, update:
1. `src/constants.tsx` - COLORS object
2. `src/index.css` - Custom color references
3. `tailwind.config.js` - Theme colors

### Add Real AI Integration

The current app uses a mock AI service. To integrate real AI (Claude, GPT, etc.):

1. Install the API SDK:
```bash
npm install @anthropic-ai/sdk
# or
npm install openai
```

2. Replace `src/services/aiService.ts` with real API calls
3. Add environment variables for API keys
4. Update `.env.local` (never commit this file!)

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to Netlify:
   - Drag and drop to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repo for continuous deployment

3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 2: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts to link project

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Custom Hosting

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder contents to your web server
3. Ensure your server is configured to serve `index.html` for all routes

## 🔧 Environment Variables (Optional)

For production with real AI integration, create `.env.local`:

```
VITE_ANTHROPIC_API_KEY=your_api_key_here
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

**Never commit `.env.local` to version control!**

## 📱 Mobile Optimization

The app is fully responsive and optimized for:
- iPhone (all models)
- Android devices
- Tablets
- Desktop browsers

Test on multiple devices using browser dev tools or real devices.

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run build
```

### TypeScript Errors

Ensure you're using Node 18+:
```bash
node --version
```

### Images Not Loading

- Ensure banner URL in `constants.tsx` is accessible
- Check browser console for 404 errors
- Verify image URLs are HTTPS

## 📄 License & Compliance

- Licensed financial services firm (PA License #1268820)
- All tools are for educational purposes
- Not formal financial advice
- See footer disclaimers in app

## 🤝 Support

For technical issues or questions:
- Email: jackson1989@latimorelegacy.com
- Phone: (856) 895-1457

## 🎉 Credits

Built with:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

---

**#TheBeatGoesOn** 🎵

© 2025 Latimore Life & Legacy LLC
