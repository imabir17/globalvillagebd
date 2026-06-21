export default function AdminDashboardHome() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0F172A' }}>Dashboard Overview</h1>
      <p style={{ color: '#64748B', fontSize: '1.1rem', marginBottom: '2.5rem' }}>Welcome to your admin panel. Select a category from the sidebar to manage your content.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {/* Placeholder Stat Cards */}
        {[
          { title: 'Total Destinations', value: 'Loading...' },
          { title: 'Consultation Requests', value: 'Loading...' },
          { title: 'Active Promotions', value: 'Loading...' },
        ].map((stat, i) => (
          <div key={i} style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
            <h3 style={{ fontSize: '1rem', color: '#64748B', marginBottom: '0.5rem' }}>{stat.title}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0F172A' }}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
