import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';

const Favoritos = () => {
  const { favorites } = useCart();

  return (
    <>
      <Helmet>
        <title>Meus Favoritos | Essência</title>
        <meta
          name="description"
          content="Veja sua lista de perfumes favoritos e encontre ofertas especiais."
        />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6"
            >
              <Heart className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Meus <span className="text-gradient-gold">Favoritos</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              {favorites.length > 0
                ? 'Seus perfumes salvos para comprar depois.'
                : 'Você ainda não adicionou nenhum perfume aos favoritos.'}
            </motion.p>
          </div>

          {/* Favorites Grid */}
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center mx-auto mb-8">
                <Heart className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Lista vazia
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Explore nosso catálogo e adicione seus perfumes favoritos 
                clicando no coração em cada produto.
              </p>
              <Link to="/catalogo">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Explorar Catálogo
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Favoritos;
