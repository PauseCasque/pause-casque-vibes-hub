
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Music, Youtube, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-100 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/lovable-uploads/f1853432-6e4c-4915-b01a-a740516cc2c7.png"
                alt="Pause Casque Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-xl">PAUSE CASQUE</span>
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Un podcast qui rend les sujets passionnants accessibles aux jeunes et favorise le dialogue entre générations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Sections</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link to="/episodes" className="text-gray-600 hover:text-primary transition-colors">
                Épisodes
              </Link>
              <Link to="/concept" className="text-gray-600 hover:text-primary transition-colors">
                Concept
              </Link>
              <Link to="/boutique" className="text-gray-600 hover:text-primary transition-colors">
                Boutique
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Thèmes</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/episodes?theme=science" className="text-gray-600 hover:text-primary transition-colors">
                Science
              </Link>
              <Link to="/episodes?theme=business" className="text-gray-600 hover:text-primary transition-colors">
                Business
              </Link>
              <Link to="/episodes?theme=sport" className="text-gray-600 hover:text-primary transition-colors">
                Sport
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover-scale">
                <Instagram size={20} className="text-primary" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover-scale">
                <Music size={20} className="text-primary" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover-scale">
                <Youtube size={20} className="text-primary" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover-scale">
                <Twitter size={20} className="text-primary" />
              </a>
            </div>
            <Link to="/contact" className="text-primary flex items-center gap-2 hover:underline">
              <Mail size={16} />
              <span>Contactez-nous</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Pause Casque. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
