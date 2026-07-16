export interface Tableau {
  id: number
  nom: string
  categorie: string
  image: string
}

export const tableaux: Tableau[] = [
  { id: 1, nom: 'Éclat Doré', categorie: 'Moderne', image: '/images/tableau-1.jpg' },
  { id: 2, nom: 'Reflet Miroir', categorie: 'Miroir', image: '/images/tableau-2.jpg' },
  { id: 3, nom: 'Texture Sable', categorie: 'Texture', image: '/images/tableau-3.jpg' },
  { id: 4, nom: 'Lumière LED', categorie: 'LED', image: '/images/tableau-4.jpg' },
  { id: 5, nom: 'Vague Relief', categorie: 'Moderne', image: '/images/tableau-5.jpg' },
  { id: 6, nom: 'Sur Mesure Or', categorie: 'Personnalisé', image: '/images/tableau-6.jpg' },
]