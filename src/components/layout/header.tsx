
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Phone, X, ArrowUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { WHATSAPP_ADMINS } from '@/lib/constants';
import { useScrollspy } from '@/hooks/use-scrollspy';
import { ThemeToggle } from '../theme-toggle';
import { Logo } from '../logo';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetFooter,
  SheetTitle,
} from '@/components/ui/sheet';

const navItems = [
  { href: '#about', label: 'Tentang' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#packages', label: 'Paket' },
  { href: '#testimonials', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontak' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFloatingButtonsVisible, setIsFloatingButtonsVisible] = useState(false);

  const sectionIds = ['home', ...navItems.map(item => item.href.substring(1))];
  const activeSection = useScrollspy(sectionIds, { rootMargin: '-50% 0px -50% 0px' });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      const floatingButtonsVisible = window.scrollY > 300;
      setIsScrolled(scrolled);
      setIsFloatingButtonsVisible(floatingButtonsVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = navItems.map((item) => {
    const isActive = activeSection === item.href.substring(1);
    return { ...item, isActive };
  });

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary",
                    item.isActive ? 'text-primary after:w-full after:left-0' : 'text-foreground/70'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
               <Button asChild className="rounded-md">
                <a href="#contact">
                  <Phone />
                  <span>Pesan Sekarang</span>
                </a>
              </Button>
            </div>
            

            {/* Mobile Menu */}
            <div className="flex md:hidden items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Toggle mobile menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col bg-background p-0 w-72">
                   <SheetHeader className="p-4 border-b">
                     <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                     <div className="flex items-center justify-between">
                       <Logo />
                       <SheetClose asChild>
                          <Button variant="ghost" size="icon">
                              <X className="h-6 w-6" />
                          </Button>
                       </SheetClose>
                     </div>
                  </SheetHeader>
                  <div className="flex-grow p-4">
                      <nav className="flex flex-col items-start gap-1">
                      {navLinks.map((item) => (
                          <SheetClose asChild key={item.label}>
                              <Link
                                  href={item.href}
                                  className={cn(
                                  "text-base font-medium transition-all duration-300 py-2 px-3 w-full text-left rounded-md",
                                  item.isActive ? 'text-primary bg-primary/10 font-semibold' : 'text-foreground/80 hover:bg-muted'
                                  )}
                              >
                                  {item.label}
                              </Link>
                          </SheetClose>
                      ))}
                      </nav>
                  </div>
                  <SheetFooter className="p-4 border-t flex-row items-center justify-between sm:justify-between">
                      <Button asChild size="default" className="flex-grow rounded-md">
                          <a href="#contact">
                              <Phone className="w-4 h-4" />
                              <span>Pesan Sekarang</span>
                          </a>
                      </Button>
                      <ThemeToggle />
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Action Buttons */}
      <div
        className={cn(
          'fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-opacity duration-300',
          isFloatingButtonsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <Button
          size="icon"
          variant="outline"
          className="rounded-full shadow-lg h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
         <Button
          size="icon"
          asChild
          className="rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground h-12 w-12"
        >
          <a href="#contact" aria-label="Chat on WhatsApp">
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </>
  );
}
