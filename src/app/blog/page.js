import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export const revalidate = 0;

export default async function BlogPage() {
  const { data: blogs } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });

  return (
    <div style={{ padding: '6rem 1.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {blogs.map((blog) => (
              <article key={blog.id} className="animate-fade-in-up blog-card-hover" style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <Link href={`/blog/${blog.id}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {blog.image_url && (
                    <div style={{ overflow: 'hidden' }}>
                      <img src={blog.image_url} alt={blog.title} style={{ width: '100%', height: '240px', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    </div>
                  )}
                  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: '600', color: '#2563EB', background: '#EFF6FF', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>{blog.author}</span>
                      <span>&bull;</span>
                      <span>{new Date(blog.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1rem', lineHeight: '1.4' }}>{blog.title}</h2>
                    
                    <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#2563EB', fontWeight: '600' }}>
                        Read Article
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
