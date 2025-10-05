import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollAnimation } from '../scroll-animation';
import { Separator } from '@/components/ui/separator';

const faqs = [
  {
    question: 'Berapa lama file foto akan saya terima?',
    answer:
      'Anda akan menerima link Google Drive berisi semua file foto dalam waktu maksimal 3x24 jam setelah sesi pemotretan selesai. Kami mengutamakan kecepatan tanpa mengurangi kualitas editing.',
  },
  {
    question: 'Layanan foto apa saja yang tersedia?',
    answer:
      'Kami melayani berbagai macam sesi foto, termasuk wisuda, pre-wedding, lamaran, potret keluarga, acara pribadi, dan kebutuhan potret personal lainnya. Jangan ragu untuk mendiskusikan kebutuhan Anda dengan kami.',
  },
  {
    question: 'Di mana saja lokasi pemotretan yang direkomendasikan di Padang?',
    answer:
      'Kami sangat fleksibel! Lokasi favorit klien kami antara lain di sekitar Pantai Padang, Masjid Raya Sumatera Barat, kawasan Kota Tua, atau di lokasi outdoor lainnya. Kami juga bisa melakukan sesi di lokasi pilihan Anda (seperti rumah atau kafe) selama masih di area Padang.',
  },
  {
    question: 'Apa yang harus saya siapkan sebelum sesi foto?',
    answer:
      'Yang terpenting adalah istirahat yang cukup agar tampil segar! Siapkan kostum dan properti yang sesuai dengan tema foto Anda (misalnya, toga untuk wisuda, cincin untuk lamaran, atau pakaian senada untuk keluarga).',
  },
  {
    question: 'Apakah saya akan dibantu untuk berpose?',
    answer:
      'Tentu saja! Anda tidak perlu khawatir jika merasa kaku di depan kamera. Fotografer kami akan mengarahkan gaya secara natural dan santai untuk mendapatkan ekspresi terbaik Anda.',
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer:
      'Kami memberlakukan sistem booking fee (DP) sebesar 50% untuk mengamankan jadwal Anda. Sisa pelunasan dapat dilakukan pada hari pemotretan, baik secara tunai maupun transfer.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Yang Sering Ditanyakan
          </h2>
          <p className="mt-6 text-lg text-foreground/80 font-body">
            Menemukan jawaban untuk pertanyaan Anda? Di sini kami telah mengumpulkan beberapa pertanyaan umum untuk membantu Anda.
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="mt-16 max-w-3xl mx-auto" delay={200}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-none">
                {index > 0 && <Separator className="bg-border/50" />}
                <AccordionTrigger className="text-left font-headline text-lg lg:text-xl py-6 hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base text-foreground/70 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimation>
      </div>
    </section>
  );
}
