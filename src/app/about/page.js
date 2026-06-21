import { supabase } from '@/lib/supabaseClient';

export const metadata = {
  title: 'About Us | Global Village Academy',
  description: 'Learn about our story, our mission, and the dedicated team that makes us a trusted partner for students.',
};

export const revalidate = 0; // Ensures fresh data

export default async function AboutPage() {
  const { data: aboutContent } = await supabase.from('about_content').select('*').eq('id', 1).single();
  const { data: team } = await supabase.from('team').select('*').order('order_index', { ascending: true });

  return (
    <div>
      {/* Hero Banner */}
      <section style={{ backgroundColor: '#254E9E', color: 'white', padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Connecting Ambition with Global Opportunity</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Learn about our story, our mission, and the dedicated team that makes us a trusted partner for students.
        </p>
      </section>

      {/* Our Journey */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Our Journey: From a Dream to a Global Mission
            </h2>
            <div style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>Global Village Academy was founded in 2015 by Hilarius Costa with a simple yet powerful vision: to create a study abroad consultancy built on integrity, transparency, and a genuine commitment to student success.</p>
              <p>Having navigated the complexities of the international application process firsthand, our founder recognized a critical need for ethical guidance. From a small office in Baridhara, driven by a passion for education, we began our mission to empower students to find the right path for their futures. Today, we stand as a testament to that vision, having successfully guided hundreds of students to their dream universities.</p>
            </div>
          </div>
          <div style={{ flex: '1 1 500px' }}>
            {aboutContent?.top_image_url ? (
              <img src={aboutContent.top_image_url} alt="Our Journey" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
            ) : (
              <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#E2E8F0', borderRadius: '1.5rem' }}></div>
            )}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#F8FAFC', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1rem' }}>The Principles that Guide Us</h2>
          <p style={{ color: '#64748B', fontSize: '1.1rem', marginBottom: '4rem' }}>Our core beliefs shape every interaction and decision we make.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'left' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '1rem', background: '#EFF6FF', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>To empower students with transparent, comprehensive, and expert guidance, simplifying their journey to a world-class international education.</p>
            </div>

            <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'left' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '1rem', background: '#F5F3FF', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>To be Bangladesh's most trusted and respected study abroad consultancy, recognized for our integrity, service, and the success of our students.</p>
            </div>

            <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'left' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '1rem', background: '#FDF2F8', color: '#EC4899', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1rem' }}>Our Core Values</h3>
              <ul style={{ color: '#64748B', lineHeight: 1.6, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong style={{ color: '#10B981' }}>✓ Integrity:</strong> Transparency & honesty.</li>
                <li><strong style={{ color: '#3B82F6' }}>✓ Student-First:</strong> Your success is ours.</li>
                <li><strong style={{ color: '#F59E0B' }}>✓ Excellence:</strong> High standards.</li>
                <li><strong style={{ color: '#EF4444' }}>✓ Empathy:</strong> Compassionate support.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Experts */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1rem' }}>Meet the Experts</h2>
        <p style={{ color: '#64748B', fontSize: '1.1rem', marginBottom: '4rem' }}>The dedicated team working behind the scenes for your success.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
          {team && team.map((member) => (
            <div key={member.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: '#F1F5F9', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                {member.image_url ? (
                  <img src={member.image_url} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>No Photo</div>
                )}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0F172A', margin: '0 0 0.25rem 0' }}>{member.name}</h3>
              <p style={{ color: '#2563EB', fontSize: '0.95rem', margin: 0, fontWeight: '500' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ backgroundColor: '#254E9E', color: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>1,200+</h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, margin: 0 }}>Successful Placements</p>
          </div>
          <div>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-8.5-8.5"></path><path d="M12 15l8.5-8.5"></path><path d="M12 15v8"></path></svg>
            </div>
            <h3 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>98%</h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, margin: 0 }}>Visa Success Rate</p>
          </div>
          <div>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>500+</h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, margin: 0 }}>Global Partners</p>
          </div>
          <div>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <h3 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>10+</h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, margin: 0 }}>Years of Service</p>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      {aboutContent && (
        <section style={{ padding: '6rem 2rem', backgroundColor: '#F8FAFC' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', borderRadius: '2rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', minHeight: '400px', position: 'relative' }}>
              {aboutContent.ceo_image_url ? (
                <img src={aboutContent.ceo_image_url} alt={aboutContent.founder_name} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Photo</div>
              )}
            </div>
            <div style={{ flex: '1 1 400px', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1.5rem' }}>A Message From Our Founder</h2>
              <div 
                style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                dangerouslySetInnerHTML={{ __html: aboutContent.founder_message?.replace(/\n/g, '<br/>') || '' }}
              />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.25rem' }}>{aboutContent.founder_name}</strong>
                <span style={{ color: '#2563EB', fontSize: '0.95rem' }}>{aboutContent.founder_title}</span>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
