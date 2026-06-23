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
    <article className="blog-page-root">
      {/* Hero Section with Cover Image */}
      <div className="blog-hero">
        {blog.image_url && (
          <img 
            src={blog.image_url} 
            alt={blog.title} 
            className="blog-hero-image"
          />
        )}
        <div className="blog-hero-overlay">
          <div className="container blog-hero-content">
            <div className="blog-meta">
              <span className="blog-author-badge">
                {blog.author}
              </span>
              <span>&bull;</span>
              <span>{new Date(blog.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <h1 className="blog-hero-title">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container blog-article-container">
        <div className="blog-content-wrapper">
          
          <Link href="/blog" className="blog-back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Articles
          </Link>

          <div 
            className="blog-content"
            style={{ overflowWrap: 'break-word' }}
            dangerouslySetInnerHTML={{ __html: blog.content.replace(/&nbsp;/g, ' ').replace(/\u00A0/g, ' ') }} 
          />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        /* Base / Desktop Styles */
        .blog-page-root { background-color: #F8FAFC; min-height: 100vh; padding-bottom: 6rem; }
        
        .blog-hero { position: relative; width: 100%; height: 50vh; min-height: 400px; background-color: #0F172A; }
        .blog-hero-image { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
        .blog-hero-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: linear-gradient(to top, rgba(15,23,42,0.9), transparent); }
        .blog-hero-content { max-width: 800px; text-align: center; padding: 0 1.5rem; z-index: 1; }
        .blog-meta { margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; color: #E2E8F0; }
        .blog-author-badge { background: #2563EB; color: white; padding: 0.25rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; }
        .blog-hero-title { font-size: 3.5rem; font-weight: 800; color: white; line-height: 1.2; margin-bottom: 0; }
        
        .blog-article-container { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; }
        .blog-content-wrapper { background-color: white; border-radius: 1.5rem; padding: 3rem 4rem; margin-top: -4rem; position: relative; z-index: 10; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); color: #334155; font-size: 1.125rem; line-height: 1.8; }
        .blog-back-link { display: inline-flex; align-items: center; gap: 0.5rem; color: #64748B; text-decoration: none; margin-bottom: 2rem; font-weight: 500; transition: color 0.2s; }
        .blog-back-link:hover { color: #2563EB; }

        .blog-content h2 { font-size: 2rem; font-weight: 700; color: #0F172A; margin-top: 2.5rem; margin-bottom: 1rem; }
        .blog-content h3 { font-size: 1.5rem; font-weight: 600; color: #0F172A; margin-top: 2rem; margin-bottom: 1rem; }
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content ul, .blog-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content a { color: #2563EB; text-decoration: underline; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 0.5rem; margin: 2rem 0; }
        .blog-content blockquote { border-left: 4px solid #2563EB; padding-left: 1rem; font-style: italic; color: #64748B; margin: 2rem 0; }
        .blog-content table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; display: block; overflow-x: auto; max-width: 100%; }
        .blog-content th, .blog-content td { border: 1px solid #E2E8F0; padding: 0.75rem; text-align: left; }
        .blog-content th { background-color: #F8FAFC; font-weight: 600; }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .blog-page-root { background-color: white; padding-bottom: 3rem; }
          .blog-hero { height: auto; min-height: 300px; padding: 6rem 0 3rem 0; }
          .blog-hero-title { font-size: 2rem; }
          .blog-article-container { padding: 0; }
          .blog-content-wrapper { padding: 2rem 1.25rem; margin-top: 0; border-radius: 0; box-shadow: none; font-size: 1rem; line-height: 1.6; }
          .blog-content h2 { font-size: 1.5rem; margin-top: 2rem; }
          .blog-content h3 { font-size: 1.25rem; margin-top: 1.5rem; }
        }
      `}} />
    </article>
  );
}
