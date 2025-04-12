
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import DonationCard from "@/components/DonationCard";
import { supportOptions } from "@/data/supportOptions";
import { Button } from "@/components/ui/button";

const Soutenir = () => {
  return (
    <Layout>
      <HeroSection
        title="Soutenez Pause Casque"
        subtitle="Contribuez à faire vivre le podcast et aidez-nous à produire des épisodes de qualité."
        hasButtons={false}
      />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Pourquoi nous soutenir ?</h2>
            <p className="text-lg text-gray-700">
              Pause Casque est une aventure indépendante qui nécessite du temps, de l'équipement et des ressources
              pour continuer à produire des épisodes de qualité. Votre soutien nous permet de :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary-100 p-6 rounded-xl text-center">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19 5h-7l-2-3h-5c-1.1 0-2 .9-2 2v16"/><path d="M3 9h17.8c.7 0 1.2.7 1 1.3l-3.6 8c-.1.3-.4.5-.8.5h-11v-8.5"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Investir dans du matériel</h3>
              <p className="text-gray-700">
                Pour améliorer constamment la qualité audio et visuelle de nos productions.
              </p>
            </div>

            <div className="bg-primary-100 p-6 rounded-xl text-center">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Développer du contenu</h3>
              <p className="text-gray-700">
                Davantage d'épisodes, de formats et d'invités exceptionnels.
              </p>
            </div>

            <div className="bg-primary-100 p-6 rounded-xl text-center">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8 20V8c0-2.2 1.8-4 4-4c1.5 0 2.8.8 3.5 2"/><path d="M6 12h4"/><path d="M14 12h2c1.7 0 3 1.3 3 3s-1.3 3-3 3h-2"/><path d="M14 18v-9"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Rester indépendants</h3>
              <p className="text-gray-700">
                Préserver notre liberté éditoriale et continuer à créer du contenu authentique.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Choisissez votre contribution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option) => (
              <DonationCard key={option.id} option={option} />
            ))}
          </div>

          <div className="bg-gray-100 p-8 rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Contribution libre</h3>
              <p className="text-gray-700 mb-6">
                Vous souhaitez nous soutenir avec un montant personnalisé? C'est possible!
              </p>
              <Button className="px-8">Faire un don libre</Button>
            </div>

            <div className="border-t border-gray-300 pt-8 mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">Nos supporters</h3>
              
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="h-10 w-10 bg-primary-200 rounded-full flex items-center justify-center text-primary font-semibold">
                    {String.fromCharCode(65 + i % 26)}
                  </div>
                ))}
                <div className="h-10 px-3 bg-primary-200 rounded-full flex items-center justify-center text-primary font-semibold">
                  +124
                </div>
              </div>
              
              <p className="text-center text-gray-600 italic mt-6">
                Merci à tous nos supporters qui rendent cette aventure possible!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Soutenir;
