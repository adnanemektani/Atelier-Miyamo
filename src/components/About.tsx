import { motion } from 'framer-motion'

function About() {
  return (
    <section id="apropos" className="py-16 md:py-24 px-4 md:px-6 bg-sand/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="bg-sand rounded-2xl aspect-video md:aspect-square flex items-center justify-center order-2 md:order-1">
          <span className="text-burgundy/50 text-sm">Photo atelier / process</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="order-1 md:order-2">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-5">À propos</h2>
          <p className="text-burgundy/80 leading-relaxed text-base md:text-lg">Atelier Miyamo est un univers créatif dédié aux tableaux en relief, mêlant art, modernité et décoration intérieure. Chaque création est pensée pour transformer un mur en une véritable œuvre d'art.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About