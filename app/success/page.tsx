'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function FormSuccessMessage() {
      const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // Redirect to form page
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [router]);
  
  return (
    <section className="relative">
      <Header isLogin={true} bookLink="/form" />
      <div className="relative overflow-hidden bg-[#111827] text-[#E5E7EB] px-8 py-16 w-full flex flex-col items-center justify-center min-h-[582px] shadow-xl transition-opacity duration-500 z-0">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 transform z-[-1]"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src="/images/stripes-dark.svg"
            width={768}
            height={432}
            alt="Stripes"
          />
        </div>
        <div className="w-full flex flex-col gap-10 items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-semibold">Thank You!</h2>
          <p>Nexotech supports your innovation journey</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}