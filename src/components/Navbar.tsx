import { useState } from 'react'
import { motion } from 'framer-motion'
import { getWhatsappLink } from '../lib/whatsapp'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Nos créations', href: '#creations' },
  { label: 'Personnalisation', href: '#personnalisation' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const commanderLink = getWhatsappLink('Bonjour, je souhaite créer un tableau personnalisé.')

  return (
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="sticky top-0 z-50 bg-creme/95 backdrop-blur-sm border-b border-sand">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#accueil" className="text-xl md:text-2xl font-serif text-burgundy tracking-wide">Atelier Miyamo</a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-burgundy/80 hover:text-burgundy transition-colors">{link.label}</a>
            </li>
          ))}
        </ul>

        <a href={commanderLink} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-burgundy text-creme text-sm px-5 py-2.5 rounded-full hover:bg-burgundy/90 transition-colors">Commander votre création</a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-burgundy text-2xl" aria-label="Menu">{open ? '✕' : '☰'}</button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="md:hidden bg-creme border-t border-sand px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-burgundy/80 py-2">{link.label}</a>
          ))}
          <a href={commanderLink} target="_blank" rel="noopener noreferrer" className="bg-burgundy text-creme text-center py-2.5 rounded-full">Commander votre création</a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar