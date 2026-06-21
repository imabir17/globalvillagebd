'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import ImageUpload from '@/components/ImageUpload';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false, loading: () => <p style={{ padding: '1rem', color: '#64748B' }}>Loading editor...</p> });

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setBlogs(data);
    }
    setLoading(false);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const { error } = await supabase.from('blogs').insert([{ title, content, author, image_url: imageUrl }]);

    setSubmitting(false);
    if (!error) {
      setTitle('');
      setContent('');
      setAuthor('');
      setImageUrl('');
      fetchBlogs();
    } else {
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      await supabase.from('blogs').delete().eq('id', id);
      fetchBlogs();
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0F172A' }}>Manage Blogs</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Create Form */}
        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '1rem', border: '1px solid #E2E8F0' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Create New Blog</h2>
          <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Title</label>
              <input required type="text" value={title} onChange={(e)=>setTitle(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none' }} placeholder="Blog Post Title" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Author</label>
              <input required type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none' }} placeholder="Author Name" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Content</label>
              <div style={{ background: 'white', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <ReactQuill theme="snow" value={content} onChange={setContent} style={{ height: '400px', marginBottom: '3rem' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Cover Image (Optional)</label>
              <ImageUpload onUpload={(url) => setImageUrl(url)} currentImage={imageUrl} />
            </div>
            
            <button disabled={submitting} type="submit" style={{ marginTop: '0.5rem', padding: '0.875rem', background: '#2563EB', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '600' }}>
              {submitting ? 'Publishing...' : 'Publish Blog'}
            </button>
          </form>
        </div>

        {/* List */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>Published Blogs</h2>
          {loading ? <p>Loading...</p> : blogs.length === 0 ? <p style={{ color: '#64748B' }}>No blogs found. Write your first post!</p> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1.5rem' }}>
              {blogs.map(blog => (
                <div key={blog.id} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '1rem', alignItems: 'center', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  {blog.image_url ? (
                    <img src={blog.image_url} alt={blog.title} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                  ) : (
                    <div style={{ width: '120px', height: '120px', background: '#F1F5F9', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>No Image</div>
                  )}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{blog.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '0.5rem' }}>By {blog.author} • {new Date(blog.created_at).toLocaleDateString()}</p>
                    <p style={{ fontSize: '0.95rem', color: '#475569' }}>
                      {blog.content.substring(0, 100)}...
                    </p>
                  </div>
                  <div>
                    <button onClick={() => handleDelete(blog.id)} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', border: '1px solid #FECACA', background: '#FEF2F2', color: '#DC2626', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '500' }}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
