
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import { Headphones, Users, Zap } from "lucide-react";

const Concept = () => {
  return (
    <Layout>
      <HeroSection
        title="Le concept Pause Casque"
        subtitle="Découvrez l'histoire et la mission derrière notre podcast."
        hasButtons={false}
      />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
            <p className="text-lg text-gray-700 mb-8">
              Pause Casque est né d'une simple observation : les jeunes générations et leurs aînés ont beaucoup à apprendre les uns des autres, 
              mais les ponts entre eux sont rares. Notre fondateur, passionné de vulgarisation et de partage de connaissances, a eu l'idée
              de créer un espace d'échange accessible à tous.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Le nom "Pause Casque" symbolise ce moment où l'on s'arrête, on met son casque, et on s'immerge dans une conversation enrichissante.
              C'est une pause dans le tumulte quotidien pour nourrir son esprit et sa curiosité.
            </p>
            <p className="text-lg text-gray-700">
              Depuis notre premier épisode en 2023, nous avons reçu des invités exceptionnels et constitué une communauté engagée autour de valeurs
              communes : la curiosité intellectuelle, le partage de connaissances et le dialogue intergénérationnel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
            <p className="text-lg text-gray-700">
              Rendre des sujets complexes accessibles à tous à travers des conversations authentiques et inspirantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-16 w-16 rounded-full bg-primary-200 flex items-center justify-center text-primary mb-6">
                <Headphones size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Vulgarisation</h3>
              <p className="text-gray-600">
                Expliquer des concepts complexes de façon claire et accessible, sans simplifier à l'extrême.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-16 w-16 rounded-full bg-primary-200 flex items-center justify-center text-primary mb-6">
                <Users size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Dialogue</h3>
              <p className="text-gray-600">
                Créer des ponts entre les générations en favorisant l'échange et le partage d'expériences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-16 w-16 rounded-full bg-primary-200 flex items-center justify-center text-primary mb-6">
                <Zap size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Inspiration</h3>
              <p className="text-gray-600">
                Offrir des exemples concrets et des témoignages inspirants pour motiver nos auditeurs à agir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">L'équipe</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1740&auto=format&fit=crop" 
                    alt="Marc Dupont" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Marc Dupont</h3>
                <p className="text-primary mb-2">Fondateur & Animateur</p>
                <p className="text-gray-600">
                  Passionné de vulgarisation et entrepreneur, Marc a créé Pause Casque pour partager sa curiosité intellectuelle.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" 
                    alt="Sophie Martin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Sophie Martin</h3>
                <p className="text-primary mb-2">Co-animatrice & Production</p>
                <p className="text-gray-600">
                  Journaliste de formation, Sophie apporte sa rigueur et son sens de l'interview pour des conversations toujours pertinentes.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-lg text-gray-700">
              "Notre ambition est de créer un espace où la curiosité et la bienveillance permettent d'aborder tous les sujets,
              même les plus complexes, de manière accessible et inspirante."
              <footer className="text-right mt-2 text-base font-medium">— Marc Dupont, Fondateur</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Concept;
