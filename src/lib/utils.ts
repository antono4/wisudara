import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function bustCache(url: string) {
  const newUrl = new URL(url, 'http://localhost');
  newUrl.searchParams.set('t', new Date().getTime().toString());
  return `${newUrl.pathname}${newUrl.search}`;
}
