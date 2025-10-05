
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { ScrollAnimation } from '../scroll-animation';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from 'react';

const testimonials = [
  {
    name: 'Dian, Lulusan UNP',
    quote: "Hasil fotonya melebihi ekspektasi! Elegan, modern, dan fotografernya sabar banget mengarahkan gaya. Sangat puas dan highly recommended untuk area Padang!",
    rating: 5,
  },
  {
    name: 'Budi & Keluarga',
    quote: "Pelayanannya ramah, prosesnya cepat, dan harganya sangat bersahabat untuk foto keluarga. Hasilnya tetap profesional dan berkelas. Keluarga besar saya suka semua fotonya.",
    rating: 5,
  },
    {
    name: 'Rina & Amir',
    quote: "Untuk foto pre-wedding, kami ingin yang simpel tapi elegan. Wisudara benar-benar bisa menangkap chemistry kami. Komunikasinya lancar dan hasilnya romantis banget!",
    rating: 5,
  },
];

const Rating = ({ value }: { value: number }) => {
    return (
        <div className="flex text-yellow-400">
            {[...Array(value)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
            ))}
        </div>
    )
}

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
    
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Kisah di Balik Senyuman
          </h2>
           <p className="mt-6 text-lg text-foreground/80 font-body">
            Jangan hanya percaya kata kami. Dengarkan langsung dari mereka yang telah memercayakan momen berharganya kepada Wisudara.
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="mt-20" delay={200}>
          <Carousel 
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-4xl mx-auto relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="h-full bg-card border-border shadow-lg rounded-2xl">
                        <CardContent className="p-8 text-center flex flex-col justify-center h-full min-h-[280px]">
                           <div className="flex-grow flex flex-col items-center justify-center">
                                <Rating value={testimonial.rating} />
                                <p className="text-foreground/80 italic font-body text-lg mt-4">"{testimonial.quote}"</p>
                           </div>
                           <div className="mt-8 justify-center flex-shrink-0">
                              <p className="font-headline font-semibold text-foreground text-xl">{testimonial.name}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-background/50 hover:bg-background" />
            <CarouselNext className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-background/50 hover:bg-background" />
          </Carousel>
        </ScrollAnimation>
      </div>
    </section>
  );
}
