import { WHATSAPP_LINK } from '@/lib/constants';

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground text-center p-2 text-sm sticky top-0 z-50">
      <p>
        Situs ini dirancang oleh{' '}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80 transition-opacity">
          Randa
        </a>
        . Buat landing page untuk bisnis Anda?{' '}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80 transition-opacity">
          Hubungi saya!
        </a>
      </p>
    </div>
  );
}
