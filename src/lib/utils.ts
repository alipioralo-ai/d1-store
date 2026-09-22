import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WA_NUMBER = "51997610401";
export const WA_DISPLAY = "+51 997 610 401";
export const STORE_NAME = "Centro Comercial IMA SUMAQ 265";
export const STORE_ADDRESS = "Calle Maruri · 1er piso · Tienda 135 · Cusco";
export const STORE_MAPS =
  "https://maps.google.com/?q=Centro+Comercial+IMA+SUMAQ+265+Calle+Maruri+Cusco";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function soles(n: number) {
  return `S/ ${n.toLocaleString("es-PE")}`;
}
