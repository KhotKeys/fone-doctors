# Fone Doctors Website - Quick Start Guide

**Get your website running in 5 minutes!**

## 1️⃣ Install Node.js
Download from [nodejs.org](https://nodejs.org) if you don't have it.

## 2️⃣ Extract & Navigate
```bash
# Extract the zip file
unzip fone-doctors-website.zip

# Go into the folder
cd fone-doctors-website
```

## 3️⃣ Install Dependencies
```bash
npm install
```
(This downloads all required packages)

## 4️⃣ Start Development Server
```bash
npm run dev
```

Your browser will automatically open to `http://localhost:3000`

## 5️⃣ Customize Your Website

### Update WhatsApp Number
Open `src/App.jsx`, find `256700000000` and replace with your WhatsApp Business number:

```javascript
// Line ~40-41
const whatsappOrderLink = `https://wa.me/YOUR_NUMBER_HERE?text=...`;
const whatsappContactLink = 'https://wa.me/YOUR_NUMBER_HERE?text=...';
```

### Add Your Products
Open `src/App.jsx`, find the `products` array and add your services:

```javascript
const products = [
  { id: 1, name: 'Screen Replacement', price: 4500, category: 'repair' },
  { id: 2, name: 'Battery Replacement', price: 2500, category: 'repair' },
  // Add more...
];
```

### Update Services Page
Open `src/App.jsx`, find `ServicesPage` component and update service descriptions.

## 6️⃣ Make It Live

### Using Vercel (Easiest - Recommended)
```bash
npm install -g vercel
vercel
```
Follow prompts. Your site will be live in minutes!

### Using Netlify
```bash
npm run build
# Upload the 'dist' folder to netlify.com
```

### Using Your Own Server
```bash
npm run build
# Upload contents of 'dist' folder via FTP/cPanel
```

## 📱 Test Everything

- [ ] Homepage loads
- [ ] Click navigation links
- [ ] Open chatbot
- [ ] Add products to cart
- [ ] Try WhatsApp links
- [ ] Test on mobile phone

## 🎨 Customize Colors (Optional)

Open `src/index.css`:
```css
:root {
  --primary: #000000;      /* Change to your main color */
  --secondary: #dc2626;    /* Change to your accent color */
}
```

## 📝 Common Customizations

**Change Company Name:**
- Search for "FoneD" in `src/App.jsx` and replace

**Add New Page:**
- Create new component in `src/App.jsx`
- Add to navigation links
- Add route handler

**Update Hero Text:**
- Find `<h1>Your Devices, Fixed Right</h1>` in `src/App.jsx`
- Change to your text

**Update FAQs:**
- Find `const faqs = [...]` in `src/App.jsx`
- Add your questions and answers

## 🚀 Deploy in 3 Steps

### Step 1: Build
```bash
npm run build
```

### Step 2: Choose Platform
- **Vercel**: `vercel` (instant deployment)
- **Netlify**: Drag `dist` folder to netlify.com
- **Your Server**: Upload `dist` folder via FTP

### Step 3: Add Domain
Point your domain to the hosting platform.

## ❓ Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**npm install fails?**
```bash
rm -rf node_modules
npm cache clean --force
npm install
```

**Need to update WhatsApp number later?**
Just edit `src/App.jsx` and rebuild.

## 📞 Where to Add Your Business Info

| Info | Location |
|------|----------|
| Company Name | `src/App.jsx` (search "FoneD") |
| WhatsApp Number | `src/App.jsx` (line ~40) |
| Services | `src/App.jsx` (products array) |
| Hero Text | `src/App.jsx` (HomePage component) |
| Colors | `src/index.css` (CSS variables) |
| FAQs | `src/App.jsx` (faqs array) |

## 📚 Learn More

- Full documentation: See `README.md`
- Deployment guide: See `DEPLOYMENT_GUIDE.md`
- React docs: [react.dev](https://react.dev)
- Vite docs: [vitejs.dev](https://vitejs.dev)

## ✅ Deployment Checklist

- [ ] Node.js installed
- [ ] `npm install` completed
- [ ] WhatsApp number updated
- [ ] Products added
- [ ] Tested locally with `npm run dev`
- [ ] Built with `npm run build`
- [ ] Uploaded to hosting
- [ ] Domain configured
- [ ] Tested on mobile
- [ ] All links working

## 🎉 You're Ready!

Your professional Fone Doctors website is ready to serve customers!

**Next time you run it:**
```bash
cd fone-doctors-website
npm run dev
```

**Questions?** Check `README.md` and `DEPLOYMENT_GUIDE.md`

---

Happy coding! 🚀
