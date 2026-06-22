import React from 'react';
import ConsultationButton from '@/components/ConsultationButton';

export const metadata = {
  title: "Japanese Language Course | Global Village Academy",
  description: "Master the Japanese language with our expert-led curriculum. Prepare for JLPT and NAT exams and build the foundation for your journey to Japan.",
};

export default function JapaneseLanguagePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", height: '500px' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in-up">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>Japanese Language Course</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: 'white' }}>
            Your first step towards studying, working, and thriving in Japan.<br/>
            Master the language with our expert-led curriculum.
          </p>
          <div className="hero-buttons">
            <ConsultationButton className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.1rem' }}>Enroll Now</ConsultationButton>
          </div>
        </div>
      </section>

      {/* Why Learn Japanese Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate-fade-in-up stagger-1">
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                Why Learn Japanese with GVA?
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Our language course is more than just lessons; it's a complete pathway designed for your success in Japan. Whether you're aiming for higher education or a career, we provide the foundation you need.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0 }}>
                {[
                  { title: "Unlock Opportunities", desc: "Proficiency is essential for university admission and high-quality jobs." },
                  { title: "Cultural Immersion", desc: "Go beyond textbooks and learn about Japanese culture, etiquette, and society." },
                  { title: "Expert Instructors", desc: "Learn from certified teachers specializing in JLPT & NAT preparation." },
                  { title: "Seamless Transition", desc: "The perfect foundation before enrolling in a degree program in Japan." }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#3B82F6', flexShrink: 0, width: '28px', height: '28px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem' }}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-up stagger-2" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Japanese Class" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Course Offerings</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Tailored courses to meet your proficiency goals, from beginner to intermediate levels.
          </p>

          <div className="grid grid-cols-2" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', gap: '2rem' }}>
            {/* N5 Course */}
            <div className="card animate-fade-in-up stagger-1" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '-12px', right: '1.5rem', background: '#3B82F6', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 1rem', borderRadius: '999px', textTransform: 'uppercase' }}>
                Beginner
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--secondary)' }}>JLPT N5 Course</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem' }}>
                Perfect for absolute beginners. Introduction to the language and the first step towards your goal.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem', alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span>Sun - Thu</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem', alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>10:00 AM - 12:00 PM / 12:30 PM - 2:30 PM</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem', alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span>4 Months Duration</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', color: '#3B82F6', fontSize: '1.1rem', fontWeight: 700, alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  <span>20,000 BDT</span>
                </div>
              </div>
              
              <ConsultationButton className="btn-outline-dark" style={{ width: '100%', textAlign: 'center', borderColor: '#3B82F6', color: '#3B82F6' }}>
                Enroll in N5
              </ConsultationButton>
            </div>

            {/* N4 Course */}
            <div className="card animate-fade-in-up stagger-2" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '-12px', right: '1.5rem', background: '#EF4444', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 1rem', borderRadius: '999px', textTransform: 'uppercase' }}>
                Intermediate
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--secondary)' }}>JLPT N4 Course</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem' }}>
                Build on your N5 foundation. Handle complex conversations and prepare for university admission.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem', alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span>Sun - Thu</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem', alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>4:00 PM - 7:00 PM</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem', alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span>4 Months Duration</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', color: '#3B82F6', fontSize: '1.1rem', fontWeight: 700, alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  <span>20,000 BDT</span>
                </div>
              </div>
              
              <ConsultationButton className="btn-outline-dark" style={{ width: '100%', textAlign: 'center', borderColor: '#3B82F6', color: '#3B82F6' }}>
                Enroll in N4
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      {/* Course Methodology */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Course Methodology</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            How we ensure you master the language effectively.
          </p>

          <div className="grid grid-cols-3">
            <div className="service-card-modern stagger-1 animate-fade-in-up" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: '#EFF6FF', color: '#3B82F6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Interactive Classes</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Small class sizes ensure personalized attention and ample opportunity to practice speaking, listening, reading, and writing.</p>
            </div>
            <div className="service-card-modern stagger-2 animate-fade-in-up" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: '#FEF2F2', color: '#EF4444', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Expert Curriculum</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We use globally recognized textbooks like "Minna no Nihongo" and supplement them with modern, interactive learning materials.</p>
            </div>
            <div className="service-card-modern stagger-3 animate-fade-in-up" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: '#ECFDF5', color: '#10B981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Exam-Focused</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Structured specifically to help you succeed in official proficiency tests like the JLPT and NAT, with regular mock tests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center" style={{ backgroundColor: '#1E40AF', padding: '5rem 0' }}>
        <div className="container animate-fade-in-up">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
            Enroll Today and Start Your Journey to Japan!
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', color: 'white' }}>
            Spaces are limited to ensure quality teaching. Contact us to learn more about our upcoming batches.
          </p>
          <ConsultationButton className="btn-primary" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '1rem 2rem', fontSize: '1.1rem', border: 'none' }}>
            Start Registration <span style={{ marginLeft: '0.5rem' }}>&rarr;</span>
          </ConsultationButton>
        </div>
      </section>
    </>
  );
}
