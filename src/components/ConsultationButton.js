'use client';

export default function ConsultationButton({ className, children, ...props }) {
  return (
    <a 
      href="#consultation"
      className={className} 
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('openConsultationModal'));
      }}
      style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
      {...props}
    >
      {children}
    </a>
  );
}
