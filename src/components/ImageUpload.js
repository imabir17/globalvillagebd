'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ImageUpload({ onUpload, currentImage }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (event) => {
    try {
      setUploading(true);
      setError(null);
      const file = event.target.files[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from('gva-assets')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from('gva-assets').getPublicUrl(filePath);
      
      onUpload(data.publicUrl);
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      {currentImage && (
        <div style={{ marginBottom: '1rem' }}>
          <img src={currentImage} alt="Preview" style={{ maxWidth: '200px', borderRadius: '0.5rem', border: '1px solid #E2E8F0' }} />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        style={{ padding: '0.5rem', border: '1px dashed #CBD5E1', borderRadius: '0.5rem', width: '100%', cursor: 'pointer' }}
      />
      {uploading && <p style={{ fontSize: '0.875rem', color: '#2563EB', marginTop: '0.5rem' }}>Uploading image...</p>}
      {error && <p style={{ fontSize: '0.875rem', color: '#EF4444', marginTop: '0.5rem' }}>{error}</p>}
    </div>
  );
}
