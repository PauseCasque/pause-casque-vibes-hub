
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, ArrowLeft } from "lucide-react";
import { episodes } from "@/data/episodes";
import { Episode } from "@/components/EpisodeCard";
import { useNavigate } from "react-router-dom";

const EpisodeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState<Episode | null>(null);
  
  useEffect(() => {
    const foundEpisode = episodes.find(ep => ep.id === id);
    
    if (foundEpisode) {
      setEpisode(foundEpisode);
    } else {
      // Redirect to episodes page if episode not found
      navigate("/episodes");
    }
  }, [id, navigate]);

  if (!episode) {
    return (
      <Layout>
        <div className="container py-20">
          <p>Chargement...</p>
        </div>
      </Layout>
    );
  }

  const themeColors = {
    science: "bg-blue-100 text-blue-800",
    business: "bg-green-100 text-green-800",
    sport: "bg-orange-100 text-orange-800",
  };

  const relatedEpisodes = episodes
    .filter(ep => ep.theme === episode.theme && ep.id !== episode.id)
    .slice(0, 2);

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-primary-100">
        <div className="container">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/episodes" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Retour aux épisodes
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className={themeColors[episode.theme as keyof typeof themeColors]}>
                {episode.theme.charAt(0).toUpperCase() + episode.theme.slice(1)}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                {episode.title}
              </h1>
              
              <div className="flex items-center gap-2 mb-4 text-gray-600">
                <span>{episode.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{episode.duration}</span>
                </div>
              </div>
              
              <p className="text-lg mb-6 text-gray-700">
                Invité(e): <strong>{episode.guest}</strong>
              </p>
              
              <Button asChild size="lg" className="gap-2 mb-4">
                <a href={episode.spotifyLink} target="_blank" rel="noopener noreferrer">
                  <Play size={18} />
                  Écouter sur Spotify
                </a>
              </Button>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={episode.image} 
                alt={episode.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">À propos de cet épisode</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {episode.description}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at magna vel libero congue fringilla. Praesent luctus, neque in dignissim accumsan, velit nunc consequat elit, at pharetra mi mi nec risus. Donec fringilla felis at ante vestibulum condimentum. Vivamus consequat tellus non diam fermentum, vel lobortis sapien convallis.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Suspendisse potenti. Nullam consectetur bibendum bibendum. Vestibulum commodo ligula vel urna hendrerit finibus. Integer vel arcu vel mi semper accumsan. Etiam augue risus, ultrices ac eros ut, ullamcorper tempor risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </div>

      {relatedEpisodes.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Épisodes similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedEpisodes.map((relatedEp) => (
                <Link 
                  key={relatedEp.id}
                  to={`/episodes/${relatedEp.id}`} 
                  className="group flex gap-4 bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={relatedEp.image} 
                      alt={relatedEp.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold group-hover:text-primary transition-colors">{relatedEp.title}</h3>
                    <p className="text-gray-500 text-sm mb-1">{relatedEp.date} • {relatedEp.guest}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedEp.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default EpisodeDetail;
