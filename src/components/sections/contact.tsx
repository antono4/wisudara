
import { Button } from '@/components/ui/button';
import { WHATSAPP_ADMINS, INSTAGRAM_LINK, INSTAGRAM_HANDLE } from '@/lib/constants';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { ScrollAnimation } from '../scroll-animation';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '../contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Pesan Sesi Foto Anda
          </h2>
          <p className="mt-6 text-lg text-foreground/80 font-body">
            Siap untuk mengabadikan momen berharga Anda? Hubungi kami untuk konsultasi atau langsung buat jadwal sesi foto Anda. Tim kami siap membantu.
          </p>
        </ScrollAnimation>
        
        <div className="mt-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollAnimation delay={200} className="space-y-8">
                <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-card to-secondary/30">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full mt-1">
                           <MapPin className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Lokasi Pemotretan Fleksibel</h3>
                            <p className="text-muted-foreground">Berbasis di Padang. Melayani sesi outdoor di lokasi ikonik atau di tempat pilihan Anda untuk kenyamanan maksimal.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-card to-secondary/30">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full mt-1">
                           <Instagram className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Ikuti Kami di Instagram</h3>
                            <p className="text-muted-foreground">Lihat portofolio terbaru kami, cerita di balik layar, dan dapatkan inspirasi di profil Instagram kami.</p>
                             <Button asChild variant="link" className="p-0 h-auto mt-2 text-base text-accent">
                                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE}</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                 <div>
                    <h3 className="font-headline text-2xl text-center font-bold mb-6">Atau Hubungi Langsung via WhatsApp:</h3>
                    <div className="space-y-4">
                    {WHATSAPP_ADMINS.map((admin) => (
                        <Card key={admin.name} className="shadow-lg rounded-xl bg-gradient-to-br from-card to-secondary/40 transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
                            <CardContent className="p-4">
                                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                                    <div className="flex-grow space-y-1">
                                        <h4 className="font-bold text-lg text-primary">{admin.name}</h4>
                                        <p className="text-muted-foreground text-sm">{admin.display}</p>
                                    </div>
                                    <Button asChild size="default" className="rounded-md w-full sm:w-auto text-sm flex-shrink-0">
                                    <a href={admin.link} target="_blank" rel="noopener noreferrer">
                                        <Phone className="mr-2 h-4 w-4" />
                                        Chat via WhatsApp
                                    </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
                <Card className="shadow-xl rounded-2xl p-4 sm:p-8 border-none bg-gradient-to-b from-secondary/30 to-card">
                    <h3 className="font-headline text-2xl font-bold text-center mb-1">Kirim Pertanyaan</h3>
                    <p className="text-center text-muted-foreground mb-6">Gunakan formulir di bawah ini untuk pertanyaan detail.</p>
                    <ContactForm />
                </Card>
            </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
