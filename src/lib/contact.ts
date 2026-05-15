export const BRAND = {
  name: "Grin Safaris",
  domain: "grinsafaris.com",
  email: "info@grinsafaris.com",
  phoneDisplay: "+27 62 438 2564",
  phoneRaw: "27624382564",
} as const;

const waMessage =
  "Hi Grin Safaris — I'd like to book an electric safari tour. Please share availability and details.";

export const whatsappUrl = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(
  waMessage,
)}`;

export const partnerWhatsappUrl = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(
  "Hi Grin Safaris — I run a tour operator/lodge and would like to discuss a partnership.",
)}`;
