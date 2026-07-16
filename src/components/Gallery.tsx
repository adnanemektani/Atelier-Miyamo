import { motion } from 'framer-motion'
import { tableaux } from '../data/tableaux'
import TableauCard from './TableauCard'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function Gallery() {
  return (
    <section id="creations" className="py-16 md:py-24 px-4 md:px-6 bg-creme">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-3">Nos créations</h2>
          <p className="text-burgundy/70 max-w-xl mx-auto">Tableaux en relief modernes, avec miroir, effets de texture ou éclairage LED.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tableaux.map((tableau) => (
            <TableauCard key={tableau.id} tableau={tableau} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery