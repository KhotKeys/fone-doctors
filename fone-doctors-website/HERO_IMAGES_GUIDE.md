# Hero Carousel - Adding Custom Images

## Overview
The hero carousel has 3 beautiful slides with automatic transitions. Currently it uses gradient backgrounds, but you can easily add your own images!

## Current Setup
- **3 Hero Slides** with auto-rotation (6 seconds each)
- **Navigation Controls** (previous/next buttons)
- **Slide Indicators** (dots to jump to specific slide)
- **Gradient Backgrounds** (can be replaced with images)

## How to Add Custom Images

### Option 1: Using Local Images (Recommended)

1. **Create an `images` folder:**
   ```
   fone-doctors-website/
   └── public/
       └── images/
           ├── hero-1.jpg
           ├── hero-2.jpg
           └── hero-3.jpg
   ```

2. **Update the heroSlides in `src/App.jsx`:**
   
   Find this section (around line 30):
   ```javascript
   const heroSlides = [
     {
       title: 'Your Devices, Fixed Right',
       // ... other properties ...
       imageUrl: '/images/hero-1.jpg', // Change this line
     },
     {
       title: 'Fast & Reliable Service',
       // ... other properties ...
       imageUrl: '/images/hero-2.jpg', // Change this line
     },
     {
       title: 'Buy & Sell Devices',
       // ... other properties ...
       imageUrl: '/images/hero-3.jpg', // Change this line
     },
   ];
   ```

### Option 2: Using Online Images

Just replace the `imageUrl` with any public image URL:

```javascript
const heroSlides = [
  {
    title: 'Your Devices, Fixed Right',
    subtitle: 'Professional repair services with 12-month warranty',
    background: 'linear-gradient(...)',
    icon: '🔧',
    cta: 'Get Started',
    pattern: 'pattern-repair',
    imageUrl: 'https://example.com/your-image-1.jpg', // Your image URL
  },
  // ... more slides
];
```

### Option 3: Using Placeholder Service

Current setup uses placeholder images:
```javascript
imageUrl: 'https://via.placeholder.com/1200x600/1a1a1a/dc2626?text=Professional+Repair+Service'
```

You can customize these:
- Size: `1200x600` (width x height)
- Background: `1a1a1a` (hex color)
- Text color: `dc2626` (hex color)
- Text: `Professional+Repair+Service`

Visit [via.placeholder.com](https://via.placeholder.com) to generate custom placeholders.

## Image Specifications

For best results, use images with these specs:

| Aspect | Specification |
|--------|--------------|
| Size | 1200 x 600 pixels (or larger) |
| Format | JPG, PNG, WebP |
| Quality | High quality, optimized |
| Content | Relevant to repair/tech |
| Contrast | High contrast (dark images work best with text overlay) |

## Recommended Images for Each Slide

### Slide 1: "Your Devices, Fixed Right"
- Technical/repair tools
- Technician working on device
- Phone or laptop being repaired
- Color scheme: Dark/Black with red accents

### Slide 2: "Fast & Reliable Service"
- Fast-paced action shot
- Technician hands working
- Speed/efficiency theme
- Color scheme: Red dominant

### Slide 3: "Buy & Sell Devices"
- Multiple devices displayed
- Trading/exchange theme
- Devices in hand
- Color scheme: Dark with metallic tones

## Where to Find Free Images

1. **Unsplash** (unsplash.com)
   - Free high-quality images
   - Search: "phone repair", "technician", "electronics"

2. **Pexels** (pexels.com)
   - Free stock photos
   - Search: "device repair", "technology"

3. **Pixabay** (pixabay.com)
   - Free images and videos
   - Search: "repair service", "technology"

4. **Freepik** (freepik.com)
   - Free and premium images
   - Great for tech/repair themes

## How the Hero Carousel Works

```javascript
// Hero Slide Structure
{
  title: 'Main heading text',
  subtitle: 'Supporting description',
  background: 'Fallback gradient if no image',
  icon: '🔧', // Emoji icon that floats above content
  cta: 'Button text',
  pattern: 'pattern-repair', // CSS pattern class
  imageUrl: '/images/hero-1.jpg', // Your image path/URL
}
```

## Features Included

✨ **Auto-Rotation**
- Automatically advances to next slide every 6 seconds
- Can be customized: `setInterval(nextSlide, 6000);` (value in milliseconds)

🎨 **Visual Overlay**
- Semi-transparent overlay to ensure text readability
- Each slide has its own color-coded overlay pattern

🎯 **Navigation**
- Previous/Next buttons (arrows on sides)
- Indicator dots at bottom to jump to specific slide
- Click any dot to go directly to that slide

⚡ **Performance**
- Smooth CSS transitions
- Efficient rendering
- Works on all devices (mobile, tablet, desktop)

## Customizing the Carousel Behavior

### Change Auto-Rotation Speed
In `src/App.jsx`, find this line (around line 50):
```javascript
const interval = setInterval(nextSlide, 6000); // 6000ms = 6 seconds
// Change 6000 to your desired milliseconds
// 3000 = 3 seconds (faster)
// 10000 = 10 seconds (slower)
```

### Change Slide Timing
To change how long each slide displays, modify the interval value above.

### Remove Auto-Rotation
To disable auto-rotation completely:
```javascript
// Comment out the entire useEffect:
/*
React.useEffect(() => {
  const interval = setInterval(nextSlide, 6000);
  return () => clearInterval(interval);
}, []);
*/
```

## Troubleshooting

### Image Not Showing
1. Check the image path is correct
2. Verify image file exists
3. Check browser console for 404 errors
4. Try using a full URL instead of relative path

### Image Quality Issues
1. Use high-resolution images
2. Optimize images before uploading
3. Check file size (should be under 500KB per image)

### Text Not Readable
1. The overlay might be too transparent
2. Adjust the `.hero-slide::before` opacity in `src/App.css`
3. Change overlay color to better contrast

## CSS Overlay Opacity

To adjust text readability, modify in `src/App.css`:

```css
.hero-slide::before {
  background: rgba(0, 0, 0, 0.4); /* Change 0.4 to 0-1 range */
  /* 0 = transparent, 1 = completely black */
  /* Try 0.5 or 0.6 for better text visibility */
}
```

## Image Optimization Tips

1. **Compress Images**
   - Use TinyPNG, ImageOptim, or Squoosh
   - Aim for 100-300KB per image

2. **Use WebP Format**
   - Smaller file size
   - Better quality
   - Modern browsers support it

3. **Responsive Images**
   - Provide different sizes for mobile/desktop
   - Use image srcset if possible

## Live Demo

The carousel is live on your home page! Visit:
- `http://localhost:3000` (local)
- Your deployed URL (online)

## Support

For issues with images:
1. Check browser console (F12 → Console tab)
2. Verify image URLs in `src/App.jsx`
3. Test with placeholder images first
4. Check image file exists in correct location

---

**Ready to add your images? Follow Option 1 above!** 🚀
