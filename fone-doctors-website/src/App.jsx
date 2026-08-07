import React, { useState } from 'react';
import { MessageCircle, ShoppingCart, Menu, X, Send, ChevronDown } from 'lucide-react';
import './App.css';

const FoneDoctorsWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ type: 'bot', text: 'Hi! Welcome to Fone Doctors. How can I help you today?' }]);
  const [chatInput, setChatInput] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showNotif, setShowNotif] = useState(false);

  // Products Database
  const products = [
    { id: 1, name: 'Screen Replacement (Phone)', price: 45, category: 'repair', image: '/images/fone-screen.jpeg' },
    { id: 2, name: 'Battery Replacement', price: 25, category: 'repair', image: '/images/fone-battery.jpeg' },
    { id: 3, name: 'Phone Charger', price: 12, category: 'accessory', image: '/images/fone-charges.jpeg' },
    { id: 4, name: 'Phone Case (Premium)', price: 15, category: 'accessory', image: '/images/fone-phone-case.jpeg' },
    { id: 5, name: 'Laptop Screen Repair', price: 90, category: 'repair', image: '/images/fone-laptop-repair.jpeg' },
    { id: 6, name: 'Tempered Glass (Pack of 3)', price: 8, category: 'accessory', image: '/images/fone-tempered-glass .jpeg' },
    { id: 7, name: 'Water Damage Recovery', price: 60, category: 'repair', image: '/images/fone-water-damage.jpeg' },
    { id: 8, name: 'USB-C Cable', price: 8, category: 'accessory', image: '/images/fone-usb-c-cable.jpeg' },
    { id: 9, name: 'Screen Protector', price: 6, category: 'accessory', image: '/images/fone-screen-protector.jpeg' },
    { id: 10, name: 'Motherboard Repair', price: 120, category: 'repair', image: '/images/motherboard-repair.jpeg' },
  ];

  // FAQs Database
  const faqs = [
    { q: 'What is the cost of screen replacement?', a: 'Screen replacement starts from £45 depending on your device model. We use quality parts and offer a 12-month warranty.' },
    { q: 'How long does a repair take?', a: 'Most repairs are completed within 1-3 hours. Complex repairs may take up to 24 hours.' },
    { q: 'Do you provide warranty?', a: 'Yes, all repairs come with a 12-month warranty on parts and labor.' },
    { q: 'What devices do you repair?', a: 'We repair phones, laptops, tablets, and other electronic devices.' },
    { q: 'Can I order online?', a: 'Yes! Add items to your cart and checkout. Your order will be sent to our WhatsApp for confirmation.' },
    { q: 'How do I place an order?', a: 'Use our shop, add items to cart, and checkout. You\'ll be connected to our WhatsApp Business for payment.' },
  ];

  // Cart Functions
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) removeFromCart(id);
    else setCart(cart.map(item => item.id === id ? { ...item, qty } : item));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Chatbot Logic
  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    setChatMessages([...chatMessages, { type: 'user', text: chatInput }]);

    let botResponse = '';
    const input = chatInput.toLowerCase();

    if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
      botResponse = 'We have various repair and accessory prices:\n• Screen repair: £45+\n• Battery: £25\n• Water damage: £60\n• Accessories: £6-£15\n\nVisit our shop to browse all items!';
    } else if (input.includes('time') || input.includes('how long')) {
      botResponse = 'Most repairs take 1-3 hours. Complex issues may take up to 24 hours. We always inform you of the timeline.';
    } else if (input.includes('warranty')) {
      botResponse = 'All our repairs come with a 12-month warranty on both parts and labor. We use genuine components.';
    } else if (input.includes('repair') || input.includes('fix')) {
      botResponse = 'We repair phones, laptops, tablets, and other devices. What device needs fixing? We can handle screen, battery, water damage, and more!';
    } else if (input.includes('order') || input.includes('buy')) {
      botResponse = 'Great! Go to our Shop page, add items to your cart, and checkout. You\'ll be connected to our WhatsApp Business to complete the order.';
    } else if (input.includes('hello') || input.includes('hi')) {
      botResponse = 'Hello! Welcome to Fone Doctors. How can I assist you today? You can ask about repairs, prices, warranty, or placing an order.';
    } else {
      botResponse = 'Good question! I can help with repair costs, timeframes, warranty info, and ordering. What would you like to know?';
    }

    setTimeout(() => {
      setChatMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 300);

    setChatInput('');
  };

  // Business Information
  const businessInfo = {
    name: 'Fone Doctors Ltd',
    address: '69 Green Lane, Derby, DE11ERS',
    phone: ['0332 363 356', '0774 000 038', '0774 000 030'],
    email: 'fonedoctorslid@gmail.com',
    whatsapp: '447740000030', // UK number with +44
  };

  // Dynamic Copyright Year
  const currentYear = new Date().getFullYear();

  // WhatsApp Links (Using actual WhatsApp number)
  const waBase = 'https://wa.me/message/NEKPWSOVHZRKA1';
  const whatsappOrderLink = `${waBase}`;
  const whatsappContactLink = `${waBase}`;
  const whatsappBookLink = `${waBase}`;
  const whatsappInquireLink = `${waBase}`;
  const whatsappFooterLink = `${waBase}`;
  const whatsappCTALink = `${waBase}`;
  const whatsappHeroLink = `${waBase}`;
  const whatsappBusinessLink = `${waBase}`;


  // Navigation Component
  const NavBar = () => (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Fone Doctors" className="logo-img" />
        </div>

        <div className="nav-links">
          {[
            { id: 'home', label: 'Home' },
            { id: 'services', label: 'Services' },
            { id: 'shop', label: 'Shop' },
            { id: 'faq', label: 'FAQ' },
            { id: 'contact', label: 'Contact' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button onClick={() => setCurrentPage('shop')} className="cart-btn">
            <ShoppingCart size={20} />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="menu-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {[
            { id: 'home', label: 'Home' },
            { id: 'services', label: 'Services' },
            { id: 'shop', label: 'Shop' },
            { id: 'faq', label: 'FAQ' },
            { id: 'contact', label: 'Contact' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileMenuOpen(false);
              }}
              className="mobile-menu-item"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const heroSlides = [
    {
      title: 'Your Devices, Fixed Right',
      subtitle: 'Professional repair services with 12-month warranty',
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #FEEFC3 100%)',
      cta: 'Get Started',
      pattern: 'pattern-repair',
      imageUrl: '/images/fone-hero-two.jpeg',
    },
    {
      title: 'Fast & Reliable Service',
      subtitle: 'Most repairs completed in 1-3 hours. Expert technicians.',
      background: 'linear-gradient(135deg, #FEEFC3 0%, #FEEFC3 50%, #000000 100%)',
      cta: 'Shop Now',
      pattern: 'pattern-speed',
      imageUrl: '/images/fone-hero-three.jpeg',
    },
    {
      title: 'Buy & Sell Devices',
      subtitle: 'Trade in your old device and get credit instantly',
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #FEEFC3 100%)',
      cta: 'Learn More',
      pattern: 'pattern-trade',
      imageUrl: '/images/fone-hero-sell.jpeg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Auto-advance slides every 6 seconds
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const showTimer = setTimeout(() => setShowNotif(true), 1000);
    const hideTimer = setTimeout(() => setShowNotif(false), 6000);
    const onScroll = () => setShowNotif(false);
    window.addEventListener('scroll', onScroll);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Home Page
  const HomePage = () => (
    <div className="page home-page">
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Full view" />
        </div>
      )}
      {/* Hero Carousel Section */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''} ${slide.pattern}`}
              style={{
                backgroundImage: slide.imageUrl ? `url('${slide.imageUrl}')` : slide.background,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="hero-pattern"></div>
              <div className="hero-content">
                <div className="hero-text-inner">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <div className="hero-buttons">
                    <button onClick={() => setCurrentPage('shop')} className="btn btn-primary">
                      {slide.cta}
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button className="carousel-btn prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            ❯
          </button>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {[
              { title: 'Fast Turnaround', text: 'Most repairs done in 1-3 hours' },
              { title: '12-Month Warranty', text: 'All repairs backed by our warranty' },
              { title: 'Quality Parts', text: 'Genuine components only' },
              { title: 'Expert Technicians', text: 'Certified and experienced professionals' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineer At Work Section */}
      <section className="engineer-section">
        <div className="engineer-inner">
          <div className="engineer-image">
            <img src="/images/fone-screen.jpeg" alt="Engineer repairing a device" />
            <div className="engineer-badge">Expert Technicians</div>
          </div>
          <div className="engineer-text">
            <span className="engineer-tag">Trusted Repairs Since Day One</span>
            <h2>We Fix It Right,<br />Every Single Time</h2>
            <p>Our certified engineers handle everything from cracked screens to complex motherboard repairs. Every device is treated with care, precision, and backed by our 12-month warranty.</p>
            <div className="engineer-stats">
              <div className="engineer-stat">
                <strong>500+</strong>
                <span>Repairs Done</span>
              </div>
              <div className="engineer-stat">
                <strong>12 Mo</strong>
                <span>Warranty</span>
              </div>
              <div className="engineer-stat">
                <strong>1-3 Hr</strong>
                <span>Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="product-showcase">
        <div className="container">
          <h2>What We Sell &amp; Fix</h2>
          <p className="section-subtitle">Browse our most popular repairs and accessories</p>
          <div className="showcase-grid">
            {[
              { img: '/images/fone-screen.jpeg', label: 'Screen Repair' },
              { img: '/images/fone-battery.jpeg', label: 'Battery Replacement' },
              { img: '/images/fone-laptop-repair.jpeg', label: 'Laptop Repair' },
              { img: '/images/fone-water-damage.jpeg', label: 'Water Damage' },
              { img: '/images/fone-phone-case.jpeg', label: 'Phone Cases' },
              { img: '/images/fone-charges.jpeg', label: 'Chargers' },
              { img: '/images/fone-usb-c-cable.jpeg', label: 'USB-C Cables' },
              { img: '/images/fone-screen-protector.jpeg', label: 'Screen Protectors' },
              { img: '/images/motherboard-repair.jpeg', label: 'Motherboard Repair' },
              { img: '/images/fone-tempered-glass .jpeg', label: 'Tempered Glass' },
            ].map((item, i) => (
              <div key={i} className="showcase-card" onClick={() => setLightboxImage(item.img)}>
                <div className="showcase-img">
                  <img src={item.img} alt={item.label} />
                </div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Fone Doctors?</h2>
          <div className="why-grid">
            {[
              { num: '100+', label: 'Happy Customers Monthly' },
              { num: '5', label: 'Star Rating' },
              { num: '15+', label: 'Years Experience' },
              { num: '24/7', label: 'Customer Support' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-number">{item.num}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <h2>What We Fix</h2>
          <p className="section-subtitle">From cracked screens to water damage, we handle it all</p>
          <div className="services-preview-grid">
            {[
              { title: 'Phones', desc: 'Screen, battery, charging port repairs' },
              { title: 'Laptops', desc: 'Keyboard, screen, motherboard issues' },
              { title: 'Batteries', desc: 'Quick battery replacement service' },
              { title: 'Protection', desc: 'Cases, screen protectors & accessories' },
            ].map((service, i) => (
              <div key={i} className="service-preview-card">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setCurrentPage('shop')} className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Explore All Services
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            {[
              { name: 'Sarah J.', rating: 5, text: 'Amazing service! My phone screen was replaced in under an hour.' },
              { name: 'Mike T.', rating: 5, text: 'Professional team, fair prices, and excellent warranty. Highly recommend!' },
              { name: 'Emma L.', rating: 5, text: 'Best repair shop in Derby. Quick turnaround and quality work.' },
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{'★'.repeat(testimonial.rating)}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-name">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Fix Your Device?</h2>
          <p>Visit us today or call ahead to schedule a repair</p>
          <div className="cta-buttons">
            <button onClick={() => setCurrentPage('contact')} className="btn btn-primary">
              Get In Touch
            </button>
            <a href={whatsappCTALink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  // Services Page
  const ServicesPage = () => (
    <div className="page">
      <div className="page-hero" style={{ backgroundImage: "url('/images/fone-screen.jpeg')" }}>
        <div className="page-hero-overlay">
          <h1>Our Services</h1>
          <p>Professional repairs with a 12-month warranty</p>
        </div>
      </div>

      {/* Discount Promo Section */}
      <div className="discount-promo-section">
        <div className="discount-promo-content">
          <div className="discount-promo-text">
            <span className="discount-promo-tag">Exclusive Offers</span>
            <h2>Save More on Every Repair</h2>
            <p>We believe everyone deserves quality repairs at a fair price. That's why we offer special discounts for students and key workers.</p>
            <ul className="discount-promo-list">
              <li><span className="promo-badge">10% OFF</span> Students with valid ID</li>
              <li><span className="promo-badge">15% OFF</span> Blue Light Card holders: NHS, Police, Fire &amp; Rescue</li>
            </ul>
            <p className="discount-promo-note">Simply show your card or ID in store to claim your discount.</p>
          </div>
          <div className="discount-promo-image">
            <img src="/images/discount.jpeg" alt="Customer holding phone at Fone Doctors" />
          </div>
        </div>
      </div>

      {/* Discounts Banner */}
      <div className="discounts-banner-wrap">
        <div className="discounts-banner">
          <div className="discount-item">
            <div className="discount-value">10% OFF</div>
            <div className="discount-text">Students</div>
            <div className="discount-note">with valid student ID</div>
          </div>
          <div className="discount-divider"></div>
          <div className="discount-item">
            <div className="discount-value">15% OFF</div>
            <div className="discount-text">Blue Light Card</div>
            <div className="discount-note">NHS, Police, Fire &amp; Rescue</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="services-grid">
          {[
            { title: 'Phone Repair', desc: 'Screen, battery, charging, water damage, and more.', price: 'From £25' },
            { title: 'Laptop Repair', desc: 'Screen, keyboard, motherboard, hard drive issues.', price: 'From £50' },
            { title: 'Buy & Sell', desc: 'Trade in your old device and get credit towards new ones.', price: 'Competitive Prices' },
            { title: 'Accessories', desc: 'Chargers, cables, cases, screen protectors, and more.', price: '£6-£15' },
          ].map((s, i) => (
            <div key={i} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <p className="service-price">{s.price}</p>
              <a href={whatsappInquireLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const filterMap = { 'All': null, 'Phone Repairs': 'repair', 'Laptop Repairs': 'repair', 'Accessories': 'accessory' };
  const filteredProducts = activeFilter === 'All' ? products
    : activeFilter === 'Phone Repairs' ? products.filter(p => p.category === 'repair' && p.id <= 2 || p.id === 7 || p.id === 10)
    : activeFilter === 'Laptop Repairs' ? products.filter(p => p.id === 5)
    : products.filter(p => p.category === 'accessory');

  // Shop Page
  const ShopPage = () => (
    <div className="page">
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Full view" />
        </div>
      )}
      <div className="page-hero" style={{ backgroundImage: "url('/images/fone-hero-two.jpeg')" }}>
        <div className="page-hero-overlay">
          <h1>Shop</h1>
          <p>Repairs, accessories and more, all in one place</p>
        </div>
      </div>

      {/* Customer Testimonial Banner */}
      <div className="shop-testimonial-banner">
        <div className="shop-testimonial-inner">
          <div className="shop-testimonial-avatar">
            <img src="/images/customer.png" alt="Happy customer" />
          </div>
          <div className="shop-testimonial-body">
            <p className="shop-testimonial-quote">
              "I've used Fone Doctors twice this year already. It's super convenient, they fixed my screen same day. Technicians are very friendly and knowledgeable. I highly recommend using Fone Doctors!"
            </p>
            <a href={whatsappBookLink} target="_blank" rel="noopener noreferrer" className="shop-testimonial-btn">
              Book Repair
            </a>
          </div>
        </div>
        <div className="shop-testimonial-hand">
          <img src="/images/hand.svg" alt="" aria-hidden="true" />
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          <aside className="shop-sidebar">
            <h2>Shop</h2>
            <div className="filters">
              {['All', 'Phone Repairs', 'Laptop Repairs', 'Accessories'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          <main className="shop-main">
            <div className="products-grid">
              {filteredProducts.map(p => (
                <div key={p.id} className="product-card">
                  <div className="product-image" onClick={() => setLightboxImage(p.image)}>
                    <img src={p.image} alt={p.name} />
                  </div>
                  <h3>{p.name}</h3>
                  <p className="product-price">£{p.price.toLocaleString()}</p>
                  <button onClick={() => addToCart(p)} className="btn btn-primary">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="cart-section">
                <h2>Shopping Cart ({cart.length})</h2>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div>
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-price">£{item.price.toLocaleString()} each</p>
                      </div>
                      <div className="cart-item-controls">
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={e => updateQty(item.id, parseInt(e.target.value))}
                          className="qty-input"
                        />
                        <p className="cart-item-total">£{(item.price * item.qty).toLocaleString()}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <p>Total: £{cartTotal.toLocaleString()}</p>
                </div>
                <a
                  href={whatsappOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                >
                  Place Order on WhatsApp
                </a>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );

  // FAQ Page
  const FaqPage = () => (
    <div className="page">
      <div className="page-hero" style={{ backgroundImage: "url('/images/fone-laptop-repair.jpeg')" }}>
        <div className="page-hero-overlay">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our services</p>
        </div>
      </div>
      <div className="container faq-container">
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="faq-question"
              >
                {faq.q}
                <ChevronDown size={20} className={expandedFaq === i ? 'rotated' : ''} />
              </button>
              {expandedFaq === i && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="page">
      <div className="page-hero" style={{ backgroundImage: "url('/images/fone-hero-three.jpeg')" }}>
        <div className="page-hero-overlay">
          <h1>Get in Touch</h1>
          <p>We're here to help, reach out any time</p>
        </div>
      </div>
      <div className="container contact-container">

        {/* Contact Information */}
        <div className="contact-info-card">
          <h2>Fone Doctors Ltd</h2>
          <div className="info-item">
            <strong>Address:</strong>
            <p>{businessInfo.address}</p>
          </div>
          <div className="info-item">
            <strong>Phone Numbers:</strong>
            <ul>
              {businessInfo.phone.map((num, i) => (
                <li key={i}>
                  <a href={`tel:${num}`}>{num}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <p>
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <h3>Send us a Message</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="Your phone number" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your message..." rows="6"></textarea>
          </div>
          <a
            href={whatsappCTALink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Send via WhatsApp
          </a>
        </form>

        <div className="contact-cta">
          <p>Or call us directly on any of the numbers above</p>
          <a href={whatsappBusinessLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            WhatsApp Business
          </a>
        </div>
      </div>
    </div>
  );

  // Chatbot Component (inline to prevent focus loss on re-render)
  const renderChatBot = () => (
    <div className="chatbot">
      <div className="chatbot-header">
        <h3>Fone Doctors Support</h3>
        <button onClick={() => setShowChat(false)} className="close-btn">×</button>
      </div>

      <div className="chatbot-messages">
        {chatMessages.map((msg, i) => (
          <div key={i} className={`chat-message chat-${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleChatSend()}
          placeholder="Ask me anything..."
          autoFocus
        />
        <button onClick={handleChatSend} className="send-btn">
          <Send size={18} />
        </button>
      </div>
    </div>
  );

  // Main Render
  return (
    <div className="app">
      {showNotif && (
        <div className="landing-notif" onClick={() => setShowNotif(false)}>
          <div className="landing-notif-icon">🔧</div>
          <div className="landing-notif-text">
            <strong>Is your screen cracked? Battery draining fast?</strong>
            <span>We fix it same day. Walk in or book via WhatsApp.</span>
          </div>
          <button className="landing-notif-close" onClick={() => setShowNotif(false)}>×</button>
        </div>
      )}
      <NavBar />

      <main className={`main-content ${currentPage === 'home' ? 'no-top-margin' : ''}`}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'faq' && <FaqPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Floating Chatbot Button */}
      {!showChat && (
        <button onClick={() => setShowChat(true)} className="chatbot-fab">
          <MessageCircle size={24} />
        </button>
      )}

      {showChat && renderChatBot()}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <p className="footer-logo">Fone Doctors<span>.</span></p>
              <p>Professional device repair services.</p>
              <p className="footer-tagline">Expert Repairs | Buy & Sell | Trusted Service</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
                <li><button onClick={() => setCurrentPage('services')}>Services</button></li>
                <li><button onClick={() => setCurrentPage('shop')}>Shop</button></li>
                <li><button onClick={() => setCurrentPage('faq')}>FAQ</button></li>
                <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
              </ul>
            </div>
            <div>
              <h4>Contact Info</h4>
              <p className="footer-text">{businessInfo.address}</p>
              <div className="footer-phones">
                {businessInfo.phone.map((num, i) => (
                  <p key={i} className="footer-text">
                    <a href={`tel:${num}`}>{num}</a>
                  </p>
                ))}
              </div>
              <p className="footer-text">
                <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
              </p>
              <a href={whatsappFooterLink} target="_blank" rel="noopener noreferrer" className="footer-link">
                WhatsApp Business
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {currentYear} Fone Doctors Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoneDoctorsWebsite;