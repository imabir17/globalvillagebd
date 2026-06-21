'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { usePathname } from 'next/navigation';

export default function PromoPopup() {
  const [promo, setPromo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Hide popup on admin pages
    if (pathname?.startsWith('/admin')) {
      setIsOpen(false);
      return;
    }

    const fetchPromo = async () => {
      // Check if user already dismissed it this session
      if (sessionStorage.getItem('promo_dismissed')) return;

      const { data } = await supabase
        .from('promotions')
        .select('*')
        .eq('is_active', true)
        .limit(1)
        .single();

      if (data) {
        setPromo(data);
        setIsOpen(true);
      }
    };
    fetchPromo();
  }, [pathname]);

  if (!isOpen || !promo) return null;

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('promo_dismissed', 'true');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backdropFilter: 'blur(2px)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '1.5rem',
        maxWidth: '450px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        animation: 'fadeInUp 0.3s ease-out'
      }}>
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem', right: '1rem',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '32px', height: '32px',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px',
            transition: 'background 0.2s',
            zIndex: 10
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(0,0,0,0.8)'}
          onMouseOut={(e) => e.target.style.background = 'rgba(0,0,0,0.5)'}
        >
          ✕
        </button>
        {promo.image_url && (
          <img src={promo.image_url} alt={promo.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
        )}
        <div style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A', lineHeight: '1.2' }}>{promo.title}</h2>
          <p style={{ color: '#475569', marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.05rem' }}>{promo.message}</p>
          {promo.link_url ? (
            <a 
              href={promo.link_url} 
              onClick={() => setIsOpen(false)}
              style={{
                display: 'inline-block',
                background: 'var(--primary, #2563EB)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.5)'; }}
              onMouseOut={(e) => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 4px 14px 0 rgba(37, 99, 235, 0.39)'; }}
            >
              Learn More
            </a>
          ) : (
            <button 
              onClick={handleClose}
              style={{
                display: 'inline-block',
                background: '#F1F5F9',
                color: '#475569',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Dismiss
            </button>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
