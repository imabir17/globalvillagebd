'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import ImageUpload from '@/components/ImageUpload';

export default function PromotionsAdmin() {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isActive, setIsActive] = useState(false);
  
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    const { data, error } = await supabase.from('promotions').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setPromotions(data);
    }
    setLoading(false);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    if (isActive) {
      await supabase.from('promotions').update({ is_active: false }).neq('id', '00000000-0000-0000-0000-000000000000');
    }

    const { error } = await supabase.from('promotions').insert([
      { title, message, link_url: linkUrl, image_url: imageUrl, is_active: isActive }
    ]);

    setSubmitting(false);
    if (!error) {
      setTitle('');
      setMessage('');
      setLinkUrl('');
      setImageUrl('');
      setIsActive(false);
      fetchPromotions();
    } else {
      alert(error.message);
    }
  };

  const toggleActive = async (id, currentStatus) => {
    if (!currentStatus) {
      await supabase.from('promotions').update({ is_active: false }).neq('id', id);
    }
    await supabase.from('promotions').update({ is_active: !currentStatus }).eq('id', id);
    fetchPromotions();
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this promotion?')) {
      await supabase.from('promotions').delete().eq('id', id);
      fetchPromotions();
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0F172A' }}>Manage Promotions</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        {/* Create Form */}
        <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #E2E8F0', alignSelf: 'start' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Create New Promotion</h2>
          <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Title</label>
              <input required type="text" value={title} onChange={(e)=>setTitle(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none' }} placeholder="e.g. Summer Discount!" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Message</label>
              <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', minHeight: '100px', outline: 'none' }} placeholder="Get 50% off processing fees..." />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Button Link (URL)</label>
              <input type="text" value={linkUrl} onChange={(e)=>setLinkUrl(e.target.value)} placeholder="/consultation" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: '500' }}>Promo Image (Optional)</label>
              <ImageUpload onUpload={(url) => setImageUrl(url)} currentImage={imageUrl} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <input type="checkbox" id="isActive" checked={isActive} onChange={(e)=>setIsActive(e.target.checked)} style={{ width: '1rem', height: '1rem' }} />
              <label htmlFor="isActive" style={{ fontSize: '0.875rem', fontWeight: '500' }}>Set as Active immediately</label>
            </div>
            <button disabled={submitting} type="submit" style={{ marginTop: '0.5rem', padding: '0.875rem', background: '#2563EB', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '600' }}>
              {submitting ? 'Saving...' : 'Create Promotion'}
            </button>
          </form>
        </div>

        {/* List */}
        <div>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Existing Promotions</h2>
          {loading ? <p>Loading...</p> : promotions.length === 0 ? <p style={{ color: '#64748B' }}>No promotions found. Create one to get started!</p> : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {promotions.map(promo => (
                <div key={promo.id} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '1rem', alignItems: 'center', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  {promo.image_url && <img src={promo.image_url} alt={promo.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '0.5rem' }} />}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                      {promo.title} 
                      {promo.is_active && <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: '#DCFCE7', color: '#166534', borderRadius: '1rem', marginLeft: '0.75rem', verticalAlign: 'middle' }}>Active</span>}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#64748B', marginBottom: '0.5rem' }}>{promo.message}</p>
                    {promo.link_url && <a href={promo.link_url} target="_blank" style={{ fontSize: '0.875rem', color: '#2563EB', textDecoration: 'underline' }}>Link: {promo.link_url}</a>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button onClick={() => toggleActive(promo.id, promo.is_active)} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', border: '1px solid #CBD5E1', background: 'white', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '500' }}>
                      {promo.is_active ? 'Deactivate' : 'Set Active'}
                    </button>
                    <button onClick={() => handleDelete(promo.id)} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', border: '1px solid #FECACA', background: '#FEF2F2', color: '#DC2626', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '500' }}>
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
