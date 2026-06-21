import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

export const revalidate = 0;

export default async function DestinationsPage() {
  const { data: destinationsData } = await supabase.from('destinations').select('*').order('created_at', { ascending: true });
  return (
    <div className="destinations-page container" style={{ padding: '4rem 1.5rem' }}>
      <div className="text-center" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Study Destinations</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          Explore opportunities in the world's top educational hubs. We help you choose the country that best fits your career goals.
        </p>
      </div>

      <div className="text-center" style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Explore by Map</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Click on a highlighted country to view details</p>
        
        <div className="map-container">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="World Map" 
            className="world-map-img" 
          />
          
          {destinationsData.map((dest) => (
            <Link href={`/destinations/${dest.id}`} key={dest.id}>
              <div 
                className="map-pin" 
                style={{ top: dest.map_top, left: dest.map_left }}
                title={dest.name}
              >
                <div className="pin-dot"></div>
                <div className="pin-pulse"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3">
        {destinationsData.map((dest) => (
          <div className="destination-card" key={dest.id}>
            <div className="card-image">
              <img src={dest.image_url} alt={dest.name} />
              <div className="card-overlay">
                <h3>{dest.name}</h3>
              </div>
            </div>
            <div className="card-content">
              <p>{dest.description}</p>
              <ul className="card-features">
                {dest.points && dest.points.slice(0, 4).map((point, index) => (
                  <li key={index}>
                    <span className="dot"></span> {point}
                  </li>
                ))}
              </ul>
              <Link href={`/destinations/${dest.id}`} className="btn-outline-dark" style={{display: 'block', textAlign: 'center'}}>
                View Details &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
