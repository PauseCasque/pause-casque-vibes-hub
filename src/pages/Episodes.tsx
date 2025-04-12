
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import EpisodeCard from "@/components/EpisodeCard";
import ThemeFilter from "@/components/ThemeFilter";
import { episodes } from "@/data/episodes";
import { useSearchParams } from "react-router-dom";

const Episodes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const themeParam = searchParams.get("theme");
  
  const [selectedTheme, setSelectedTheme] = useState<string | null>(themeParam);
  
  // Filter episodes by theme
  const filteredEpisodes = selectedTheme 
    ? episodes.filter(episode => episode.theme === selectedTheme)
    : episodes;

  // Update URL when theme changes
  const handleThemeChange = (theme: string | null) => {
    setSelectedTheme(theme);
    
    if (theme) {
      setSearchParams({ theme });
    } else {
      setSearchParams({});
    }
  };

  // Update state if URL changes
  useEffect(() => {
    setSelectedTheme(themeParam);
  }, [themeParam]);

  return (
    <Layout>
      <HeroSection
        title="Tous les épisodes"
        subtitle="Explorez notre collection d'épisodes couvrant des sujets passionnants dans les domaines de la science, du business et du sport."
        hasButtons={false}
      />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Filtrer par thème</h2>
            <ThemeFilter selectedTheme={selectedTheme} onThemeChange={handleThemeChange} />
          </div>

          {filteredEpisodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">Aucun épisode trouvé</h3>
              <p className="text-gray-600">
                Nous n'avons pas encore d'épisodes dans cette catégorie. Revenez bientôt !
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Episodes;
