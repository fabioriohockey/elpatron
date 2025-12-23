import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Explore por <span className="text-gradient-gold">Categoria</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Navegue por nossas categorias cuidadosamente selecionadas 
            e encontre a fragrância ideal para cada ocasião.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/catalogo?categoria=${category.id}`}
                className="group block bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(45_70%_50%/0.1)]"
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
