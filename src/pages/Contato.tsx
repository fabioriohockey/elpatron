import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '(11) 99999-9999',
    description: 'Seg a Sex, 9h às 18h',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'contato@essencia.com.br',
    description: 'Resposta em até 24h',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    value: 'Av. Paulista, 1000',
    description: 'São Paulo, SP',
  },
  {
    icon: Clock,
    title: 'Horário',
    value: 'Seg a Sáb',
    description: '10h às 22h',
  },
];

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contato em breve.',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Contato | Essência - Perfumes Premium</title>
        <meta
          name="description"
          content="Entre em contato com a Essência. Estamos prontos para ajudá-lo a encontrar o perfume perfeito."
        />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Fale Conosco</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Entre em <span className="text-gradient-gold">Contato</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Tem alguma dúvida ou sugestão? Estamos aqui para ajudar. 
              Entre em contato conosco através de qualquer um dos nossos canais.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Envie uma mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-secondary border-border focus:border-primary"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-secondary border-border focus:border-primary"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Assunto
                    </label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="bg-secondary border-border focus:border-primary"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-secondary border-border focus:border-primary resize-none"
                      placeholder="Sua mensagem..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12"
                  >
                    {isLoading ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl group hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-primary font-medium">{info.value}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="aspect-video rounded-xl bg-secondary border border-border overflow-hidden relative"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Mapa</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contato;
