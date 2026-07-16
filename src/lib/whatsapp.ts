export function getWhatsappLink(message: string): string {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}