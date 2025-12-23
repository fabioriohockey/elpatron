import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Catalogo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const activeCategory = searchParams.get('categoria') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      if (activeCategory === 'promocao') {
        filtered = filtered.filter((p) => p.originalPrice);
      } else {
        filtered = filtered.filter((p) => p.category === activeCategory);
      }
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, searchQuery, sortBy]);

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: categoryId });
    }
  };

  return (
    <>
      <Helmet>
        <title>Catálogo de Perfumes | Essência</title>
        <meta
          name="description"
          content="Explore nosso catálogo completo de perfumes premium. Femininos, masculinos, unissex, árabes e fragrâncias de nicho."
        />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Nosso <span className="text-gradient-gold">Catálogo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Explore nossa coleção completa de fragrâncias premium 
              e encontre a sua essência perfeita.
            </motion.p>
          </div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => handleCategoryClick('all')}
              className={
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'border-border text-foreground hover:border-primary hover:text-primary'
              }
            >
              Todos
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => handleCategoryClick(category.id)}
                className={
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'border-border text-foreground hover:border-primary hover:text-primary'
                }
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 p-4 bg-card rounded-lg border border-border"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar perfumes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-border focus:border-primary"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="featured">Destaques</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                  <option value="rating">Avaliação</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="hidden md:flex items-center gap-1 border border-border rounded-md p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <p className="text-muted-foreground text-sm mb-6">
            {filteredProducts.length} produto(s) encontrado(s)
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1'
              }`}
            >
              {filteredProducts.map((product, index) => (
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
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhum produto encontrado.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryClick('all');
                }}
                className="mt-4 border-primary/50 text-foreground hover:bg-primary/10"
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Catalogo;
