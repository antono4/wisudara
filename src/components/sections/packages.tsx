
"use client";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, Star, Phone, Users, User, Heart } from 'lucide-react';
import { ScrollAnimation } from '../scroll-animation';
import { cn } from '@/lib/utils';

const packages = [
  {
    name: 'Sesi Personal',
    price: 'Mulai dari Rp 250.000',
    description: 'Sesi foto solo yang fokus untuk menonjolkan pencapaian atau potret personal Anda.',
    features: [
      'Ideal untuk wisuda atau profil',
      'Sesi foto outdoor 45 menit',
      '1 Orang',
      '15 Foto Pilihan (Edited)',
      'Semua file foto via Google Drive',
    ],
    isFavorite: false,
    icon: User,
  },
  {
    name: 'Momen Bersama',
    price: 'Mulai dari Rp 450.000',
    description: 'Abadikan kebahagiaan bersama orang-orang terkasih: keluarga, sahabat, atau pasangan.',
    features: [
      'Ideal untuk keluarga atau grup kecil',
      'Sesi foto outdoor 60 menit',
      'Hingga 5 Orang',
      '25 Foto Pilihan (Edited)',
      'Semua file foto via Google Drive',
    ],
    isFavorite: true,
    icon: Users,
  },
  {
    name: 'Cerita Spesial',
    price: 'Hubungi untuk Penawaran',
    description: 'Pengalaman premium untuk acara spesial seperti lamaran atau pre-wedding.',
    features: [
      'Ideal untuk pre-wedding/lamaran',
      'Sesi foto outdoor 120+ menit',
      'Jumlah orang fleksibel',
      'Konsultasi konsep & gaya personal',
      'Semua foto terbaik diedit profesional',
    ],
    isFavorite: false,
    icon: Heart,
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Pilihan Paket Momen
          </h2>
          <p className="mt-6 text-lg text-foreground/80 font-body">
            Kami menyediakan paket digital yang fleksibel, dirancang untuk setiap momen berharga Anda. Fokus kami adalah memberikan hasil foto artistik dalam bentuk file berkualitas tinggi.
          </p>
        </ScrollAnimation>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <ScrollAnimation key={pkg.name} className="h-full flex" delay={index * 150}>
              <Card
                className={cn(
                  'flex flex-col w-full shadow-lg rounded-2xl transition-all duration-300 hover:shadow-accent/20 hover:-translate-y-2 relative overflow-hidden',
                  pkg.isFavorite
                    ? 'border-accent/50 border-2 shadow-accent/20 lg:scale-105 bg-gradient-to-br from-card to-secondary/60'
                    : 'border-border bg-card'
                )}
              >
                <CardHeader className="relative pb-4 flex-shrink-0">
                   {pkg.isFavorite && (
                    <>
                      <div
                        className="absolute -top-12 -right-12 w-48 h-48 pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(circle, hsl(var(--accent) / 0.15), transparent 60%)',
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1.5 shadow-lg z-10">
                        <Star className="w-4 h-4" /> Paling Laris
                      </div>
                    </>
                  )}
                  <div className="flex items-center gap-4 pt-4">
                    <pkg.icon className="w-10 h-10 text-accent" />
                    <CardTitle className="font-headline text-2xl text-foreground">
                      {pkg.name}
                    </CardTitle>
                  </div>
                  <p className="font-semibold text-primary pt-2 text-2xl font-headline">
                    {pkg.price}
                  </p>
                  <CardDescription className="font-body pt-2">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4 pt-6 border-t">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="font-body text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-shrink-0 pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-md text-base"
                    variant={pkg.isFavorite ? 'default' : 'secondary'}
                  >
                    <a
                      href="#contact"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Pesan Paket Ini
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
