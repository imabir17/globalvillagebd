import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import ConsultationButton from '@/components/ConsultationButton';

export const revalidate = 0;

export default async function Home() {
  const { data: destinationsData } = await supabase.from('destinations').select('*').limit(3).order('created_at', { ascending: true });
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in-up">
          <h1>Your Global Journey <br/><span className="text-gradient">Starts Here</span></h1>
          <p>
            Global Village Academy is your trusted partner in navigating the path
            to a world-class international education. We turn your study abroad
            dreams into reality.
          </p>
          <div className="hero-buttons">
            <ConsultationButton className="btn-primary">Book a Free Consultation</ConsultationButton>
            <a href="/destinations" className="btn-outline">Explore Destinations</a>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="section-title">Why Partner with Global Village Academy?</h2>
          <div className="grid grid-cols-4">
            <div className="card text-center stagger-1 animate-fade-in-up">
              <div className="icon-wrapper">✓</div>
              <h3>Expert Guidance</h3>
              <p className="text-muted">Step-by-step guidance from university selection to visa applications.</p>
            </div>
            <div className="card text-center stagger-2 animate-fade-in-up">
              <div className="icon-wrapper">📋</div>
              <h3>Personalized Counseling</h3>
              <p className="text-muted">Tailored career path planning based on your academic background.</p>
            </div>
            <div className="card text-center stagger-3 animate-fade-in-up">
              <div className="icon-wrapper">🎓</div>
              <h3>Proven Success Rate</h3>
              <p className="text-muted">98% student visa success rate with a strong track record.</p>
            </div>
            <div className="card text-center stagger-4 animate-fade-in-up">
              <div className="icon-wrapper">🌐</div>
              <h3>Global Network</h3>
              <p className="text-muted">Access to over 500 partner universities worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Your Path in 4 Simple Steps</h2>
          <div className="grid grid-cols-4 steps-container">
            <div className="step-card stagger-1 animate-fade-in-up">
              <div className="step-number">1</div>
              <h3>Assessment & Counseling</h3>
              <p className="text-muted">Free session to evaluate your profile and goals.</p>
            </div>
            <div className="step-card stagger-2 animate-fade-in-up">
              <div className="step-number">2</div>
              <h3>University Selection</h3>
              <p className="text-muted">Shortlisting best-fit universities for you.</p>
            </div>
            <div className="step-card stagger-3 animate-fade-in-up">
              <div className="step-number">3</div>
              <h3>Application & Admission</h3>
              <p className="text-muted">Assistance with SOPs, LORs, and admission.</p>
            </div>
            <div className="step-card stagger-4 animate-fade-in-up">
              <div className="step-number">4</div>
              <h3>Visa & Pre-Departure</h3>
              <p className="text-muted">Visa guidance and pre-flight briefings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section section-light">
        <div className="container">
          <div className="destinations-header">
            <h2 className="section-title" style={{ marginBottom: 0 }}>Explore Top Destinations</h2>
            <Link href="/destinations" className="link-primary">View All →</Link>
          </div>
          <div className="grid grid-cols-3 mt-8">
            {(destinationsData || []).map((dest) => (
              <div className="destination-card" key={dest.id}>
                <div className="card-image">
                  <img src={dest.image_url} alt={dest.name} />
                  <div className="card-overlay">
                    <h3>{dest.name}</h3>
                  </div>
                </div>
                <div className="card-content">
                  <p>{dest.description}</p>
                  <ul className="card-features">
                    {dest.points && dest.points.slice(0, 4).map((point, index) => (
                      <li key={index}>
                        <span className="dot"></span> {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/destinations/${dest.id}`} className="btn-outline-dark" style={{display: 'block', textAlign: 'center'}}>
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="section-title text-white">Student Success Stories</h2>
          <div className="grid grid-cols-3">
            <div className="testimonial-card stagger-1 animate-fade-in-up">
              <h4>Anika Rahman</h4>
              <p className="degree">MSc in Data Science, University of Manchester, UK</p>
              <p className="quote">"Global Village Academy made my dream of studying in the UK a reality. Their team was incredibly supportive throughout the entire visa process. I couldn't have done it without them!"</p>
            </div>
            <div className="testimonial-card stagger-2 animate-fade-in-up">
              <h4>Sameer Hossain</h4>
              <p className="degree">BEng in Mechanical Engineering, University of Waterloo, Canada</p>
              <p className="quote">"The counselors at GVA helped me find the perfect university in Canada that matched my career goals. Their personalized approach made all the difference."</p>
            </div>
            <div className="testimonial-card stagger-3 animate-fade-in-up">
              <h4>Sarah Khan</h4>
              <p className="degree">BA in International Relations, Waseda University, Japan</p>
              <p className="quote">"Studying in Japan was a big dream, and Global Village Academy made it happen. Their dedicated support for documents and interview prep was outstanding."</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
