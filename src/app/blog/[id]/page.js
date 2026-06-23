import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export const revalidate = 0;

export default async function BlogPostPage({ params }) {
  const { id } = await params;

  // Fetch the specific blog post by ID
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !blog) {
    return (
      <div style={{ padding: '6rem 1.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '1rem' }}>Blog Post Not Found</h1>
          <p style={{ color: '#64748B', marginBottom: '2rem' }}>The article you are looking for does not exist or has been removed.</p>
          <Link href="/blog" className="btn-primary" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Hero Section with Cover Image */}
      <div style={{ position: 'relative', width: '100%', height: '50vh', minHeight: '400px', backgroundColor: '#0F172A' }}>
        {blog.image_url && (
          <img 
            src={blog.image_url} 
            alt={blog.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
          />
        )}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)' }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center', padding: '0 1.5rem', zIndex: 1 }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: '#E2E8F0' }}>
              <span style={{ background: '#2563EB', color: 'white', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600' }}>
                {blog.author}
              </span>
              <span>&bull;</span>
              <span>{new Date(blog.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'white', lineHeight: '1.2', marginBottom: '0' }}>
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '1.5rem', 
          padding: '3rem 4rem', 
          marginTop: '-4rem', 
          position: 'relative', 
          zIndex: 10,
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)',
          color: '#334155',
          fontSize: '1.125rem',
          lineHeight: '1.8'
        }}>
          
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', textDecoration: 'none', marginBottom: '2rem', fontWeight: '500', transition: 'color 0.2s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Articles
          </Link>

          <div 
            className="blog-content"
            style={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h2 { font-size: 2rem; font-weight: 700; color: #0F172A; margin-top: 2.5rem; margin-bottom: 1rem; }
        .blog-content h3 { font-size: 1.5rem; font-weight: 600; color: #0F172A; margin-top: 2rem; margin-bottom: 1rem; }
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content ul, .blog-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content a { color: #2563EB; text-decoration: underline; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 0.5rem; margin: 2rem 0; }
        .blog-content blockquote { border-left: 4px solid #2563EB; padding-left: 1rem; font-style: italic; color: #64748B; margin: 2rem 0; }
      `}} />
    </article>
  );
}
