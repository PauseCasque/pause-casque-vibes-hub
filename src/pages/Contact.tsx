
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Youtube, Spotify, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <HeroSection
        title="Contactez-nous"
        subtitle="Une question, une suggestion ou une proposition de collaboration? N'hésitez pas à nous écrire."
        hasButtons={false}
      />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Écrivez-nous</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <Input id="subject" placeholder="Sujet de votre message" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Votre message ici..." rows={6} />
                </div>

                <Button type="submit" size="lg">
                  Envoyer
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Retrouvez-nous</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                    >
                      <Twitter size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                    >
                      <Youtube size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                    >
                      <Spotify size={24} />
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Coordonnées</h3>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span>contact@pausecasque.fr</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary" size={20} />
                    <span>Paris, France</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">FAQ</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Comment proposer un invité ?</h4>
                      <p className="text-gray-600">
                        Envoyez-nous un email avec le nom, l'expertise et le contact de la personne que vous souhaitez nous recommander.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Où êtes-vous basés ?</h4>
                      <p className="text-gray-600">
                        Notre studio principal est à Paris, mais nous nous déplaçons pour certains enregistrements.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Proposez-vous des partenariats ?</h4>
                      <p className="text-gray-600">
                        Oui, nous sommes ouverts aux partenariats qui sont en accord avec nos valeurs.
                        Contactez-nous pour en discuter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
