'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import ImageUpload from '@/components/ImageUpload';

export default function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setImages(data);
    }
    setLoading(false);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!imageUrl) {
      alert("Please upload an image first.");
      return;
    }
    setSubmitting(true);
    
    const { error } = await supabase.from('gallery').insert([{ title, image_url: imageUrl }]);

    setSubmitting(false);
    if (!error) {
      setTitle('');
      setImageUrl('');
      fetchImages();
    } else {
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this image from the gallery?')) {
      await supabase.from('gallery').delete().eq('id', id);
      fetchImages();
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0F172A' }}>Manage Gallery</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        {/* Create Form */}
        <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #E2E8F0', alignSelf: 'start' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Add New Image</h2>
          <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Image Title/Caption</label>
              <input required type="text" value={title} onChange={(e)=>setTitle(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none' }} placeholder="e.g. Students at campus" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Upload Photo</label>
              <ImageUpload onUpload={(url) => setImageUrl(url)} currentImage={imageUrl} />
            </div>
            
            <button disabled={submitting || !imageUrl} type="submit" style={{ marginTop: '0.5rem', padding: '0.875rem', background: '#2563EB', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '600', opacity: (!imageUrl || submitting) ? 0.7 : 1 }}>
              {submitting ? 'Saving...' : 'Add to Gallery'}
            </button>
          </form>
        </div>

        {/* List */}
        <div>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Gallery Images</h2>
          {loading ? <p>Loading...</p> : images.length === 0 ? <p style={{ color: '#64748B' }}>No images found. Upload one to get started!</p> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
              {images.map(img => (
                <div key={img.id} style={{ border: '1px solid #E2E8F0', borderRadius: '0.75rem', overflow: 'hidden', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <img src={img.image_url} alt={img.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{ padding: '1rem' }}>
                    <p style={{ fontWeight: '500', marginBottom: '0.5rem', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{img.title}</p>
                    <button onClick={() => handleDelete(img.id)} style={{ width: '100%', padding: '0.5rem', fontSize: '0.875rem', border: '1px solid #FECACA', background: '#FEF2F2', color: '#DC2626', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '500' }}>
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
