import { motion } from 'framer-motion'
import { getWhatsappLink } from '../lib/whatsapp'
import type { Tableau } from '../data/tableaux'

interface Props {
  tableau: Tableau
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function TableauCard({ tableau }: Props) {
  const link = getWhatsappLink(`Bonjour, je suis intéressé par le tableau "${tableau.nom}".`)

  return (
    <motion.div variants={fadeUp} className="group bg-sand rounded-2xl overflow-hidden">
      <div className="aspect-square overflow-hidden bg-dustypink/40 flex items-center justify-center">
        <img src={tableau.image} alt={tableau.nom} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 md:p-5">
        <p className="text-xs text-burgundy/60 uppercase tracking-wide mb-1">{tableau.categorie}</p>
        <h3 className="font-serif text-lg text-burgundy mb-3">{tableau.nom}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-burgundy text-creme text-sm py-2.5 rounded-full hover:bg-burgundy/90 transition-colors">Commander ce modèle</a>
      </div>
    </motion.div>
  )
}

export default TableauCard