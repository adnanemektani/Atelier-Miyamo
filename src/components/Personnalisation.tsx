import { motion } from 'framer-motion'
import { getWhatsappLink } from '../lib/whatsapp'

const options = ['Dimensions', 'Couleurs', 'Style du relief', 'Ajout de miroir', 'Ajout de LED', 'Design sur mesure']

function Personnalisation() {
  const link = getWhatsappLink('Bonjour, je souhaite créer un tableau personnalisé.')

  return (
    <section id="personnalisation" className="py-16 md:py-24 px-4 md:px-6 bg-burgundy">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-creme mb-4">Personnalisation</h2>
        <p className="text-creme/80 mb-8 max-w-xl mx-auto">Choisissez chaque détail de votre tableau, on s'occupe du reste.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 max-w-xl mx-auto">
          {options.map((opt) => (
            <span key={opt} className="text-creme/90 text-sm bg-creme/10 rounded-full py-2 px-3">{opt}</span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-creme text-burgundy px-8 py-3.5 rounded-full hover:bg-creme/90 transition-colors">Créer mon tableau personnalisé</a>
      </motion.div>
    </section>
  )
}

export default Personnalisation