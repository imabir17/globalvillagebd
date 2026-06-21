'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function AdminDashboardLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      } else {
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  if (loading) {
    return <div style={{ padding: '5rem', textAlign: 'center', fontSize: '1.25rem', color: '#64748b' }}>Authenticating...</div>;
  }

  const navLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Destinations', path: '/admin/destinations' },
    { name: 'Blogs', path: '/admin/blogs' },
    { name: 'Gallery', path: '/admin/gallery' },
    { name: 'Team', path: '/admin/team' },
    { name: 'Consultations', path: '/admin/consultations' },
    { name: 'Promotions', path: '/admin/promotions' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F1F5F9' }}>
      {/* Sidebar */}
      <aside style={{ width: '260px', backgroundColor: '#0F172A', color: 'white', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', color: '#38BDF8', fontWeight: 'bold', textAlign: 'center' }}>GVA Admin</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (pathname.startsWith(link.path) && link.path !== '/admin');
            return (
              <Link 
                key={link.name} 
                href={link.path}
                style={{
                  padding: '0.875rem 1rem',
                  borderRadius: '0.5rem',
                  color: isActive ? '#ffffff' : '#94A3B8',
                  backgroundColor: isActive ? '#1E293B' : 'transparent',
                  textDecoration: 'none',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all 0.2s ease',
                  display: 'block'
                }}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <button 
          onClick={async () => { await supabase.auth.signOut(); router.push('/admin/login'); }}
          style={{ padding: '0.875rem 1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#F87171', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s ease' }}
        >
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2.5rem', overflowY: 'auto' }}>
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', minHeight: 'calc(100vh - 5rem)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
