import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="#home"
      className={cn(
        'flex items-center gap-2 text-foreground transition-colors hover:text-primary',
        className
      )}
    >
      <Image src="/logo.png" alt="Wisudara Logo" width={40} height={40} />
      <span className="text-3xl font-headline font-bold">Wisudara</span>
    </Link>
  );
}
