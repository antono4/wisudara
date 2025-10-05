
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { ScrollAnimation } from '../scroll-animation';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '../ui/button';
import { X, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { bustCache } from '@/lib/utils';

const INITIAL_VISIBLE_IMAGES = 8;

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

export default function PortfolioSection() {
  const [allImages, setAllImages] = useState<ImagePlaceholder[]>([]);
  const [visibleImages, setVisibleImages] = useState<ImagePlaceholder[]>([]);
  const [showAll, setShowAll] = useState(false);
  
  const [api, setApi] = useState<CarouselApi>();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // This now runs only on the client
    const portfolioImages = PlaceHolderImages.filter((img) => img.id.startsWith('portfolio-'));
    const shuffledImages = shuffleArray([...portfolioImages]);
    const imagesWithCacheBustedUrls = shuffledImages.map(image => ({
        ...image,
        imageUrl: bustCache(image.imageUrl),
    }));

    setAllImages(imagesWithCacheBustedUrls);
    // Initially, show a limited number of images
    setVisibleImages(imagesWithCacheBustedUrls.slice(0, INITIAL_VISIBLE_IMAGES));
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
    setVisibleImages(allImages);
  };

  const handleThumbClick = (index: number) => {
    const globalIndex = allImages.findIndex(img => img.id === visibleImages[index].id);
    setSelectedIndex(globalIndex);
    setOpen(true);
  };
  
  useEffect(() => {
    if (open && api) {
      api.scrollTo(selectedIndex, true);
    }
  }, [open, api, selectedIndex]);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Galeri Kisah Abadi
          </h2>
          <p className="mt-6 text-lg text-foreground/80 font-body">
            Setiap gambar adalah bab dari sebuah cerita bahagia. Inilah beberapa kisah—wisuda, pre-wedding, dan keluarga—yang telah kami abadikan melalui lensa dengan sentuhan artistik khas Wisudara.
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="mt-20" delay={200}>
           <Dialog open={open} onOpenChange={setOpen}>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {visibleImages.map((image, index) => {
                    return image.imageUrl.trim() !== '' ? (
                    <DialogTrigger asChild key={image.id}>
                        <div
                            onClick={() => handleThumbClick(index)}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer block break-inside-avoid"
                        >
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                width={image.width}
                                height={image.height}
                                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                data-ai-hint={image.imageHint}
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                <p className="text-white text-center text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Lihat Detail</p>
                            </div>
                        </div>
                    </DialogTrigger>
                    ) : null
                })}
            </div>

            <DialogContent className="max-w-4xl w-[95vw] p-0 border-0 bg-transparent shadow-none flex items-center justify-center">
               <DialogTitle className="sr-only">Tampilan Detail Gambar Portofolio</DialogTitle>
               <DialogClose asChild>
                  <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full bg-black/30 hover:bg-black/50 text-white border-none h-10 w-10 z-50">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Tutup</span>
                  </Button>
              </DialogClose>
              <Carousel setApi={setApi} className="w-full" opts={{startIndex: selectedIndex}}>
                <CarouselContent>
                  {allImages.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="relative">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={image.width}
                          height={image.height}
                          className="rounded-lg object-contain max-h-[85vh] w-full h-auto"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 text-white border-none h-10 w-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 text-white border-none h-10 w-10" />
              </Carousel>
            </DialogContent>
          </Dialog>
        </ScrollAnimation>
        
        {!showAll && allImages.length > INITIAL_VISIBLE_IMAGES && (
          <ScrollAnimation className="mt-12 text-center" delay={100}>
            <Button size="lg" variant="outline" onClick={handleShowAll} className="rounded-md text-base bg-transparent hover:bg-background">
              Tampilkan Semua Portofolio
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}




