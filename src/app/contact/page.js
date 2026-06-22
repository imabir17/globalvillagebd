import React from 'react';

export const metadata = {
  title: "Contact Us | Global Village Academy",
  description: "Get in touch with Global Village Academy. We are here to answer your questions and help you start your journey.",
};

export default function ContactPage() {
  return (
    <div className="section section-light pb-0" style={{ paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center animate-fade-in-up" style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1rem' }}>
            Get in Touch
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            We're here to answer your questions and help you start your journey.
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
          {/* Left Column */}
          <div className="contact-left" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Head Office Card */}
            <div className="card animate-fade-in-up stagger-1" style={{ padding: '2.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                Head Office
              </h3>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: '#F59E0B', flexShrink: 0, width: '36px', height: '36px', backgroundColor: '#FEF3C7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <strong style={{ color: 'var(--secondary)', display: 'block', marginBottom: '0.25rem' }}>Address:</strong>
                  <span style={{ color: 'var(--text-muted)' }}>House-11 (2nd Floor), Block-J,<br/>Baridhara, Dhaka-1212, Bangladesh</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <div style={{ color: '#3B82F6', flexShrink: 0, width: '36px', height: '36px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <strong style={{ color: 'var(--secondary)' }}>Tel: </strong>
                  <span style={{ color: 'var(--text-muted)' }}>+88-02-226618469</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <div style={{ color: '#3B82F6', flexShrink: 0, width: '36px', height: '36px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <strong style={{ color: 'var(--secondary)' }}>Email: </strong>
                  <a href="mailto:info@globalvillagebd.com" style={{ color: 'var(--text-muted)' }}>info@globalvillagebd.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ color: '#10B981', flexShrink: 0, width: '36px', height: '36px', backgroundColor: '#D1FAE5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div>
                  <strong style={{ color: 'var(--secondary)' }}>WhatsApp: </strong>
                  <span style={{ color: 'var(--text-muted)' }}>+8801901519721, +8801901519722</span>
                </div>
              </div>
            </div>

            {/* Regional Offices Card */}
            <div className="card animate-fade-in-up stagger-2" style={{ padding: '2.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                Regional Offices
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                   <strong style={{ color: 'var(--secondary)' }}>Rajshahi Branch</strong>
                </div>
                <div style={{ paddingLeft: '1.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <p style={{ marginBottom: '0.25rem' }}>56 Rajib Chattar, Bornali Mor, Bilsimla, Boalia, Rajshahi.</p>
                  <p style={{ marginBottom: '0.25rem' }}>Email: rajshahi@globalvillagebd.com</p>
                  <p>WhatsApp: +8801304703806</p>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                   <strong style={{ color: 'var(--secondary)' }}>Kushtia Branch</strong>
                </div>
                <div style={{ paddingLeft: '1.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <p style={{ marginBottom: '0.25rem' }}>Somobai Market-2, 1st Floor, Kataikhana Mor, Kushtia.</p>
                  <p style={{ marginBottom: '0.25rem' }}>Email: kushtia@globalvillagebd.com</p>
                  <p>WhatsApp: +8801711601551</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Form Card */}
            <div className="card animate-fade-in-up stagger-3" style={{ padding: '2.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                Send Us a Message
              </h3>
              
              <form action="mailto:academyglobalvillage@gmail.com" method="POST" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Your Name</label>
                  <input type="text" name="Name" placeholder="John Doe" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Your Email</label>
                  <input type="email" name="Email" placeholder="john@example.com" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Subject</label>
                  <input type="text" name="Subject" placeholder="Inquiry about..." required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                  <textarea name="Message" placeholder="How can we help you?" rows={4} required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '0.875rem' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Embed */}
            <div className="card animate-fade-in-up stagger-4" style={{ padding: 0, overflow: 'hidden', height: '300px', border: '1px solid #E2E8F0', borderRadius: '1rem' }}>
              <iframe 
                src="https://maps.google.com/maps?q=23.7949555,90.4263398&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
