
import Link from 'next/link';
import { Instagram, Smartphone } from 'lucide-react';
import { INSTAGRAM_LINK } from '@/lib/constants';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const navItems = [
  { href: '#about', label: 'Tentang' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#packages', label: 'Paket' },
  { href: '#testimonials', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontak' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center">
          <Logo />
          <p className="mt-4 max-w-md text-base text-foreground/70">
            Seni Fotografi Momen di Padang. Abadikan setiap momen berharga Anda dengan gaya modern, minimalis dan elegan.
          </p>

          <nav className="my-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 border-foreground/20 hover:bg-accent hover:text-accent-foreground">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                </a>
            </Button>
             <Button asChild variant="outline" size="icon" className="rounded-full w-12 h-12 border-foreground/20 hover:bg-accent hover:text-accent-foreground">
                <a href="#contact" aria-label="WhatsApp">
                    <Smartphone className="h-6 w-6" />
                </a>
            </Button>
          </div>
        </div>

        <Separator className="my-12 bg-foreground/10" />

        <div className="text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Wisudara. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </div>
    </footer>
  );
}
