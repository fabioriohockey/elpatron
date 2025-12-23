import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const QuizBanner: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-noir-light via-card to-secondary border border-primary/20"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Quiz Interativo</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Descubra seu <span className="text-gradient-gold">Perfume Ideal</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                Responda algumas perguntas sobre suas preferências e 
                receba recomendações personalizadas de fragrâncias 
                que combinam com você.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Iniciar Quiz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl md:text-7xl mb-2">✨</div>
                      <p className="text-sm font-medium text-muted-foreground">5 perguntas</p>
                      <p className="text-sm font-medium text-muted-foreground">2 minutos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
