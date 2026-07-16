import { motion } from 'framer-motion'

const points = [
  { title: 'Créations artisanales', desc: 'Chaque pièce est façonnée à la main.' },
  { title: 'Pièces uniques', desc: "Aucun tableau n'est identique à un autre." },
  { title: 'Personnalisation complète', desc: 'Dimensions, couleurs, style, LED.' },
  { title: 'Design moderne', desc: 'Une esthétique pensée pour votre intérieur.' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

function WhyUs() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-creme">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="font-serif text-3xl md:text-4xl text-burgundy text-center mb-12">Pourquoi nous choisir ?</motion.h2>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point) => (
            <motion.div key={point.title} variants={fadeUp} className="bg-sand/50 rounded-2xl p-6 text-center">
              <h3 className="font-serif text-lg text-burgundy mb-2">{point.title}</h3>
              <p className="text-burgundy/70 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs