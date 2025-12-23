import { Product } from '@/contexts/CartContext';

export const categories = [
  { id: 'feminino', name: 'Feminino', icon: '✨' },
  { id: 'masculino', name: 'Masculino', icon: '🖤' },
  { id: 'unissex', name: 'Unissex', icon: '💫' },
  { id: 'arabes', name: 'Árabes', icon: '🌙' },
  { id: 'niche', name: 'Nicho', icon: '💎' },
  { id: 'promocao', name: 'Promoções', icon: '🔥' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Noir Absolu',
    brand: 'Maison Élégance',
    price: 459.90,
    originalPrice: 549.90,
    image: '/placeholder.svg',
    category: 'feminino',
    description: 'Uma fragrância intensa e sedutora que combina notas orientais com toques florais sofisticados. Perfeita para noites especiais.',
    notes: {
      top: ['Bergamota', 'Rosa Negra'],
      heart: ['Oud', 'Jasmim'],
      base: ['Âmbar', 'Almíscar'],
    },
    size: '100ml',
    rating: 4.8,
    reviews: 324,
  },
  {
    id: '2',
    name: 'Golden Mist',
    brand: 'Aureum',
    price: 389.90,
    image: '/placeholder.svg',
    category: 'feminino',
    description: 'Delicada e envolvente, esta fragrância evoca a elegância atemporal com suas notas florais e amadeiradas.',
    notes: {
      top: ['Pêra', 'Flor de Laranjeira'],
      heart: ['Peônia', 'Rosa'],
      base: ['Sândalo', 'Vanilla'],
    },
    size: '50ml',
    rating: 4.6,
    reviews: 189,
  },
  {
    id: '3',
    name: 'Homme Intense',
    brand: 'Noir Collection',
    price: 529.90,
    image: '/placeholder.svg',
    category: 'masculino',
    description: 'Poderoso e marcante, ideal para homens que desejam deixar uma impressão duradoura.',
    notes: {
      top: ['Cardamomo', 'Pimenta Rosa'],
      heart: ['Íris', 'Lavanda'],
      base: ['Couro', 'Vetiver'],
    },
    size: '100ml',
    rating: 4.9,
    reviews: 456,
  },
  {
    id: '4',
    name: 'Desert Oud',
    brand: 'Al-Majid',
    price: 789.90,
    originalPrice: 899.90,
    image: '/placeholder.svg',
    category: 'arabes',
    description: 'Uma obra-prima da perfumaria árabe, com oud autêntico e especiarias exóticas.',
    notes: {
      top: ['Açafrão', 'Canela'],
      heart: ['Oud Cambojano', 'Rosa Damascena'],
      base: ['Âmbar Cinzento', 'Madeira de Sândalo'],
    },
    size: '75ml',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '5',
    name: 'Velvet Night',
    brand: 'Exclusive Niche',
    price: 1299.90,
    image: '/placeholder.svg',
    category: 'niche',
    description: 'Exclusividade em cada gota. Uma criação artesanal para os verdadeiros conhecedores.',
    notes: {
      top: ['Bergamota da Calábria', 'Elemi'],
      heart: ['Absoluto de Tuberosa', 'Ylang-Ylang'],
      base: ['Benjoim', 'Musgo de Carvalho'],
    },
    size: '50ml',
    rating: 5.0,
    reviews: 89,
  },
  {
    id: '6',
    name: 'Aurora',
    brand: 'Lumière',
    price: 299.90,
    originalPrice: 399.90,
    image: '/placeholder.svg',
    category: 'unissex',
    description: 'Fresco e luminoso, perfeito para o dia a dia com sua personalidade versátil.',
    notes: {
      top: ['Limão Siciliano', 'Toranja'],
      heart: ['Chá Branco', 'Magnólia'],
      base: ['Cedro', 'Almíscar Branco'],
    },
    size: '100ml',
    rating: 4.5,
    reviews: 412,
  },
  {
    id: '7',
    name: 'Mystique Rose',
    brand: 'Maison Élégance',
    price: 479.90,
    image: '/placeholder.svg',
    category: 'feminino',
    description: 'Uma rosa reinventada com toques modernos e sofisticados.',
    notes: {
      top: ['Rosa Centifolia', 'Framboesa'],
      heart: ['Rosa Turca', 'Peônia'],
      base: ['Patchouli', 'Musgo'],
    },
    size: '75ml',
    rating: 4.7,
    reviews: 234,
  },
  {
    id: '8',
    name: 'Tobacco & Vanilla',
    brand: 'Noir Collection',
    price: 599.90,
    image: '/placeholder.svg',
    category: 'masculino',
    description: 'Quente e envolvente, uma combinação clássica para o homem contemporâneo.',
    notes: {
      top: ['Tabaco', 'Canela'],
      heart: ['Mel', 'Cacau'],
      base: ['Vanilla', 'Tonka'],
    },
    size: '100ml',
    rating: 4.8,
    reviews: 378,
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === 'promocao') {
    return products.filter((p) => p.originalPrice);
  }
  return products.filter((p) => p.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getPromotions = (): Product[] => {
  return products.filter((p) => p.originalPrice);
};
