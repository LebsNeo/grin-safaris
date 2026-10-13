export const BRAND = {
  name: "Grin Safaris",
  domain: "grinsafaris.com",
  email: "info@grinsafaris.com",
  phoneDisplay: "+27 62 438 2564",
  phoneRaw: "27624382564",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = whatsappLink(
  "Hi Grin Safaris — I'd like to book a Silent Safari. Please share availability and details.",
);

export const partnerWhatsappUrl = whatsappLink(
  "Hi Grin Safaris — I run a tour operator / lodge and would like to discuss a partnership.",
);
