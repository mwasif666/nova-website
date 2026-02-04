"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track route changes (Next.js App Router)
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-X598ECZ428", {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ""),
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Load GA script after page becomes interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X598ECZ428"
        strategy="afterInteractive"
      />

      {/* GA initialization */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ window.dataLayer.push(arguments); }

          gtag('js', new Date());
          gtag('config', 'G-X598ECZ428', {
            page_path: window.location.pathname
          });
        `}
      </Script>
    </>
  );
}
