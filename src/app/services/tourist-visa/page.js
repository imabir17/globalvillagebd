import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Tourist Visa Processing | Global Village Academy",
  description: "Expert tourist visa processing for USA, Canada, Europe, Malaysia, Thailand, Singapore, and India. Hassle-free documentation and application support.",
};

export default function TouristVisaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", height: '450px' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in-up">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>Tourist Visa Services</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem auto', color: 'white' }}>
            Explore the world with ease. We provide expert guidance and hassle-free visa processing for top destinations globally.
          </p>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center animate-fade-in-up">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Popular Destinations</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
              We assist with comprehensive documentation, itinerary planning, and application submission for these highly requested countries.
            </p>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            
            {/* USA & Canada */}
            <div className="card animate-fade-in-up stagger-1" style={{ display: 'flex', flexDirection: 'column' }}>
              <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="USA and Canada" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem' }}>USA & Canada</h3>
              <p style={{ color: 'var(--text-muted)', flexGrow: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Secure your B1/B2 visitor visa or Canadian Temporary Resident Visa. We guide you through the DS-160/IMM5257 forms, document preparation proving strong ties to your home country, and interview preparation.
              </p>
            </div>

            {/* Europe (Schengen) */}
            <div className="card animate-fade-in-up stagger-2" style={{ display: 'flex', flexDirection: 'column' }}>
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Europe Schengen" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem' }}>Europe (Schengen)</h3>
              <p style={{ color: 'var(--text-muted)', flexGrow: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Travel across 27 European countries with a single Schengen Visa. We assist with booking authentic flight/hotel itineraries, drafting strong cover letters, and compiling financial solvency documents.
              </p>
            </div>

            {/* Asia (Malaysia, Thailand, Singapore) */}
            <div className="card animate-fade-in-up stagger-3" style={{ display: 'flex', flexDirection: 'column' }}>
              <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Asia" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem' }}>SE Asia</h3>
              <p style={{ color: 'var(--text-muted)', flexGrow: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Fast and reliable e-Visa and sticker visa processing for <strong>Malaysia, Thailand, and Singapore</strong>. Minimal documentation required with rapid turnaround times for your holidays.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Indian Visa Special Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div className="animate-fade-in-up stagger-1">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                Indian Visa Processing
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                We provide specialized, fast-tracked processing for travel to India. We handle the IVAC application intricacies so you don't have to.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#EFF6FF', color: '#3B82F6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Standard Tourist Visa</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Valid for leisure, sightseeing, and casual visits. Usually issued for 6 months to 1 year.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#FEF2F2', color: '#EF4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Double Entry Visa</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Ideal if you plan to visit India, travel to another neighboring country (like Nepal/Bhutan), and re-enter India.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#ECFDF5', color: '#10B981', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Medical Visa</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Expedited processing for medical treatments. We assist in arranging doctor appointment letters from recognized Indian hospitals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up stagger-2" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="India Visa" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="section-title">How We Process Your Visa</h2>
          <div className="grid grid-cols-4 steps-container">
            <div className="step-card stagger-1 animate-fade-in-up">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p className="text-muted">We evaluate your profile, travel history, and destination requirements.</p>
            </div>
            <div className="step-card stagger-2 animate-fade-in-up">
              <div className="step-number">2</div>
              <h3>Documentation</h3>
              <p className="text-muted">We provide a tailored checklist and help prepare letters, itineraries, and forms.</p>
            </div>
            <div className="step-card stagger-3 animate-fade-in-up">
              <div className="step-number">3</div>
              <h3>Submission</h3>
              <p className="text-muted">Assistance with biometrics scheduling, embassy appointments, or e-Visa filing.</p>
            </div>
            <div className="step-card stagger-4 animate-fade-in-up">
              <div className="step-number">4</div>
              <h3>Visa Issuance</h3>
              <p className="text-muted">Passport collection and delivery with your approved visa ready for travel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="section bg-primary text-white text-center" style={{ backgroundColor: '#1E40AF', padding: '5rem 0' }}>
        <div className="container animate-fade-in-up">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>
            Ready to Plan Your Next Trip?
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: 'white' }}>
            Get in touch with our visa experts directly to start your application process. Call us now!
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 700, backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '0.5rem' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +880 1901 519 721
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 700, backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '0.5rem' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +880 1901 519 722
            </div>
          </div>

          <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '1rem 3rem', fontSize: '1.25rem', border: 'none', display: 'inline-block' }}>
            Contact Us Online
          </Link>
        </div>
      </section>
    </>
  );
}
