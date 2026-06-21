'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

// Premium CRM Icons
const Icons = {
  Dashboard: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>,
  Destinations: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Blogs: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  Gallery: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>,
  Team: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Consultations: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
  Promotions: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
};

export default function AdminDashboardLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      } else {
        setUserEmail(session.user.email);
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  if (loading) {
    return <div style={{ padding: '5rem', textAlign: 'center', fontSize: '1.25rem', color: '#64748b' }}>Authenticating Workspace...</div>;
  }

  const navLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Consultations', path: '/admin/consultations' },
    { name: 'Destinations', path: '/admin/destinations' },
    { name: 'Blogs', path: '/admin/blogs' },
    { name: 'Gallery', path: '/admin/gallery' },
    { name: 'Team', path: '/admin/team' },
    { name: 'Promotions', path: '/admin/promotions' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* CRM Sidebar */}
      <aside style={{ width: '280px', backgroundColor: '#0F172A', color: 'white', display: 'flex', flexDirection: 'column', borderRight: '1px solid #1E293B' }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>G</div>
          <h2 style={{ fontSize: '1.25rem', color: 'white', fontWeight: 'bold', margin: 0, letterSpacing: '-0.025em' }}>Global Village CRM</h2>
        </div>
        
        <nav style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', flexGrow: 1 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', marginLeft: '0.5rem' }}>Menu</div>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (pathname.startsWith(link.path) && link.path !== '/admin');
            return (
              <Link 
                key={link.name} 
                href={link.path}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  backgroundColor: isActive ? '#1E293B' : 'transparent',
                  textDecoration: 'none',
                  fontWeight: isActive ? '600' : '500',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <span style={{ color: isActive ? '#38BDF8' : '#64748B' }}>{Icons[link.name]}</span>
                {link.name}
              </Link>
            )
          })}
        </nav>
        
        <div style={{ padding: '1.5rem', borderTop: '1px solid #1E293B' }}>
          <button 
            onClick={async () => { await supabase.auth.signOut(); router.push('/admin/login'); }}
            style={{ width: '100%', padding: '0.75rem 1rem', background: 'transparent', color: '#94A3B8', border: '1px solid #334155', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}
            onMouseOver={(e) => { e.currentTarget.style.color = '#F87171'; e.currentTarget.style.borderColor = '#F87171'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.borderColor = '#334155'; }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main CRM Workspace */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Topbar */}
        <header style={{ height: '72px', background: 'white', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Quick search..." style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.95rem', color: '#0F172A', width: '200px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', cursor: 'pointer' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </div>
            <div style={{ height: '32px', width: '1px', background: '#E2E8F0' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#0F172A' }}>Admin User</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{userEmail}</div>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#38BDF8', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                A
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div style={{ padding: '2.5rem', overflowY: 'auto', flexGrow: 1 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
