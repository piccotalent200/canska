'use client';

import { usePathname } from 'next/navigation';
import NewHeaderComponent from "@/Components/Common/Header/NewHeaderComponent";
import Footer from "@/Components/Common/Footer";
import AuthHeader from '../Header/AuthHeader';


const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  
  // Define auth routes that should use the simplified header
  const authRoutes = ['/registration-success', '/email-verified', '/login'];
  const isAuthRoute = authRoutes.includes(pathname);

  if (isAuthRoute) {
    return (
      <>
        <AuthHeader />
        <main className="flex-1">
          {children}
        </main>
        {/* No footer for auth pages */}
      </>
    );
  }

  // Regular pages with full header and footer
  return (
    <>
      <NewHeaderComponent />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;