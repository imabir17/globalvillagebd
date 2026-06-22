'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ConsultationButton from './ConsultationButton';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo" onClick={() => setIsMobileOpen(false)}>
          <img src="/logo.png" alt="GVA Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span className="logo-text">Global Village <strong>Academy</strong></span>
        </Link>
        
        {/* Hamburger Button */}
        <button 
          className={`hamburger-btn ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMobileOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link href="/" className={pathname === '/' ? "active" : ""}>Home</Link></li>
            <li><Link href="/about" className={pathname === '/about' ? "active" : ""}>About Us</Link></li>
            <li><Link href="/services" className={pathname?.startsWith('/services') ? "active" : ""}>Services</Link></li>
            <li><Link href="/destinations" className={pathname?.startsWith('/destinations') ? "active" : ""}>Destinations</Link></li>
            <li><Link href="/gallery" className={pathname?.startsWith('/gallery') ? "active" : ""}>Gallery</Link></li>
            <li><Link href="/blog" className={pathname?.startsWith('/blog') ? "active" : ""}>Blog</Link></li>
            <li><Link href="/contact" className={pathname === '/contact' ? "active" : ""}>Contact</Link></li>
            <li className="dropdown">
              <button className="dropdown-btn">
                Connect 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="dropdown-content">
                <a href="https://www.facebook.com/globalvillagebd" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                  Facebook
                </a>
                <a href="https://www.instagram.com/globalvillagebd" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" height="18"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/globalvillagebd" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/@globalvillagebd" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02V8.48L15.5 11.75l-5.75 3.27z"></path></svg>
                  YouTube
                </a>
                <a href="https://wa.me/8801901519721" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                  WhatsApp
                </a>
              </div>
            </li>
          </ul>

          <div className="navbar-action">
            <ConsultationButton 
              className="btn-primary" 
              onClick={() => setIsMobileOpen(false)}
            >
              Free Consultation
            </ConsultationButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
