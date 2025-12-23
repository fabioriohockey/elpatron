import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Minus, Plus, ArrowLeft, Droplets } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { ProductCard } from '@/components/products/ProductCard';

const Produto = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleFavorite, isFavorite } = useCart();

  // Find product by ID (in the future this will come from MySQL)
  const product = products.find((p) => p.id === id) || products[0];
  const favorite = isFavorite(product.id);

  // Related products (same category)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: 'Adicionado ao carrinho',
      description: `${quantity}x ${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    toast({
      title: favorite ? 'Removido dos favoritos' : 'Adicionado aos favoritos',
      description: `${product.name} foi ${favorite ? 'removido dos' : 'adicionado aos'} seus favoritos.`,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
      <Helmet>
        <title>{product.name} - {product.brand} | Essência</title>
        <meta
          name="description"
          content={`${product.name} por ${product.brand}. ${product.description}`}
        />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Catálogo
            </Link>
          </motion.div>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              {discount > 0 && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded">
                  -{discount}%
                </div>
              )}
              <div className="aspect-square rounded-2xl bg-secondary border border-border overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnail Gallery Placeholder */}
              <div className="flex gap-3 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-20 h-20 rounded-lg bg-secondary border ${
                      i === 1 ? 'border-primary' : 'border-border'
                    } cursor-pointer hover:border-primary/50 transition-colors overflow-hidden`}
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              {/* Brand */}
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
                {product.brand}
              </p>

              {/* Name */}
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-primary text-primary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-foreground font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} avaliações)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-foreground mb-3">Tamanho</p>
                <div className="flex gap-3">
                  {['30ml', '50ml', '100ml'].map((size) => (
                    <button
                      key={size}
                      className={`px-6 py-3 rounded-lg border transition-all ${
                        size === product.size
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-foreground mb-3">Quantidade</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-12 w-12 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-xl font-semibold text-foreground w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-12 w-12 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-10">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 text-base"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button
                  onClick={handleToggleFavorite}
                  size="lg"
                  variant="outline"
                  className={`h-14 w-14 border-border ${
                    favorite
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'hover:border-primary hover:text-primary'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorite ? 'fill-primary' : ''}`} />
                </Button>
              </div>

              {/* Fragrance Notes */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Droplets className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Pirâmide Olfativa
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Notas de Topo
                    </p>
                    <ul className="space-y-1">
                      {product.notes.top.map((note) => (
                        <li key={note} className="text-foreground text-sm">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Notas de Coração
                    </p>
                    <ul className="space-y-1">
                      {product.notes.heart.map((note) => (
                        <li key={note} className="text-foreground text-sm">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Notas de Base
                    </p>
                    <ul className="space-y-1">
                      {product.notes.base.map((note) => (
                        <li key={note} className="text-foreground text-sm">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Produtos <span className="text-gradient-gold">Relacionados</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Produto;
