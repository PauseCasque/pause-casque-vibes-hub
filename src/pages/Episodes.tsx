
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import EpisodeCard from "@/components/EpisodeCard";
import ThemeFilter from "@/components/ThemeFilter";
import { episodes } from "@/data/episodes";
import { useSearchParams } from "react-router-dom";
import { sendPodcast } from "@/services/podcastService";
import { Episode } from "@/components/EpisodeCard";

const Episodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    sendPodcast().then(setEpisodes);
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Tous les épisodes"
        subtitle="Explorez notre collection d'épisodes couvrant des sujets passionnants."
        hasButtons={false}
        
      />

      <section className="py-16 bg-white">
        <div className="container">
          {episodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode) => (
                <EpisodeCard episode={episode} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">Aucun épisode trouvé</h3>
              <p className="text-gray-600">
                Les épisodes seront bientôt disponibles. Restez à l'écoute !
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Episodes;