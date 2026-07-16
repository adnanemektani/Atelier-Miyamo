import { motion } from 'framer-motion'
import { getWhatsappLink } from '../lib/whatsapp'

function Footer() {
  const link = getWhatsappLink("Bonjour, je souhaite avoir plus d'informations.")

  return (
    <motion.footer id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="py-12 md:py-16 px-4 md:px-6 bg-burgundy text-creme">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-xl">Atelier Miyamo</span>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          <a href="https://instagram.com/atelier_miamo" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram · @atelier_miamo</a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp · 06 40 00 30 20</a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer