import "./globals.css";
import LenisProvider from "../Components/Reusable/LenisProvider";
import ToastProvider from "@/Components/Common/ToastProvider";
import LayoutWrapper from "@/Components/Common/LayoutWrapper";

export const metadata = {
  title: "Canska - world first scholarship mentoring program",
  description:
    "Canska is a platform for studying abroad. We provide comprehensive information and resources to help students make informed decisions about their international education journey.",

  keywords: [
    "Canska",
  ],

  icons: {
    icon: "/img/footer-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full antialiased !overflow-visible !pe-0'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:ital,opsz,wght@0,8..144,100..1000;1,8..144,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" 
        suppressHydrationWarning
      >
        <ToastProvider />
        <LenisProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </LenisProvider>
      </body>
    </html>
  );
}
