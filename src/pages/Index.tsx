import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { PromotionsSection } from '@/components/home/PromotionsSection';
import { QuizBanner } from '@/components/home/QuizBanner';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Essência - Perfumes Premium | Descubra Fragrâncias Exclusivas</title>
        <meta
          name="description"
          content="Explore nossa coleção de perfumes premium. Fragrâncias exclusivas femininas, masculinas e unissex. Descubra o perfume ideal com nosso quiz interativo."
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <PromotionsSection />
        <QuizBanner />
      </Layout>
    </>
  );
};

export default Index;
