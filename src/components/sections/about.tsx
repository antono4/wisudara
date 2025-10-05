
import Image from 'next/image';
import { Camera, Sparkles, Handshake, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimation } from '../scroll-animation';
import { Card, CardContent } from '@/components/ui/card';

const features = [
    {
        icon: Camera,
        title: "Visual Modern & Artistik",
        description: "Menggabungkan komposisi modern dengan sentuhan artistik yang klasik dan abadi.",
    },
    {
        icon: Sparkles,
        title: "Kualitas Profesional",
        description: "Menonjolkan ekspresi natural Anda melalui teknik pencahayaan dan editing terbaik.",
    },
    {
        icon: Handshake,
        title: "Pengalaman Personal",
        description: "Sesi foto yang nyaman dan diarahkan secara personal untuk hasil yang otentik.",
    },
    {
        icon: MapPin,
        title: "Lokasi Fleksibel",
        description: "Ahli dalam memanfaatkan keindahan lokasi outdoor di Padang atau kenyamanan lokasi pilihan Anda.",
    }
]

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about');

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                Seni di Balik Setiap Momen
            </h2>
            <p className="mt-6 text-lg text-foreground/80 font-body">
                Di Wisudara, kami percaya setiap momen berharga adalah sebuah mahakarya. Misi kami adalah mengubah kebahagiaan Anda menjadi sebuah karya seni fotografi yang tak lekang oleh waktu.
            </p>
        </ScrollAnimation>
        
        <div className="mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollAnimation>
                {aboutImage && aboutImage.imageUrl.trim() !== '' && (
                <Card className="overflow-hidden shadow-2xl rounded-2xl border-none bg-transparent">
                    <CardContent className="p-0">
                    <Image
                        src={aboutImage.imageUrl}
                        alt={aboutImage.description}
                        width={600}
                        height={800}
                        className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                        data-ai-hint={aboutImage.imageHint}
                    />
                    </CardContent>
                </Card>
                )}
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                {features.map((feature) => (
                      <div key={feature.title} className="flex gap-4 items-start">
                          <div className="flex-shrink-0 bg-accent/10 text-accent p-3 rounded-full mt-1">
                              <feature.icon className="h-7 w-7" />
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold font-headline text-foreground">{feature.title}</h3>
                              <p className="mt-1 text-foreground/70 font-body">{feature.description}</p>
                          </div>
                      </div>
                ))}
              </div>
            </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
