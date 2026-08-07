# Fone Doctors Website

A professional, responsive website for Fone Doctors device repair services with integrated chatbot, shopping cart, and WhatsApp Business integration.

## Features

✅ **Multi-Page Design**
- Home (Hero section with features)
- Services (Detailed repair and accessory offerings)
- Shop (Product catalog with shopping cart)
- FAQ (Frequently asked questions)
- Contact (Contact form with WhatsApp integration)

✅ **Advanced Functionality**
- AI-Powered Chatbot (responds to pricing, repair time, warranty queries)
- Shopping Cart System (add/remove items, adjust quantities)
- WhatsApp Business Integration (order placement, inquiries)
- Responsive Design (mobile, tablet, desktop)
- Professional Styling (black & white with red accents)

✅ **Technical Stack**
- React 18+
- Vite (Fast build tool)
- Lucide React (Icons)
- CSS3 (Fully responsive)

## Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Extract the zip file:
```bash
unzip fone-doctors-website.zip
cd fone-doctors-website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser and navigate to:
```
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## Deployment Options

### Option 1: Vercel (Recommended - Free & Fast)
1. Sign up at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Or connect GitHub for auto-deploy

### Option 3: Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting
3. Configure server to serve `index.html` for all routes

### Option 4: Docker
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Then:
```bash
docker build -t fone-doctors .
docker run -p 3000:3000 fone-doctors
```

## Configuration

### Update WhatsApp Business Number
Replace `256700000000` throughout the code with your actual WhatsApp Business number:

In `src/App.jsx`, update:
```javascript
const whatsappContactLink = 'https://wa.me/YOUR_NUMBER_HERE?text=Hi Fone Doctors...';
const whatsappOrderLink = 'https://wa.me/YOUR_NUMBER_HERE?text=I\'d like to place an order...';
```

### Customize Products
Edit the `products` array in `src/App.jsx`:
```javascript
const products = [
  { id: 1, name: 'Service Name', price: 5000, category: 'repair' },
  // Add more products...
];
```

### Customize Chatbot Responses
Add more Q&A patterns in the `handleChatSend()` function:
```javascript
if (input.includes('your-keyword')) {
  botResponse = 'Your custom response here';
}
```

### Change Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary: #000000;      /* Main color */
  --secondary: #dc2626;    /* Accent color */
  --background: #ffffff;   /* Background */
  --text: #000000;         /* Text color */
}
```

## File Structure

```
fone-doctors-website/
├── src/
│   ├── App.jsx           (Main component)
│   ├── App.css           (Component styles)
│   ├── index.css         (Global styles)
│   └── main.jsx          (React entry point)
├── index.html            (HTML template)
├── package.json          (Dependencies)
├── vite.config.js        (Vite configuration)
└── README.md             (This file)
```

## Customization Guide

### Add New Pages
1. Create a new component in `src/App.jsx`
2. Add to navigation links
3. Add route handler in main component

### Modify Navigation
Edit `NavBar` component items array in `src/App.jsx`

### Update Footer Links
Modify the `Footer` section in the main render

### Add More Services
Update `faqs` and `products` arrays in `src/App.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized image loading
- Code splitting with Vite
- Minified production builds
- Fast load times (<2s)

## SEO

The website includes:
- Meta tags for description
- Semantic HTML
- Mobile-friendly design
- Fast page load times
- Structured content

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

### Build Fails
```bash
rm -rf node_modules
npm install
npm run build
```

### WhatsApp Links Not Working
- Verify the phone number format (with country code)
- Ensure WhatsApp Business account is active
- Test link in browser first

## Support & Maintenance

- Keep dependencies updated: `npm update`
- Monitor performance with Lighthouse
- Test on real devices regularly
- Backup your data regularly

## License

All rights reserved. Fone Doctors © 2025

## Contact

For support or customization requests, contact your development team.

---

**Last Updated:** 2025
**Version:** 1.0.0
