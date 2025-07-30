// components/ui/logo.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();
  const isNewLandingPage = pathname === "/new-landing";

  return (
    <>
      {isNewLandingPage ? (
        <div className="inline-flex cursor-default" aria-label="Nexotech">
          <Image
            src="/images/logo-blue-favicon.png"
            alt="Nexotech Logo"
            width={50}
            height={50}
          />
        </div>
      ) : (
        <Link href="/" className="inline-flex cursor-pointer" aria-label="Nexotech">
          <Image
            src="/images/logo-blue-favicon.png"
            alt="Nexotech Logo"
            width={50}
            height={50}
          />
        </Link>
      )}
    </>
  );
}