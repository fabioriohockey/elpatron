import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">
              ESSÊNCIA
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Descubra fragrâncias exclusivas que expressam sua personalidade única. 
              Qualidade premium e elegância em cada gota.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-gold-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-gold-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-gold-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {['Catálogo', 'Quiz de Perfumes', 'Promoções', 'Novidades', 'Sobre Nós'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Categorias
            </h4>
            <ul className="space-y-3">
              {['Femininos', 'Masculinos', 'Unissex', 'Árabes', 'Nicho'].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>contato@essencia.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Essência. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
