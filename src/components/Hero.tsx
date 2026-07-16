import { motion } from 'framer-motion'
import { getWhatsappLink } from '../lib/whatsapp'

function Hero() {
  const commanderLink = getWhatsappLink('Bonjour, je souhaite créer un tableau personnalisé.')

  return (
    <section id="accueil" className="min-h-[85vh] flex items-center bg-creme pt-8 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="font-serif text-4xl md:text-5xl text-burgundy leading-tight mb-6">
            Bienvenue chez Atelier Miyamo
          </h1>
          <p className="text-burgundy/80 text-lg leading-relaxed mb-8">
            Offrez à votre intérieur une pièce unique et moderne grâce à nos tableaux en relief réalisés à la main. Des créations artistiques qui apportent caractère, élégance et personnalité à votre espace.
          </p>
          <a href={commanderLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-burgundy text-creme px-8 py-3.5 rounded-full hover:bg-burgundy/90 transition-colors">
            Commander votre création
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-sand rounded-2xl aspect-square flex items-center justify-center">
          <span className="text-burgundy/50 text-sm">Image tableau </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero