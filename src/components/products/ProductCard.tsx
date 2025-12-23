import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const favorite = isFavorite(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Adicionado ao carrinho',
      description: `${product.name} foi adicionado ao seu carrinho.`,
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(45_70%_50%/0.15)]"
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
          -{discount}%
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground"
      >
        <Heart
          className={`h-4 w-4 transition-all ${
            favorite ? 'fill-primary text-primary' : ''
          }`}
        />
      </button>

      {/* Image */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Quick Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1 }}
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="text-sm font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
