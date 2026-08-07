# Fone Doctors Website - Deployment Guide

## Pre-Deployment Checklist

- [ ] Update WhatsApp Business number in `src/App.jsx`
- [ ] Customize products and services
- [ ] Update business information (address, hours, contact)
- [ ] Test chatbot responses
- [ ] Test shopping cart and WhatsApp integration
- [ ] Review all pages on mobile devices
- [ ] Test links (internal and external)
- [ ] Compress images if using custom ones
- [ ] Update SEO meta tags in `index.html`

## Step 1: Setup Local Development

```bash
# Clone or extract project
cd fone-doctors-website

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

## Step 2: Make Customizations

### Update WhatsApp Number
File: `src/App.jsx`

Search for `256700000000` and replace with your actual number:
```javascript
const whatsappOrderLink = `https://wa.me/YOUR_NUMBER?text=...`;
const whatsappContactLink = 'https://wa.me/YOUR_NUMBER?text=...';
```

### Update Products
File: `src/App.jsx`, line ~30

```javascript
const products = [
  { id: 1, name: 'Your Service', price: 5000, category: 'repair' },
  { id: 2, name: 'Another Service', price: 3000, category: 'accessory' },
];
```

### Update FAQs
File: `src/App.jsx`, line ~50

```javascript
const faqs = [
  { q: 'Your question?', a: 'Your answer' },
];
```

## Step 3: Build for Production

```bash
# Generate optimized build
npm run build

# This creates a 'dist' folder with all files ready for deployment
```

## Step 4: Deploy to Vercel (Recommended)

### Method A: Via Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure project (defaults usually work)
6. Click "Deploy"
7. Get your live URL!

### Method B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy from project directory
vercel

# Follow prompts and your site will be live!
```

## Step 5: Deploy to Netlify

### Method A: Via Netlify Website

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Click "New site from Git"
4. Connect your repository
5. Configure settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Method B: Drag & Drop

1. Build locally: `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Your site is live immediately!

## Step 6: Deploy to Traditional Hosting

### FTP/cPanel

1. Build project: `npm run build`
2. Use FTP client to upload `dist` folder contents
3. Point domain to hosting
4. Done!

### Important: Configure Server Routing

Add `.htaccess` file to server root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### AWS S3 + CloudFront

1. Create S3 bucket
2. Upload `dist` folder contents
3. Enable static website hosting
4. Create CloudFront distribution
5. Point domain via Route53

## Step 7: Custom Domain Setup

### For Vercel
1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records (follow Vercel's instructions)
5. Domain active in 5-30 minutes

### For Netlify
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records
4. Domain active immediately

### For Traditional Hosting
1. Point domain's nameservers to your hosting
2. Or update A/CNAME records in domain settings
3. Wait for DNS propagation (24-48 hours)

## Step 8: SSL Certificate

### Vercel & Netlify
- **Automatic!** Free SSL included

### Traditional Hosting
- Install Let's Encrypt (free)
- Or purchase from certificate provider
- Setup automatic renewal

## Step 9: Post-Deployment Testing

### Desktop Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge

### Mobile Testing
- [ ] Test on iPhone
- [ ] Test on Android
- [ ] Test on Tablet
- [ ] Test navigation
- [ ] Test chatbot
- [ ] Test shopping cart
- [ ] Test WhatsApp links

### Functionality Testing
- [ ] All links working
- [ ] Forms submitting
- [ ] Chatbot responding
- [ ] Shopping cart adding/removing items
- [ ] WhatsApp links opening correctly
- [ ] Images loading
- [ ] Responsive design working

### Performance Testing
- [ ] Google PageSpeed Insights (aim for 90+)
- [ ] GTmetrix (check load time)
- [ ] Lighthouse audit

## Step 10: Monitoring & Maintenance

### Monitor Site Performance
```bash
# Generate Lighthouse report
npm install -g lighthouse
lighthouse https://yourdomain.com --view
```

### Regular Updates
- Update dependencies monthly: `npm update`
- Monitor for security issues
- Fix any reported bugs
- Analyze user behavior with Google Analytics

### Backup Strategy
- Regular backups of code
- Version control with Git
- Keep deployment history

## Troubleshooting Deployment Issues

### Site Shows Blank Page
- Check browser console for errors
- Verify all files uploaded to correct location
- Check that index.html is being served

### Links/Assets Not Loading
- Verify base URL configuration
- Check .htaccess or server rewrites
- Ensure all files copied to server

### WhatsApp Links Not Working
- Verify phone number format with country code
- Test link in separate browser
- Ensure WhatsApp Business account active
- Check formatting is correct

### Slow Performance
- Minify files (already done by Vite)
- Enable Gzip compression on server
- Use CDN for static assets
- Optimize images
- Enable caching headers

### 404 Errors on Routes
- Add routing configuration (see "Configure Server Routing")
- For Vercel/Netlify, usually automatic
- For traditional hosting, add .htaccess

## Performance Optimization Tips

1. **Image Optimization**
   - Use WebP format where possible
   - Compress images before upload
   - Lazy load images

2. **Caching**
   - Set cache headers on server
   - Use browser caching
   - Enable service workers

3. **Code Optimization**
   - Already minified by Vite
   - Code splitting enabled
   - Tree shaking active

4. **Database Queries**
   - Not applicable (static site)
   - WhatsApp integration is serverless

## SEO Setup

### Meta Tags (already configured)
- Update `index.html` with your business info
- Add Open Graph tags for social sharing

### Google Search Console
1. Go to [google.com/webmasters](https://google.com/webmasters)
2. Add property
3. Verify domain
4. Submit sitemap

### Google Analytics
1. Create property in Google Analytics
2. Get tracking ID
3. Add to website (optional)

## Next Steps After Deployment

1. **Monitor**: Set up monitoring alerts
2. **Backup**: Regular backup schedule
3. **Security**: Enable 2FA on hosting accounts
4. **Marketing**: Promote your new website
5. **Feedback**: Collect user feedback
6. **Iterate**: Make improvements based on analytics

## Support

For deployment issues:
- Check README.md for troubleshooting
- Review Vercel/Netlify documentation
- Contact your hosting provider
- Check console for error messages

## Checklist: Ready to Deploy?

- [ ] WhatsApp number updated
- [ ] Products/services configured
- [ ] All pages tested locally
- [ ] Mobile responsiveness verified
- [ ] Build completes without errors
- [ ] Deployment platform selected
- [ ] Domain ready
- [ ] SSL certificate planned
- [ ] Post-deployment tests planned
- [ ] Backup strategy in place

**You're ready to deploy! Good luck! 🚀**
