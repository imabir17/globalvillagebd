'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    last_study_level: '',
    gpa: '',
    interested_in: ''
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#consultation') setIsOpen(true);
    };
    const handleCustomOpen = () => setIsOpen(true);
    
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('openConsultationModal', handleCustomOpen);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('openConsultationModal', handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen && destinations.length === 0) {
      const fetchDest = async () => {
        const { data } = await supabase.from('destinations').select('id, name').order('name');
        if (data) setDestinations(data);
      };
      fetchDest();
    }
  }, [isOpen, destinations.length]);

  const closeModal = () => {
    setIsOpen(false);
    if (window.location.hash === '#consultation') {
      window.history.pushState(null, document.title, window.location.pathname + window.location.search);
    }
    setSuccess(false);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const { error } = await supabase.from('consultations').insert([formData]);
    
    setSubmitting(false);
    if (!error) {
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', destination: '', last_study_level: '', gpa: '', interested_in: '' });
      setTimeout(closeModal, 3000);
    } else {
      alert("Something went wrong. Please try again. Error: " + error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(4px)' }} onClick={closeModal}>
      <div 
        onClick={(e) => e.stopPropagation()} 
        style={{ background: 'white', borderRadius: '1rem', width: '100%', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid #E2E8F0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0F172A', margin: 0 }}>Get Free Assessment</h2>
          <button onClick={closeModal} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', color: '#94A3B8', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
        </div>

        <div style={{ padding: '2rem' }}>
          {success ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '0.5rem' }}>Success!</h3>
              <p style={{ color: '#64748B' }}>Your request has been received. Our counselors will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.25rem' }}>Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none', transition: 'border-color 0.2s' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.25rem' }}>Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.25rem' }}>Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+880..." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.25rem' }}>Preferred Destination</label>
                <select required name="destination" value={formData.destination} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none', backgroundColor: 'white', appearance: 'auto' }}>
                  <option value="">Select a country</option>
                  {destinations.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.25rem' }}>Last Study Level</label>
                  <select required name="last_study_level" value={formData.last_study_level} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none', backgroundColor: 'white' }}>
                    <option value="">Select Level</option>
                    <option value="HSC / A Levels">HSC / A Levels</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.25rem' }}>GPA / CGPA</label>
                  <input required type="text" name="gpa" value={formData.gpa} onChange={handleChange} placeholder="e.g. 5.00 or 3.5" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.25rem' }}>Interested In</label>
                <select required name="interested_in" value={formData.interested_in} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CBD5E1', outline: 'none', backgroundColor: 'white' }}>
                  <option value="">Select Program Level</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD / Doctorate">PhD / Doctorate</option>
                  <option value="Diploma / Pathway">Diploma / Pathway</option>
                  <option value="Language Course">Language Course</option>
                </select>
              </div>

              <button disabled={submitting} type="submit" style={{ width: '100%', padding: '1rem', background: '#2563EB', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', marginTop: '0.5rem', transition: 'background 0.2s' }}>
                {submitting ? 'Submitting...' : 'Book Free Consultation'}
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
