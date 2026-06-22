import React from 'react';
import ConsultationButton from '@/components/ConsultationButton';

export const metadata = {
  title: "Student Visa Processing | Global Village Academy",
  description: "High success rate student visa processing services. We ensure your documents are perfect and prepare you for embassy interviews.",
};

export default function StudentVisaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569974534898-103328e1dc1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", height: '450px' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in-up">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>Student Visa Processing</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem auto', color: 'white' }}>
            Transform your university offer into a reality. We provide meticulous documentation support and interview preparation to secure your student visa.
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
                Stress-Free Visa Applications
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                The visa application phase is often the most stressful part of studying abroad. With constantly changing regulations and strict documentation requirements, one mistake can lead to a refusal. Our expert team ensures your file is flawless.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Financial Documentation</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We guide you on how to correctly showcase bank solvency, income sources, and sponsorship letters according to embassy standards.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Interview Preparation</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Rigorous mock interviews to build your confidence and ensure you can answer embassy officers' questions clearly and convincingly.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>High Success Rate</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Our deep understanding of visa policies translates into a 98% student visa success rate across top study destinations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up stagger-2" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Visa Processing" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="section-title">Visa Application Process</h2>
          <div className="grid grid-cols-4 steps-container">
            <div className="step-card stagger-1 animate-fade-in-up">
              <div className="step-number">1</div>
              <h3>Checklist Creation</h3>
              <p className="text-muted">Providing a customized list of documents required for your specific country and profile.</p>
            </div>
            <div className="step-card stagger-2 animate-fade-in-up">
              <div className="step-number">2</div>
              <h3>File Assembly</h3>
              <p className="text-muted">Thorough review of financial statements, medical reports, and academic certificates.</p>
            </div>
            <div className="step-card stagger-3 animate-fade-in-up">
              <div className="step-number">3</div>
              <h3>Form Filing</h3>
              <p className="text-muted">Accurate completion of complex online visa application forms and paying fees.</p>
            </div>
            <div className="step-card stagger-4 animate-fade-in-up">
              <div className="step-number">4</div>
              <h3>Embassy Appointment</h3>
              <p className="text-muted">Scheduling biometrics and visa interviews, followed by post-decision passport tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center" style={{ backgroundColor: '#1E40AF', padding: '5rem 0' }}>
        <div className="container animate-fade-in-up">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
            Don't Let Visa Hurdles Stop You
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', color: 'white' }}>
            Start your visa processing with experts who care about your future. Let's make your study abroad dream a reality.
          </p>
          <ConsultationButton className="btn-primary" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '1rem 3rem', fontSize: '1.25rem', border: 'none' }}>
            Book Your Free Consultation Now
          </ConsultationButton>
        </div>
      </section>
    </>
  );
}
