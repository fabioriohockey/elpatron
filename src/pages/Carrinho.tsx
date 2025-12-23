import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Carrinho = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    toast({
      title: 'Processando pedido...',
      description: 'Você será redirecionado para o pagamento.',
    });
    // Here you would integrate with a payment gateway
  };

  return (
    <>
      <Helmet>
        <title>Carrinho de Compras | Essência</title>
        <meta
          name="description"
          content="Finalize sua compra de perfumes premium na Essência."
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
              <ShoppingBag className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Seu <span className="text-gradient-gold">Carrinho</span>
            </motion.h1>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 rounded-lg bg-secondary overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.brand}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.size}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold text-foreground w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="text-right flex flex-col justify-between">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors self-end"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <p className="font-bold text-primary text-lg">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:sticky lg:top-32 h-fit"
              >
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                    Resumo do Pedido
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">
                        R$ {cartTotal.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="text-foreground">Grátis</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold text-foreground">Total</span>
                        <span className="font-bold text-primary text-xl">
                          R$ {cartTotal.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Finalizar Compra
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Pagamento seguro com criptografia SSL
                  </p>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center mx-auto mb-8">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Carrinho vazio
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Você ainda não adicionou nenhum produto ao carrinho. 
                Explore nosso catálogo e encontre sua fragrância ideal.
              </p>
              <Link to="/catalogo">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explorar Catálogo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Carrinho;
