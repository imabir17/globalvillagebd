'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import ConsultationModal from "@/components/ConsultationModal";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Hide public navigation elements on all admin routes
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <>
      {/* Modals & Popups */}
      {!isAdmin && <ConsultationModal />}
      {!isAdmin && <PromoPopup />}
      
      {/* Top Navigation */}
      {!isAdmin && <Navbar />}
      
      {/* Main Content */}
      <main>{children}</main>
      
      {/* Footer */}
      {!isAdmin && <Footer />}
    </>
  );
}
