'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ConsultationsAdmin() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    const { data } = await supabase.from('consultations').select('*').order('created_at', { ascending: false });
    if (data) setConsultations(data);
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    await supabase.from('consultations').update({ status }).eq('id', id);
    fetchConsultations();
  };

  const handleDelete = async (id) => {
    if (confirm('Delete this lead?')) {
      await supabase.from('consultations').delete().eq('id', id);
      fetchConsultations();
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0F172A' }}>Consultation Leads</h1>
      
      {loading ? <p>Loading...</p> : consultations.length === 0 ? <p style={{ color: '#64748B' }}>No leads yet. They will appear here when students fill out the form.</p> : (
        <div style={{ overflowX: 'auto', background: 'white', borderRadius: '1rem', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: '600' }}>Date</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: '600' }}>Student Details</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: '600' }}>Academic Info</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: '600' }}>Interest</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: '600' }}>Status</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: '600' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map(c => (
                <tr key={c.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '1rem', verticalAlign: 'top', color: '#64748B' }}>
                    {new Date(c.created_at).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                    <div style={{ fontWeight: 'bold', color: '#0F172A' }}>{c.name}</div>
                    <div style={{ color: '#2563EB', fontSize: '0.875rem' }}>{c.email}</div>
                    <div style={{ color: '#64748B', fontSize: '0.875rem' }}>{c.phone}</div>
                  </td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                    <div style={{ fontSize: '0.875rem', color: '#334155', marginBottom: '0.25rem' }}><strong style={{ color: '#94A3B8' }}>Lvl:</strong> {c.last_study_level}</div>
                    <div style={{ fontSize: '0.875rem', color: '#334155' }}><strong style={{ color: '#94A3B8' }}>GPA:</strong> {c.gpa}</div>
                  </td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                    <div style={{ fontSize: '0.875rem', color: '#334155', marginBottom: '0.25rem' }}><strong style={{ color: '#94A3B8' }}>Dest:</strong> {c.destination}</div>
                    <div style={{ fontSize: '0.875rem', color: '#334155' }}><strong style={{ color: '#94A3B8' }}>Prog:</strong> {c.interested_in}</div>
                  </td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                    <select 
                      value={c.status || 'pending'} 
                      onChange={(e) => updateStatus(c.id, e.target.value)}
                      style={{ padding: '0.25rem 0.5rem', borderRadius: '0.25rem', border: '1px solid #CBD5E1', fontSize: '0.875rem', outline: 'none', background: c.status === 'contacted' ? '#FEF08A' : c.status === 'resolved' ? '#BBF7D0' : '#F8FAFC' }}
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                    <button onClick={() => handleDelete(c.id)} style={{ padding: '0.25rem 0.5rem', background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: '0.25rem', cursor: 'pointer', fontSize: '0.875rem', transition: 'background 0.2s' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
