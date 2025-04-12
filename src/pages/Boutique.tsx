
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import ShopItem from "@/components/ShopItem";
import { products } from "@/data/products";

const Boutique = () => {
  return (
    <Layout>
      <HeroSection
        title="Notre boutique"
        subtitle="Soutenez le podcast en portant nos couleurs. Tous nos produits sont fabriqués de manière éthique et responsable."
        hasButtons={false}
      />

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">T-shirts</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ShopItem key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 bg-primary-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Informations sur nos produits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-2">Matériaux et fabrication</h4>
                <p className="text-gray-700">
                  Nos t-shirts sont fabriqués à partir de 100% coton biologique certifié GOTS. 
                  Nous travaillons avec des ateliers français et européens pour garantir des 
                  conditions de travail équitables.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Livraison et retours</h4>
                <p className="text-gray-700">
                  Livraison en 3-5 jours ouvrés en France métropolitaine.
                  Frais de port offerts à partir de 50€ d'achat.
                  Retours gratuits sous 14 jours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Boutique;
