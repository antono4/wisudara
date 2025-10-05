
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Phone } from 'lucide-react';
import { ScrollAnimation } from '../scroll-animation';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section id="home" className="relative h-[90dvh] min-h-[700px] lg:h-screen flex items-center">
      {heroImage && heroImage.imageUrl.trim() !== '' && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="max-w-3xl text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground drop-shadow-2xl !leading-tight">
            Kenangan Abadi, Gaya Modern.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-foreground/90 drop-shadow-lg font-body">
            Selamat datang di Wisudara. Kami mengubah setiap momen berharga Anda—mulai dari kelulusan, pre-wedding, hingga acara keluarga—menjadi potret artistik yang tak terlupakan.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md w-full sm:w-auto text-base">
              <a href="#contact">
                <Phone className="mr-2 h-5 w-5" />
                Pesan Sesi Anda
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent hover:bg-white/10 text-foreground border-foreground/50 hover:border-foreground rounded-md w-full sm:w-auto text-base">
              <a href="#portfolio">
                Lihat Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
