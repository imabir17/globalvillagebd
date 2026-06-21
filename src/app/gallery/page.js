import { supabase } from '@/lib/supabaseClient';

// Ensure the page fetches fresh data
export const revalidate = 0;

export default async function GalleryPage() {
  const { data: images } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });

  return (
    <div style={{ padding: '6rem 1.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="pill-badge" style={{ background: '#EFF6FF', color: '#3B82F6', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', display: 'inline-block', marginBottom: '1.5rem' }}>
            Life at GVA
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A' }}>Our <span className="text-primary" style={{ color: '#2563EB' }}>Gallery</span></h1>
          <p style={{ color: '#64748B', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Take a look at the success stories, campus tours, and student experiences from our community.
          </p>
        </div>

        {(!images || images.length === 0) ? (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '1rem', color: '#94A3B8' }}>
            Gallery is currently empty. Check back soon!
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {images.map((img) => (
              <div key={img.id} style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', background: 'white' }}>
                <img src={img.image_url} alt={img.title} className="gallery-image" style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                <div style={{ padding: '1.25rem', position: 'relative', zIndex: 2, background: 'white' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0F172A', textAlign: 'center' }}>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .gallery-image:hover {
          transform: scale(1.05);
        }
      `}} />
    </div>
  );
}
