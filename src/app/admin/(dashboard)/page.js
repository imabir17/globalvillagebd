'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function AdminDashboardHome() {
  const [stats, setStats] = useState({
    destinations: '...',
    consultations: '...',
    blogs: '...'
  });
  const [recentLeads, setRecentLeads] = useState([]);

  useEffect(() => {
    async function fetchDashboardData() {
      // Fetch Counts
      const [{ count: destCount }, { count: consCount }, { count: blogCount }] = await Promise.all([
        supabase.from('destinations').select('*', { count: 'exact', head: true }),
        supabase.from('consultations').select('*', { count: 'exact', head: true }),
        supabase.from('blogs').select('*', { count: 'exact', head: true })
      ]);

      setStats({
        destinations: destCount || 0,
        consultations: consCount || 0,
        blogs: blogCount || 0
      });

      // Fetch Recent Leads
      const { data: leads } = await supabase
        .from('consultations')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (leads) setRecentLeads(leads);
    }
    fetchDashboardData();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0F172A', letterSpacing: '-0.025em', margin: 0 }}>Dashboard Overview</h1>
          <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.5rem', marginBottom: 0 }}>Here's what's happening with your business today.</p>
        </div>
        <Link href="/admin/consultations" style={{ padding: '0.75rem 1.25rem', background: '#2563EB', color: 'white', fontWeight: '600', borderRadius: '0.5rem', textDecoration: 'none', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)' }}>
          View All Leads
        </Link>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Metric Card 1 */}
        <div style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid #E2E8F0', backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: '#DBEAFE', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Total Leads</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0F172A', lineHeight: 1, marginTop: '0.25rem', marginBottom: 0 }}>{stats.consultations}</p>
            </div>
          </div>
          <div style={{ fontSize: '0.875rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '500' }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            View Consultations tab to manage
          </div>
        </div>

        {/* Metric Card 2 */}
        <div style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid #E2E8F0', backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: '#FCE7F3', color: '#DB2777', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Destinations</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0F172A', lineHeight: 1, marginTop: '0.25rem', marginBottom: 0 }}>{stats.destinations}</p>
            </div>
          </div>
          <div style={{ fontSize: '0.875rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Active study locations available
          </div>
        </div>

        {/* Metric Card 3 */}
        <div style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid #E2E8F0', backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Published Blogs</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0F172A', lineHeight: 1, marginTop: '0.25rem', marginBottom: 0 }}>{stats.blogs}</p>
            </div>
          </div>
          <div style={{ fontSize: '0.875rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Articles live on the website
          </div>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div style={{ background: 'white', borderRadius: '1rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0F172A', margin: 0 }}>Recent Consultation Requests</h2>
        </div>
        {recentLeads.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#64748B' }}>No recent requests found.</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                <th style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '600', fontSize: '0.875rem' }}>Student Name</th>
                <th style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '600', fontSize: '0.875rem' }}>Interested Destination</th>
                <th style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '600', fontSize: '0.875rem' }}>Date</th>
                <th style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '600', fontSize: '0.875rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map(lead => (
                <tr key={lead.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ fontWeight: 'bold', color: '#0F172A' }}>{lead.name}</div>
                    <div style={{ fontSize: '0.875rem', color: '#64748B' }}>{lead.email}</div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#334155', fontWeight: '500' }}>
                    {lead.destination}
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#64748B', fontSize: '0.875rem' }}>
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '9999px', 
                      fontSize: '0.75rem', 
                      fontWeight: 'bold', 
                      textTransform: 'uppercase',
                      background: lead.status === 'contacted' ? '#FEF08A' : lead.status === 'resolved' ? '#BBF7D0' : '#E2E8F0',
                      color: lead.status === 'contacted' ? '#854D0E' : lead.status === 'resolved' ? '#166534' : '#475569'
                    }}>
                      {lead.status || 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}
