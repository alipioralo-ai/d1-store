import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WA_NUMBER = "51982029518";
export const WA_DISPLAY = "+51 982 029 518";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function soles(n: number) {
  return `S/ ${n.toLocaleString("es-PE")}`;
}
