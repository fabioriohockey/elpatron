import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, RotateCcw } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    emoji: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Qual estilo melhor te representa?',
    options: [
      { text: 'Romântico & Delicado', value: 'romantic', emoji: '🌸' },
      { text: 'Marcante & Intenso', value: 'intense', emoji: '🔥' },
      { text: 'Suave & Fresco', value: 'fresh', emoji: '🌊' },
      { text: 'Misterioso & Sofisticado', value: 'mysterious', emoji: '🌙' },
    ],
  },
  {
    id: 2,
    question: 'Em que ocasião você mais usaria o perfume?',
    options: [
      { text: 'Dia a dia & Trabalho', value: 'daily', emoji: '☀️' },
      { text: 'Noites especiais', value: 'night', emoji: '✨' },
      { text: 'Encontros românticos', value: 'romantic', emoji: '💕' },
      { text: 'Qualquer ocasião', value: 'versatile', emoji: '💫' },
    ],
  },
  {
    id: 3,
    question: 'Qual família olfativa te atrai mais?',
    options: [
      { text: 'Floral', value: 'floral', emoji: '🌹' },
      { text: 'Oriental & Amadeirado', value: 'oriental', emoji: '🪵' },
      { text: 'Cítrico & Fresco', value: 'citrus', emoji: '🍋' },
      { text: 'Doce & Gourmand', value: 'gourmand', emoji: '🍯' },
    ],
  },
  {
    id: 4,
    question: 'Qual intensidade você prefere?',
    options: [
      { text: 'Leve e sutil', value: 'light', emoji: '🌬️' },
      { text: 'Moderada', value: 'moderate', emoji: '⚡' },
      { text: 'Intensa e duradoura', value: 'intense', emoji: '💎' },
      { text: 'Depende do dia', value: 'varies', emoji: '🎭' },
    ],
  },
  {
    id: 5,
    question: 'Qual seu gênero de preferência?',
    options: [
      { text: 'Feminino', value: 'feminino', emoji: '👩' },
      { text: 'Masculino', value: 'masculino', emoji: '👨' },
      { text: 'Unissex', value: 'unissex', emoji: '⚧️' },
      { text: 'Sem preferência', value: 'all', emoji: '🌈' },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Get recommended products based on answers
  const getRecommendations = () => {
    const genderPreference = answers[4];
    let filtered = [...products];

    if (genderPreference && genderPreference !== 'all') {
      filtered = filtered.filter((p) => p.category === genderPreference);
    }

    // If no gender-specific products, return top rated from all
    if (filtered.length === 0) {
      filtered = [...products];
    }

    // Sort by rating and return top 3
    return filtered.sort((a, b) => b.rating - a.rating).slice(0, 3);
  };

  return (
    <>
      <Helmet>
        <title>Quiz de Perfumes - Descubra seu Perfume Ideal | Essência</title>
        <meta
          name="description"
          content="Responda nosso quiz interativo e descubra qual perfume combina perfeitamente com sua personalidade e estilo."
        />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8 min-h-[80vh]">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto"
              >
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      Pergunta {currentQuestion + 1} de {questions.length}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2 mb-8" />
                </div>

                {/* Question */}
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="text-center"
                >
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                    {questions[currentQuestion].question}
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {questions[currentQuestion].options.map((option) => (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option.value)}
                        className="p-6 bg-card border border-border rounded-xl text-left transition-all hover:border-primary/50 hover:shadow-[0_0_30px_hsl(45_70%_50%/0.1)] group"
                      >
                        <div className="text-3xl mb-3">{option.emoji}</div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {option.text}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Navigation */}
                {currentQuestion > 0 && (
                  <div className="mt-8 text-center">
                    <Button
                      variant="ghost"
                      onClick={goBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Voltar
                    </Button>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                {/* Results Header */}
                <div className="text-center mb-12">
                  <div className="text-6xl mb-6">✨</div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Suas <span className="text-gradient-gold">Recomendações</span>
                  </h1>
                  <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Baseado nas suas respostas, selecionamos os perfumes 
                    que mais combinam com sua personalidade.
                  </p>
                </div>

                {/* Recommended Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {getRecommendations().map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>

                {/* Actions */}
                <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={resetQuiz}
                    className="border-primary/50 text-foreground hover:bg-primary/10"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Refazer Quiz
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Ver Mais Opções
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Layout>
    </>
  );
};

export default Quiz;
