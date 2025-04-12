
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import EpisodeCard from "@/components/EpisodeCard";
import { episodes } from "@/data/episodes";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, ShoppingBag, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Get the featured episode (the first one in our data)
  const featuredEpisode = episodes[0];
  // Get the next 3 episodes
  const recentEpisodes = episodes.slice(1, 4);

  return (
    <Layout>
      <HeroSection
        title="Pause Casque, le podcast qui enrichit vos connaissances"
        subtitle="Rejoignez-nous pour des conversations inspirantes autour de la science, du business et du sport. Des invités exceptionnels partagent leur expertise pour rendre ces sujets accessibles à tous."
      />

      {/* Featured Episode */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Épisode à la une</h2>
              <p className="text-gray-600">Notre dernier épisode à ne pas manquer.</p>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/episodes">
                Voir tous les épisodes
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <EpisodeCard episode={featuredEpisode} featured />

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Link 
              to="/episodes" 
              className="bg-primary-100 rounded-xl p-6 flex items-center gap-4 hover:bg-primary-200 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                <Headphones size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Écouter</h3>
                <p className="text-gray-600">Découvrez tous nos épisodes</p>
              </div>
            </Link>

            <Link 
              to="/boutique" 
              className="bg-primary-100 rounded-xl p-6 flex items-center gap-4 hover:bg-primary-200 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Boutique</h3>
                <p className="text-gray-600">T-shirts et merchandising</p>
              </div>
            </Link>

            <Link 
              to="/soutenir" 
              className="bg-primary-100 rounded-xl p-6 flex items-center gap-4 hover:bg-primary-200 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                <Gift size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Soutenir</h3>
                <p className="text-gray-600">Contribuer au projet</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Episodes */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Épisodes récents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/episodes">Voir tous les épisodes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-lg text-gray-600">
              Pause Casque est né d'une passion pour le partage de connaissances et l'échange entre générations. 
              Notre objectif est de rendre des sujets complexes accessibles à tous, en particulier aux jeunes,
              à travers des conversations authentiques avec des experts passionnés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 9h1"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Science</h3>
              <p className="text-gray-600">
                Du cosmos à la biologie, nous démystifions la science moderne pour éveiller la curiosité.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10h4a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-4"/><path d="M12 4a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2z"/><path d="M18 16l4 0"/><path d="M8 8h-5a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h5"/></svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Business</h3>
              <p className="text-gray-600">
                Entrepreneurs et experts partagent leurs parcours et insights sur le monde économique actuel.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-4"/><path d="M5 10l-2 -1"/><path d="M21 10l-2 -1"/><path d="M5 18l-2 1"/><path d="M21 18l-2 1"/><path d="M8 18a4 4 0 0 1 8 0"/><path d="M10 7.5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M16 7a4 4 0 0 0 -8 0"/></svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Sport</h3>
              <p className="text-gray-600">
                Performance, mentalité et innovation sportive expliquées par ceux qui les vivent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
