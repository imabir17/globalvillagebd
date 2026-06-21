import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: "career-counseling",
      title: "Career Counseling",
      desc: "Expert guidance to choose the right course and university tailored to your profile.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      )
    },
    {
      id: "university-application",
      title: "University Application",
      desc: "End-to-end assistance with university applications and documentation.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      )
    },
    {
      id: "visa-processing",
      title: "Visa Processing",
      desc: "Comprehensive support for visa applications, interview prep, and financial documentation.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      )
    },
    {
      id: "japanese-language",
      title: "Japanese Language",
      desc: "Specialized courses for JLPT/NAT preparation.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      )
    },
    {
      id: "tourist-visa",
      title: "Tourist Visa",
      desc: "Assistance for visiting friends, family, or tourism abroad.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
      )
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero text-center" style={{ padding: '6rem 1.5rem', background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="pill-badge" style={{ background: '#EFF6FF', color: '#3B82F6', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', display: 'inline-block', marginBottom: '1.5rem' }}>
            World-Class Guidance
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            Your Journey to Global Education <span className="text-primary">Starts Here</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2.5rem' }}>
            We provide end-to-end support for students aspiring to study abroad. From choosing the right university to landing in your dream destination, we are with you every step of the way.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/consultation" className="btn-primary">Book a Free Consultation</Link>
            <Link href="/about" className="btn-outline-dark" style={{ borderColor: '#E2E8F0' }}>Learn About Us</Link>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Core Services</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Tailored solutions designed to make your study abroad application seamless and successful.
            </p>
          </div>

          <div className="grid grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="service-card-modern">
                <div className="card-top">
                  <div className="icon-box">
                    {service.icon}
                  </div>
                  <div className="arrow-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="card-bottom">
                  <Link href={`/services/${service.id}`} className="explore-link">
                    Explore Service &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Trust GVA */}
      <section className="section" style={{ padding: '2rem 0 6rem 0' }}>
        <div className="container grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div className="trust-content">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Why Students Trust <span className="text-primary">GVA</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              We don't just process applications; we build careers. Our experienced counselors ensure that you make informed decisions that align with your long-term goals.
            </p>
            <ul className="trust-features" style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {['98% Visa Success Rate', 'Review by University Alumni', 'Scholarship Assistance', 'Pre-Departure Briefings'].map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-main)', fontWeight: '500' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-light-blue" style={{ display: 'inline-block', background: '#EFF6FF', color: '#3B82F6', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: '600' }}>
              More About Us
            </Link>
          </div>
          <div className="trust-image" style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Students studying together" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner text-center text-white" style={{ backgroundColor: 'var(--primary)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>Ready to Take the Next Step?</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Book a free consultation with our experts and get a personalized roadmap for your study abroad journey.
          </p>
          <Link href="/consultation" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '1rem 2rem', fontSize: '1rem', fontWeight: '600' }}>
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
