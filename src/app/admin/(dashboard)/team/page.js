'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import ImageUpload from '@/components/ImageUpload';

export default function TeamAdmin() {
  const [team, setTeam] = useState([]);
  const [aboutContent, setAboutContent] = useState(null);
  
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({ name: '', role: '', image_url: '', order_index: 0 });

  const [savingAbout, setSavingAbout] = useState(false);
  const [dbError, setDbError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Fetch About Content
    const { data: aboutData, error: aboutError } = await supabase.from('about_content').select('*').eq('id', 1).single();
    
    if (aboutError && aboutError.code !== 'PGRST116') {
      setDbError(`About Error: ${aboutError.message}`);
    }

    if (aboutData) {
      setAboutContent(aboutData);
    } else {
      setAboutContent({
        top_image_url: '',
        ceo_image_url: '',
        founder_message: '',
        founder_name: '',
        founder_title: ''
      });
    }
    
    // Fetch Team
    const { data: teamData, error: teamError } = await supabase.from('team').select('*').order('order_index', { ascending: true });
    
    if (teamError) {
      setDbError(`Team Error: ${teamError.message}`);
    }
    if (teamData) setTeam(teamData);
  };

  const handleAboutChange = (e) => setAboutContent({ ...aboutContent, [e.target.name]: e.target.value });
  
  const saveAboutContent = async () => {
    setSavingAbout(true);
    setDbError(null);
    const { error } = await supabase.from('about_content').upsert({ id: 1, ...aboutContent });
    setSavingAbout(false);
    
    if (error) {
      setDbError(`Save Error: ${error.message}`);
    } else {
      alert('About page content updated!');
    }
  };

  const openModal = (member = null) => {
    if (member) {
      setEditingMember(member.id);
      setFormData(member);
    } else {
      setEditingMember(null);
      setFormData({ name: '', role: '', image_url: '', order_index: team.length });
    }
    setShowTeamModal(true);
  };

  const saveTeamMember = async (e) => {
    e.preventDefault();
    setDbError(null);
    let error;

    if (editingMember) {
      const { error: err } = await supabase.from('team').update(formData).eq('id', editingMember);
      error = err;
    } else {
      const { error: err } = await supabase.from('team').insert([formData]);
      error = err;
    }
    
    setShowTeamModal(false);
    if (error) {
      setDbError(`Team Save Error: ${error.message}`);
    } else {
      fetchData();
    }
  };

  const deleteTeamMember = async (id) => {
    if (confirm('Delete this team member?')) {
      await supabase.from('team').delete().eq('id', id);
      fetchData();
    }
  };

  if (!aboutContent) return <div style={{ padding: '2rem' }}>Loading Admin Panel...</div>;

  return (
    <div>
      {dbError && (
        <div style={{ padding: '1rem', background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: '0.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          Database Error: {dbError}
        </div>
      )}
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0F172A', margin: 0 }}>About Page & Team</h1>
      </div>

      {/* About Content Editor */}
      <div style={{ background: 'white', borderRadius: '1rem', border: '1px solid #E2E8F0', padding: '2rem', marginBottom: '3rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0F172A', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>Global About Page Content</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: '#475569' }}>Top Banner Image ("Our Journey")</label>
            <ImageUpload 
              onUpload={(url) => setAboutContent({ ...aboutContent, top_image_url: url })}
              defaultImage={aboutContent.top_image_url}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: '#475569' }}>CEO/Founder Photo</label>
            <ImageUpload 
              onUpload={(url) => setAboutContent({ ...aboutContent, ceo_image_url: url })}
              defaultImage={aboutContent.ceo_image_url}
            />
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: '#475569' }}>Founder Name</label>
            <input type="text" name="founder_name" value={aboutContent.founder_name || ''} onChange={handleAboutChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: '#475569' }}>Founder Title</label>
            <input type="text" name="founder_title" value={aboutContent.founder_title || ''} onChange={handleAboutChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} />
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: '#475569' }}>Founder Message (Supports HTML)</label>
          <textarea name="founder_message" value={aboutContent.founder_message || ''} onChange={handleAboutChange} rows="6" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', fontFamily: 'monospace' }}></textarea>
        </div>

        <button onClick={saveAboutContent} disabled={savingAbout} style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: '#10B981', color: 'white', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
          {savingAbout ? 'Saving...' : 'Save About Page Content'}
        </button>
      </div>

      {/* Team Management */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0F172A', margin: 0 }}>Team Members</h2>
        <button onClick={() => openModal()} style={{ padding: '0.75rem 1.25rem', background: '#2563EB', color: 'white', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
          + Add Team Member
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {team.map(member => (
          <div key={member.id} style={{ background: 'white', borderRadius: '1rem', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <div style={{ height: '250px', background: '#F1F5F9', position: 'relative' }}>
              {member.image_url ? (
                <img src={member.image_url} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>No Photo</div>
              )}
            </div>
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold', color: '#0F172A' }}>{member.name}</h3>
              <p style={{ margin: '0.25rem 0 1rem 0', color: '#64748B', fontSize: '0.9rem' }}>{member.role}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => openModal(member)} style={{ flex: 1, padding: '0.5rem', background: '#F8FAFC', color: '#0F172A', border: '1px solid #E2E8F0', borderRadius: '0.25rem', cursor: 'pointer', fontWeight: '600' }}>Edit</button>
                <button onClick={() => deleteTeamMember(member.id)} style={{ padding: '0.5rem 1rem', background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: '0.25rem', cursor: 'pointer', fontWeight: '600' }}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showTeamModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>{editingMember ? 'Edit Team Member' : 'Add Team Member'}</h2>
            <form onSubmit={saveTeamMember}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Photo</label>
                <ImageUpload 
                  onUpload={(url) => setFormData({ ...formData, image_url: url })}
                  defaultImage={formData.image_url}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Full Name</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Role / Designation</label>
                <input required type="text" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Display Order (Lowest shows first)</label>
                <input type="number" value={formData.order_index} onChange={(e) => setFormData({...formData, order_index: parseInt(e.target.value)})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setShowTeamModal(false)} style={{ padding: '0.75rem 1.5rem', background: '#F1F5F9', color: '#475569', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
                <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#2563EB', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 'bold' }}>Save Member</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
