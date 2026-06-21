import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export const revalidate = 0;

export default async function CountryPage({ params }) {
  const { country } = await params;
  const countryId = country;
  
  const { data: destination } = await supabase
    .from('destinations')
    .select('*')
    .eq('id', countryId)
    .single();

  if (!destination) {
    return (
      <div className="container" style={{ padding: '10rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Destination Not Found</h1>
        <p style={{ marginTop: '1rem', color: '#64748B' }}>The country you are looking for does not exist in our database.</p>
        <Link href="/destinations" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div className="destination-detail-page" style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <div className="dest-hero" style={{ 
        backgroundColor: '#1E293B',
        backgroundImage: destination.image_url ? `url("${destination.image_url}")` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '10rem 0 8rem 0',
        color: 'white'
      }}>
        <div className="dest-hero-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)', zIndex: 1 }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: '800' }}>Study in {destination.name}</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>{destination.description}</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container section" style={{ padding: '4rem 1.5rem', marginTop: '-4rem', position: 'relative', zIndex: 3 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem', alignItems: 'start' }}>
          
          {/* Left Column: Details */}
          <div style={{ background: 'white', borderRadius: '1rem', padding: '3rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
            
            {/* Key Benefits */}
            {destination.points && destination.points.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#2563EB' }}>✦</span> Key Benefits
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {destination.points.map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: '#F1F5F9', padding: '1rem', borderRadius: '0.5rem' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span style={{ fontSize: '1rem', color: '#334155', fontWeight: '500' }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rich Text Blocks */}
            {[
              { title: "Estimated Costs", content: destination.estimated_costs, icon: "💰" },
              { title: "Entry Requirements", content: destination.entry_requirements, icon: "📋" },
              { title: "Language Proficiency", content: destination.language_proficiency, icon: "🗣️" },
              { title: "Visa Information", content: destination.visa_info, icon: "🛂" },
              { title: "Work Opportunities", content: destination.work_opportunities, icon: "💼" },
              { title: "Scholarships", content: destination.scholarship_info, icon: "🎓" }
            ].map((section, idx) => {
              if (!section.content) return null;
              return (
                <div key={idx} style={{ marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.25rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '2px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                    <span>{section.icon}</span> {section.title}
                  </h2>
                  <div 
                    className="rich-text-content" 
                    style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.05rem' }} 
                    dangerouslySetInnerHTML={{ __html: section.content }} 
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{ background: '#0F172A', padding: '2.5rem 2rem', borderRadius: '1rem', color: 'white', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Begin Your Journey</h3>
              <p style={{ color: '#94A3B8', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                Our expert counselors are here to help you secure your admission and student visa for {destination.name}. Let us guide you every step of the way.
              </p>
              <Link href="#consultation" className="btn-primary" style={{ width: '100%', display: 'inline-block', padding: '1rem', fontSize: '1.1rem', background: '#2563EB', borderRadius: '0.5rem', fontWeight: '600', transition: 'background 0.3s' }}>
                Book Free Consultation
              </Link>
              <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#64748B' }}>
                100% Free • No Obligation
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
