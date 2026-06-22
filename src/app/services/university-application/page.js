import React from 'react';
import ConsultationButton from '@/components/ConsultationButton';

export const metadata = {
  title: "University Admission | Global Village Academy",
  description: "Expert assistance for university admissions worldwide. We help you secure offers from top-ranking global institutions.",
};

export default function UniversityAdmissionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", height: '450px' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in-up">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>University Admission</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem auto', color: 'white' }}>
            Unlock your future with an international degree. We help you secure offers from top-ranking universities across the globe.
          </p>
          <div className="hero-buttons">
            <ConsultationButton className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.1rem' }}>Book Free Consultation</ConsultationButton>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate-fade-in-up stagger-1">
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                Your Gateway to Global Education
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Navigating the complex university application process can be overwhelming. Our experienced admission counselors provide end-to-end support to ensure your application stands out to admission committees.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>University Selection</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We help you shortlist universities that perfectly match your academic profile, budget, and career goals.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>SOP & Essay Guidance</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Craft compelling Statements of Purpose and application essays that highlight your strengths.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Scholarship Assistance</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Identify and apply for merit-based and need-based scholarships to reduce your financial burden.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up stagger-2" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="University Campus" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="section-title">Admission Process Roadmap</h2>
          <div className="grid grid-cols-4 steps-container">
            <div className="step-card stagger-1 animate-fade-in-up">
              <div className="step-number">1</div>
              <h3>Profile Evaluation</h3>
              <p className="text-muted">We assess your transcripts, test scores, and extracurriculars to find the best fit.</p>
            </div>
            <div className="step-card stagger-2 animate-fade-in-up">
              <div className="step-number">2</div>
              <h3>Document Prep</h3>
              <p className="text-muted">Gathering recommendations, drafting SOPs, and ensuring all forms are perfect.</p>
            </div>
            <div className="step-card stagger-3 animate-fade-in-up">
              <div className="step-number">3</div>
              <h3>Application Filing</h3>
              <p className="text-muted">We handle the submission process across multiple university portals flawlessly.</p>
            </div>
            <div className="step-card stagger-4 animate-fade-in-up">
              <div className="step-number">4</div>
              <h3>Offer Acceptance</h3>
              <p className="text-muted">Evaluating your offer letters and paying the initial tuition deposit to secure your seat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center" style={{ backgroundColor: '#1E40AF', padding: '5rem 0' }}>
        <div className="container animate-fade-in-up">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
            Ready to Apply to Your Dream University?
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', color: 'white' }}>
            Don't let the application process hold you back. Let our experts guide you every step of the way.
          </p>
          <ConsultationButton className="btn-primary" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '1rem 3rem', fontSize: '1.25rem', border: 'none' }}>
            Book Your Free Consultation Now
          </ConsultationButton>
        </div>
      </section>
    </>
  );
}
