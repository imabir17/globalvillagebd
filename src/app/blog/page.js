import { supabase } from '@/lib/supabaseClient';

export const revalidate = 0;

export default async function BlogPage() {
  const { data: blogs } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });

  return (
    <div style={{ padding: '6rem 1.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="pill-badge" style={{ background: '#EFF6FF', color: '#3B82F6', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', display: 'inline-block', marginBottom: '1.5rem' }}>
            Latest News
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A' }}>Our <span className="text-primary" style={{ color: '#2563EB' }}>Blog</span></h1>
          <p style={{ color: '#64748B', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Stay updated with the latest study abroad tips, university news, and student guides.
          </p>
        </div>

        {(!blogs || blogs.length === 0) ? (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '1rem', color: '#94A3B8' }}>
            No blog posts published yet.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {blogs.map((blog) => (
              <article key={blog.id} style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
                {blog.image_url && (
                  <img src={blog.image_url} alt={blog.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                )}
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: '600', color: '#2563EB', background: '#EFF6FF', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>{blog.author}</span>
                    <span>&bull;</span>
                    <span>{new Date(blog.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1.5rem', lineHeight: '1.3' }}>{blog.title}</h2>
                  <div style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.05rem', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
