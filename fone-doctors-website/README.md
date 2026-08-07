# Fone Doctors Website

A modern, responsive website for **Fone Doctors**, a device repair and accessories business. The platform provides customers with information about repair services, an online product catalogue, shopping cart functionality, an AI-powered chatbot, and WhatsApp Business integration.

---

## Overview

The Fone Doctors website is built with React and Vite, providing a fast, responsive, and user-friendly experience across desktop, tablet, and mobile devices.

The website combines service information, product shopping, customer support, and direct WhatsApp communication into a single platform.

### Key Highlights

* 📱 Responsive device repair website
* 🛠️ Repair services and accessory catalogue
* 🛒 Shopping cart functionality
* 🤖 AI-style customer support chatbot
* 💬 WhatsApp Business integration
* 🎨 Professional black, white, and red visual design
* ⚡ Fast development and production builds with Vite
* 📱 Mobile, tablet, and desktop support

---

## Features

### Multi-Page Website

The website includes the following sections:

* **Home** — Hero section, business highlights, and key services
* **Services** — Detailed repair services and accessory offerings
* **Shop** — Product catalogue with shopping cart functionality
* **FAQ** — Frequently asked questions and customer information
* **Contact** — Contact information and WhatsApp integration

### Advanced Functionality

#### AI-Powered Chatbot

The built-in chatbot can respond to common customer questions, including:

* Repair pricing
* Estimated repair times
* Warranty information
* General service enquiries

Chatbot responses can be customised directly within the application.

#### Shopping Cart

The shopping system supports:

* Adding products to the cart
* Removing products
* Increasing or decreasing quantities
* Viewing the order summary
* Sending orders through WhatsApp

#### WhatsApp Business Integration

Customers can contact Fone Doctors directly through WhatsApp for:

* General enquiries
* Repair questions
* Product enquiries
* Placing orders

#### Responsive Design

The website is designed to work across:

* Desktop computers
* Laptops
* Tablets
* Mobile phones

---

## Technology Stack

| Technology                          | Purpose                           |
| ----------------------------------- | --------------------------------- |
| [React](https://react.dev/) 18+     | Frontend framework                |
| [Vite](https://vite.dev/)           | Development server and build tool |
| [Lucide React](https://lucide.dev/) | Icon library                      |
| CSS3                                | Styling and responsive design     |
| JavaScript                          | Application functionality         |

---

## Requirements

Before getting started, make sure you have the following installed:

* **Node.js 14 or newer**
* **npm** or **Yarn**
* A modern web browser

> **Recommendation:** Use a current LTS version of Node.js for the best compatibility with modern React and Vite projects.

---

## Getting Started

### 1. Extract the Project

If you received the project as a ZIP file:

```bash
unzip fone-doctors-website.zip
cd fone-doctors-website
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
```

The development server will normally be available at:

```text
http://localhost:5173
```

> The exact port is determined by your Vite configuration. If your project is configured to use port `3000`, use `http://localhost:3000` instead.

### 4. Open the Website

Open the development URL displayed in your terminal in a modern web browser.

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

This generates a `dist` directory containing the production-ready website.

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The production build can be deployed to most static hosting platforms.

### Vercel

[Vercel](https://vercel.com/) is a recommended option for simple and fast deployments.

#### Using the Vercel CLI

```bash
npm install -g vercel
vercel
```

Alternatively:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Vercel will detect the Vite project.
4. Deploy the application.

### Netlify

[Netlify](https://www.netlify.com/) can also be used to deploy the application.

#### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Upload the generated `dist` directory to Netlify.

#### Git Deployment

Alternatively, connect your GitHub repository to Netlify for automatic deployments.

### Traditional Web Hosting

For traditional hosting:

1. Build the project:

```bash
npm run build
```

2. Upload the contents of the `dist` directory to your web server.
3. Configure the server to serve `index.html` for application routes where required.

### Docker

A basic Docker configuration can be used to build and preview the application:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
```

Build the Docker image:

```bash
docker build -t fone-doctors .
```

Run the container:

```bash
docker run -p 4173:4173 fone-doctors
```

The application will then be available at:

```text
http://localhost:4173
```

---

## Configuration

### WhatsApp Business Number

The WhatsApp integration uses WhatsApp's `wa.me` URL format.

Replace the placeholder phone number with the actual Fone Doctors WhatsApp Business number.

For example:

```javascript
const whatsappContactLink =
  'https://wa.me/YOUR_NUMBER_HERE?text=Hi%20Fone%20Doctors...';

const whatsappOrderLink =
  'https://wa.me/YOUR_NUMBER_HERE?text=I%27d%20like%20to%20place%20an%20order...';
```

### Important

The phone number should:

* Include the international country code
* Not contain spaces
* Not contain `+`
* Not contain brackets or hyphens

For example:

```text
256700000000
```

should be used rather than:

```text
+256 700 000 000
```

---

## Customising Products

Products can be managed through the `products` array in `src/App.jsx`.

Example:

```javascript
const products = [
  {
    id: 1,
    name: 'Screen Replacement',
    price: 5000,
    category: 'repair'
  },
  {
    id: 2,
    name: 'USB-C Charging Cable',
    price: 2500,
    category: 'accessories'
  }
];
```

You can add, remove, or modify products as required.

---

## Customising the Chatbot

Chatbot responses can be customised in the `handleChatSend()` function.

For example:

```javascript
if (input.includes('your-keyword')) {
  botResponse = 'Your custom response here';
}
```

Additional keywords and responses can be added to support more customer questions.

For a production environment, consider replacing keyword-based responses with a dedicated conversational AI API.

---

## Customising the Website Theme

The primary colours can be changed through CSS variables in:

```text
src/index.css
```

Example:

```css
:root {
  --primary: #000000;
  --secondary: #dc2626;
  --background: #ffffff;
  --text: #000000;
}
```

### Default Colour Scheme

| Variable       | Colour    | Purpose              |
| -------------- | --------- | -------------------- |
| `--primary`    | `#000000` | Primary brand colour |
| `--secondary`  | `#dc2626` | Red accent colour    |
| `--background` | `#ffffff` | Main background      |
| `--text`       | `#000000` | Primary text colour  |

---

## Project Structure

```text
fone-doctors-website/
├── src/
│   ├── App.jsx          # Main React application
│   ├── App.css          # Application/component styles
│   ├── index.css        # Global styles and CSS variables
│   └── main.jsx         # React application entry point
│
├── index.html           # HTML entry template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── public/              # Static assets (if applicable)
└── README.md            # Project documentation
```

---

## Customisation Guide

### Adding a New Page

To add a new page or section:

1. Create the required React component.
2. Add the component to the application.
3. Add the corresponding navigation item.
4. Configure routing if the project uses a routing library.
5. Add any required styling.

For a small single-page implementation, components can be added directly to `src/App.jsx`.

### Updating Navigation

Navigation items can be modified in the navigation component within:

```text
src/App.jsx
```

Update the navigation labels, links, and corresponding sections as required.

### Updating the Footer

The footer can be customised in the `Footer` component.

You can update:

* Contact information
* WhatsApp links
* Social media links
* Business address
* Opening hours
* Legal information

### Adding Services

Services can be added or modified within the relevant service data or components in `src/App.jsx`.

For frequently asked questions, update the FAQ data to include common customer enquiries.

---

## Browser Support

The website is designed for modern browsers, including:

* Google Chrome
* Mozilla Firefox
* Safari
* Microsoft Edge
* iOS Safari
* Chrome Mobile

For the best experience, users should keep their browser updated.

---

## Performance

The project benefits from Vite's optimized production build process.

Performance considerations include:

* Optimized production builds
* Minified assets
* Responsive layouts
* Efficient frontend rendering
* Optimized image loading where applicable
* Modern browser support

For production deployments, performance can be monitored using tools such as Google Lighthouse.

---

## SEO

The website includes a foundation for search-engine optimization, including:

* Semantic HTML
* Descriptive page content
* Responsive/mobile-friendly design
* Meta description support
* Fast production builds
* Structured website content

### Recommended Production Improvements

For better search visibility, consider adding:

* Unique `<title>` tags for each page
* Page-specific meta descriptions
* Open Graph metadata
* Twitter/X card metadata
* Canonical URLs
* `sitemap.xml`
* `robots.txt`
* Local Business structured data
* Google Business Profile integration

---

## Troubleshooting

### Port Already in Use

If the default development port is already being used, start Vite on another port:

```bash
npm run dev -- --port 3001
```

Then open:

```text
http://localhost:3001
```

### Build Fails

Try reinstalling the project dependencies:

```bash
rm -rf node_modules
npm install
npm run build
```

On Windows PowerShell, you can use:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

### WhatsApp Links Are Not Working

Check the following:

1. Verify that the WhatsApp number includes the correct international country code.
2. Ensure there are no spaces, `+` symbols, brackets, or hyphens in the number.
3. Confirm that the WhatsApp Business account is active.
4. Test the generated WhatsApp URL directly in a browser.
5. Check that the message text is properly URL encoded.

---

## Maintenance

For ongoing maintenance:

* Keep dependencies updated.
* Run production builds regularly.
* Test the website on real mobile devices.
* Monitor performance with Lighthouse.
* Review chatbot responses periodically.
* Verify WhatsApp links after changing contact details.
* Keep backups of important project and business data.
* Test the shopping cart and order workflow after major updates.

Update dependencies with:

```bash
npm update
```

For a more controlled production workflow, review dependency changes before deploying them.

---

## License

Copyright © 2025 Fone Doctors.

All rights reserved.

Unless otherwise specified, the source code, branding, content, images, and other project assets may not be reproduced, redistributed, or used commercially without permission from Fone Doctors.

---

## Support

For technical support, customisation requests, or further development, contact the Fone Doctors development team.

---

## Project Information

**Project:** Fone Doctors Website
**Version:** 1.0.0
**Status:** Production / Active Development
**Last Updated:** 2026

---

> **Fone Doctors** — Professional device repairs, accessories, and customer support in one convenient online experience.
