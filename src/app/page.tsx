import dynamic from 'next/dynamic';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <Skeleton className="h-12 w-1/2 mx-auto" />
    <Skeleton className="h-6 w-3/4 mx-auto mt-6" />
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-80 w-full" />
    </div>
  </div>
);

const AboutSection = dynamic(() => import('@/components/sections/about'), { loading: () => <LoadingSkeleton /> });
const PortfolioSection = dynamic(() => import('@/components/sections/portfolio'), { loading: () => <LoadingSkeleton /> });
const PackagesSection = dynamic(() => import('@/components/sections/packages'), { loading: () => <LoadingSkeleton /> });
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'), { loading: () => <LoadingSkeleton /> });
const FaqSection = dynamic(() => import('@/components/sections/faq'), { loading: () => <LoadingSkeleton /> });
const ContactSection = dynamic(() => import('@/components/sections/contact'), { loading: () => <LoadingSkeleton /> });

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <PackagesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
