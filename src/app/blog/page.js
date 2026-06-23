import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export const revalidate = 0;

export default async function BlogPage() {
  const { data: blogs } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });

  return (
    <div className="blog-list-root">
      <div className="container blog-list-container">
        <div className="blog-list-header">
          <span className="pill-badge blog-badge">
            Latest News
          </span>
          <h1 className="blog-list-title">Our <span className="text-primary" style={{ color: '#2563EB' }}>Blog</span></h1>
          <p className="blog-list-subtitle">
            Stay updated with the latest study abroad tips, university news, and student guides.
          </p>
        </div>

        {(!blogs || blogs.length === 0) ? (
          <div className="blog-empty-state">
            No blog posts published yet.
          </div>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article key={blog.id} className="animate-fade-in-up blog-card">
                <Link href={`/blog/${blog.id}`} className="blog-card-link">
                  {blog.image_url && (
                    <div className="blog-card-image-wrapper">
                      <img src={blog.image_url} alt={blog.title} className="blog-card-image" />
                    </div>
                  )}
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-author">{blog.author}</span>
                      <span>&bull;</span>
                      <span>{new Date(blog.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h2 className="blog-card-title">{blog.title}</h2>
                    
                    <div className="blog-card-footer">
                      <span className="blog-read-more">
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

      <style dangerouslySetInnerHTML={{__html: `
        /* Desktop / Base Styles */
        .blog-list-root { padding: 6rem 1.5rem; background-color: #F8FAFC; min-height: 100vh; }
        .blog-list-container { max-width: 1200px; margin: 0 auto; }
        .blog-list-header { text-align: center; margin-bottom: 4rem; }
        .blog-badge { background: #EFF6FF; color: #3B82F6; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; display: inline-block; margin-bottom: 1.5rem; }
        .blog-list-title { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; color: #0F172A; }
        .blog-list-subtitle { color: #64748B; font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.6; }
        .blog-empty-state { text-align: center; padding: 4rem; background: white; border-radius: 1rem; color: #94A3B8; }
        
        .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 2.5rem; }
        .blog-card { background: white; border-radius: 1.5rem; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); display: flex; flex-direction: column; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .blog-card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
        .blog-card-link { display: block; text-decoration: none; color: inherit; flex-grow: 1; display: flex; flex-direction: column; }
        .blog-card-image-wrapper { overflow: hidden; }
        .blog-card-image { width: 100%; height: 240px; object-fit: cover; transition: transform 0.5s ease; }
        .blog-card-content { padding: 2rem; display: flex; flex-direction: column; flex-grow: 1; }
        .blog-card-meta { font-size: 0.875rem; color: #64748B; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
        .blog-card-author { font-weight: 600; color: #2563EB; background: #EFF6FF; padding: 0.25rem 0.75rem; border-radius: 1rem; }
        .blog-card-title { font-size: 1.5rem; font-weight: bold; color: #0F172A; margin-bottom: 1rem; line-height: 1.4; }
        .blog-card-footer { margin-top: auto; padding-top: 1.5rem; }
        .blog-read-more { display: inline-flex; align-items: center; gap: 0.5rem; color: #2563EB; font-weight: 600; }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .blog-list-root { padding: 4rem 1rem; }
          .blog-list-header { margin-bottom: 2rem; }
          .blog-list-title { font-size: 2.25rem; }
          .blog-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .blog-card { border-radius: 1rem; }
          .blog-card-image { height: 200px; }
          .blog-card-content { padding: 1.5rem; }
          .blog-card-title { font-size: 1.25rem; }
        }
      `}} />
    </div>
  );
}
