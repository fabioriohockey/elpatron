import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users, Truck, Shield } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const features = [
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Trabalhamos apenas com as melhores casas de perfumaria do mundo.',
  },
  {
    icon: Truck,
    title: 'Entrega Expressa',
    description: 'Frete grátis para todo o Brasil em compras acima de R$ 299.',
  },
  {
    icon: Shield,
    title: '100% Original',
    description: 'Garantia de autenticidade em todos os nossos produtos.',
  },
  {
    icon: Heart,
    title: 'Atendimento Premium',
    description: 'Consultores especializados para ajudar na sua escolha.',
  },
];

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Essência - Perfumes Premium</title>
        <meta
          name="description"
          content="Conheça a Essência, sua loja de perfumes premium. Fragrâncias exclusivas com garantia de autenticidade."
        />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Nossa História</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Sobre a <span className="text-gradient-gold">Essência</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Desde 2015, a Essência tem sido sinônimo de elegância e sofisticação 
              no mundo dos perfumes. Nascemos com a missão de trazer as melhores 
              fragrâncias do mundo para você.
            </motion.p>
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">💎</div>
                    <p className="text-muted-foreground">Imagem da Loja</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Uma Paixão por <span className="text-gradient-gold">Fragrâncias</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Essência nasceu do amor pela arte da perfumaria. Nossa fundadora, 
                  após anos trabalhando com as principais maisons francesas, decidiu 
                  trazer essa experiência única para o Brasil.
                </p>
                <p>
                  Acreditamos que cada pessoa merece encontrar a fragrância que 
                  expressa sua verdadeira essência. Por isso, oferecemos uma 
                  curadoria cuidadosa das melhores perfumarias do mundo.
                </p>
                <p>
                  Com mais de 500 fragrâncias em nosso catálogo e 50 mil clientes 
                  satisfeitos, continuamos nossa missão de democratizar o acesso 
                  a perfumes de alta qualidade.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { value: '500+', label: 'Fragrâncias' },
              { value: '50K+', label: 'Clientes' },
              { value: '9 anos', label: 'de Mercado' },
              { value: '4.9★', label: 'Avaliação' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Por que escolher a <span className="text-gradient-gold">Essência</span>?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center group hover:border-primary/50 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export default Sobre;
