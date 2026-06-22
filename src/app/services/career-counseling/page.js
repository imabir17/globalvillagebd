import React from 'react';
import ConsultationButton from '@/components/ConsultationButton';

export const metadata = {
  title: "Career Counseling | Global Village Academy",
  description: "Expert career and educational counseling to help you choose the right path and universities for a successful future.",
};

export default function CareerCounselingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", height: '450px' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in-up">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>Career & Educational Counseling</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem auto', color: 'white' }}>
            Unsure about which degree or country to choose? Our expert counselors help you align your academic background with your ultimate career goals.
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
                Chart Your Path to Success
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Choosing the right course and university is a life-changing decision. Our personalized counseling sessions dive deep into your interests, strengths, and financial capabilities to map out the perfect educational journey.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Personalized Assessment</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We analyze your past academic records, aptitude, and long-term ambitions to recommend the best fields of study.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Country & University Selection</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Compare global education destinations based on tuition fees, post-study work rights, and lifestyle to find your ideal match.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: '#3B82F6', flexShrink: 0, width: '40px', height: '40px', backgroundColor: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>Career Pathway Planning</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Understand industry trends and the future job market to ensure your degree translates into a rewarding career.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up stagger-2" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Counseling Session" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="section-title">Our Counseling Approach</h2>
          <div className="grid grid-cols-4 steps-container">
            <div className="step-card stagger-1 animate-fade-in-up">
              <div className="step-number">1</div>
              <h3>Initial Chat</h3>
              <p className="text-muted">A brief session to understand your basic profile, budget, and immediate goals.</p>
            </div>
            <div className="step-card stagger-2 animate-fade-in-up">
              <div className="step-number">2</div>
              <h3>Deep Dive</h3>
              <p className="text-muted">Analyzing your academic transcripts and extracurriculars to identify strengths.</p>
            </div>
            <div className="step-card stagger-3 animate-fade-in-up">
              <div className="step-number">3</div>
              <h3>Options Review</h3>
              <p className="text-muted">Presenting a curated list of countries, universities, and specialized courses.</p>
            </div>
            <div className="step-card stagger-4 animate-fade-in-up">
              <div className="step-number">4</div>
              <h3>Action Plan</h3>
              <p className="text-muted">Finalizing your choices and creating a step-by-step timeline for application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center" style={{ backgroundColor: '#1E40AF', padding: '5rem 0' }}>
        <div className="container animate-fade-in-up">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
            Take Control of Your Future
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', color: 'white' }}>
            A 30-minute consultation could change the trajectory of your life. Speak to our experts and get clarity today.
          </p>
          <ConsultationButton className="btn-primary" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '1rem 3rem', fontSize: '1.25rem', border: 'none' }}>
            Book Your Free Consultation Now
          </ConsultationButton>
        </div>
      </section>
    </>
  );
}
