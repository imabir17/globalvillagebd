'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import ImageUpload from '@/components/ImageUpload';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false, loading: () => <p style={{ padding: '1rem', color: '#64748B' }}>Loading editor...</p> });

export default function DestinationsAdmin() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [mapTop, setMapTop] = useState('');
  const [mapLeft, setMapLeft] = useState('');
  
  const [points, setPoints] = useState(['']);
  
  const [estimatedCosts, setEstimatedCosts] = useState('');
  const [entryRequirements, setEntryRequirements] = useState('');
  const [languageProficiency, setLanguageProficiency] = useState('');
  const [visaInfo, setVisaInfo] = useState('');
  const [workOpportunities, setWorkOpportunities] = useState('');
  const [scholarshipInfo, setScholarshipInfo] = useState('');

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    const { data, error } = await supabase.from('destinations').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setDestinations(data);
    }
    setLoading(false);
  };

  const handlePointChange = (index, value) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setPoints(newPoints);
  };
  
  const addPoint = () => setPoints([...points, '']);
  const removePoint = (index) => setPoints(points.filter((_, i) => i !== index));

  const resetForm = () => {
    setId(''); setName(''); setDescription(''); setImageUrl(''); setMapTop(''); setMapLeft('');
    setPoints(['']);
    setEstimatedCosts(''); setEntryRequirements(''); setLanguageProficiency('');
    setVisaInfo(''); setWorkOpportunities(''); setScholarshipInfo('');
    setIsEditing(false);
  };

  const handleEdit = (dest) => {
    setId(dest.id);
    setName(dest.name);
    setDescription(dest.description);
    setImageUrl(dest.image_url);
    setMapTop(dest.map_top);
    setMapLeft(dest.map_left);
    setPoints(dest.points || ['']);
    setEstimatedCosts(dest.estimated_costs || '');
    setEntryRequirements(dest.entry_requirements || '');
    setLanguageProficiency(dest.language_proficiency || '');
    setVisaInfo(dest.visa_info || '');
    setWorkOpportunities(dest.work_opportunities || '');
    setScholarshipInfo(dest.scholarship_info || '');
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Filter empty points
    const cleanPoints = points.filter(p => p.trim() !== '');

    const payload = {
      id: isEditing ? id : id.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name,
      description,
      image_url: imageUrl,
      map_top: mapTop,
      map_left: mapLeft,
      points: cleanPoints,
      estimated_costs: estimatedCosts,
      entry_requirements: entryRequirements,
      language_proficiency: languageProficiency,
      visa_info: visaInfo,
      work_opportunities: workOpportunities,
      scholarship_info: scholarshipInfo
    };

    let error;
    if (isEditing) {
      const res = await supabase.from('destinations').update(payload).eq('id', id);
      error = res.error;
    } else {
      const res = await supabase.from('destinations').insert([payload]);
      error = res.error;
    }

    setSubmitting(false);
    if (!error) {
      resetForm();
      fetchDestinations();
      alert(`Destination successfully ${isEditing ? 'updated' : 'created'}!`);
    } else {
      alert(error.message);
    }
  };

  const handleDelete = async (deleteId) => {
    if (confirm('Are you sure you want to delete this destination? This will break any existing links to it!')) {
      await supabase.from('destinations').delete().eq('id', deleteId);
      fetchDestinations();
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0F172A' }}>Manage Destinations</h1>
      
      {/* Form Section */}
      <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '1rem', border: '1px solid #E2E8F0', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{isEditing ? `Edit Destination: ${name}` : 'Add New Destination'}</h2>
          {isEditing && <button onClick={resetForm} style={{ padding: '0.5rem 1rem', background: '#E2E8F0', borderRadius: '0.5rem', cursor: 'pointer' }}>Cancel Edit</button>}
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          {/* Column 1: Basic Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.5rem' }}>1. Basic Details</h3>
            
            {!isEditing && (
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>URL ID (e.g. "united-kingdom")</label>
                <input required type="text" value={id} onChange={(e)=>setId(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} placeholder="united-kingdom" />
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Country Name</label>
              <input required type="text" value={name} onChange={(e)=>setName(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} placeholder="United Kingdom" />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Short Description</label>
              <textarea required value={description} onChange={(e)=>setDescription(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', minHeight: '100px' }} placeholder="A brief intro..." />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Cover Image</label>
              <ImageUpload onUpload={(url) => setImageUrl(url)} currentImage={imageUrl} />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Map Top (e.g. 25%)</label>
                <input required type="text" value={mapTop} onChange={(e)=>setMapTop(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} placeholder="25%" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Map Left (e.g. 45%)</label>
                <input required type="text" value={mapLeft} onChange={(e)=>setMapLeft(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} placeholder="45%" />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Key Benefits (Bullet points)</label>
              {points.map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <input type="text" value={pt} onChange={(e)=>handlePointChange(i, e.target.value)} style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} placeholder="Top tier universities" />
                  <button type="button" onClick={() => removePoint(i)} style={{ padding: '0.5rem', background: '#FEE2E2', color: '#EF4444', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>X</button>
                </div>
              ))}
              <button type="button" onClick={addPoint} style={{ padding: '0.5rem 1rem', background: '#E0E7FF', color: '#4F46E5', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500' }}>+ Add Benefit</button>
            </div>
          </div>

          {/* Column 2: Detailed Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.5rem' }}>2. Extended Details (Rich Text)</h3>
            
            {[
              { label: "Estimated Costs", state: estimatedCosts, setter: setEstimatedCosts },
              { label: "Entry Requirements", state: entryRequirements, setter: setEntryRequirements },
              { label: "Language Proficiency", state: languageProficiency, setter: setLanguageProficiency },
              { label: "Visa Information", state: visaInfo, setter: setVisaInfo },
              { label: "Work Opportunities", state: workOpportunities, setter: setWorkOpportunities },
              { label: "Scholarship Possibilities", state: scholarshipInfo, setter: setScholarshipInfo },
            ].map((field, idx) => (
              <div key={idx} style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #E2E8F0' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>{field.label}</label>
                <div style={{ background: 'white' }}>
                  <ReactQuill theme="snow" value={field.state} onChange={field.setter} style={{ height: '150px', marginBottom: '2.5rem' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
            <button disabled={submitting} type="submit" style={{ width: '100%', padding: '1rem', background: '#2563EB', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>
              {submitting ? 'Saving...' : isEditing ? 'Update Destination' : 'Create Destination'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>Existing Destinations</h2>
        {loading ? <p>Loading...</p> : destinations.length === 0 ? <p style={{ color: '#64748B' }}>No destinations added yet.</p> : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {destinations.map(dest => (
              <div key={dest.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', border: '1px solid #E2E8F0', borderRadius: '1rem', alignItems: 'center', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                {dest.image_url ? (
                  <img src={dest.image_url} alt={dest.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                ) : (
                  <div style={{ width: '80px', height: '80px', background: '#F1F5F9', borderRadius: '0.5rem' }} />
                )}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{dest.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>ID: {dest.id}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <button onClick={() => handleEdit(dest)} style={{ padding: '0.5rem', fontSize: '0.875rem', border: '1px solid #CBD5E1', background: 'white', borderRadius: '0.5rem', cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => handleDelete(dest.id)} style={{ padding: '0.5rem', fontSize: '0.875rem', border: '1px solid #FECACA', background: '#FEF2F2', color: '#DC2626', borderRadius: '0.5rem', cursor: 'pointer' }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
