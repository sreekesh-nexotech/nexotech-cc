import "./css/style.css";
import Script from "next/script";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexotech|Custom Software and IT Consulting",
  description: "Nexotech Solutions empowers businesses with custom software, IT consulting, web and app development, chatbot development, and automation. Scale faster with innovative digital solutions!",
  openGraph: {
    title: "Nexotech|Custom Software and IT Consulting",
    description: "Nexotech Solutions empowers businesses with custom software, IT consulting, web and app development, chatbot development, and automation. Scale faster with innovative digital solutions!",
    url: "https://nexotech.cc",
    siteName: "Nexotech",
    images: [
      {
        url: "https://nexotech.cc/images/logo-01.svg",
        width: 1200,
        height: 630,
        alt: "Nexotech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexotech",
    creator: "@nexotech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics Script
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-18VZ2CX5BE" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-18VZ2CX5BE', {
                page_path: window.location.pathname,
              });
            `,
          }}
        /> */}

        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5SW6DSPJ');
            `,
          }}
        />
        

        {/* Meta Pixel (Facebook Pixel) */}
        <Script async src={`https://connect.facebook.net/en_US/fbevents.js`} />
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '956458133300901');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} 
            src={`https://www.facebook.com/tr?id=956458133300901&ev=PageView&noscript=1`} />
        </noscript>

        
      </head>
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        {/* Google Tag Manager Noscript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SW6DSPJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          /></noscript>
          
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
