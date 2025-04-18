
import React from "react";
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { sendPodcast } from "@/services/podcastService";

export interface Episode {
  title: string;
  description: string;
  imageUrl: string;
  pubDate: string;
  audioUrl: string;
}

interface EpisodeCardProps {
  episode: Episode;
  featured?: boolean;
}

const EpisodeCard = ({ episode, featured = false }: EpisodeCardProps) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    sendPodcast().then(setEpisodes);
  }, []);


  return (
    <div 
      className={`group rounded-2xl h-[79vh] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all bg-white ${
        featured ? "md:grid md:grid-cols-2 gap-6" : ""
      }`}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={episode.imageUrl}
          alt={` ${episode.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20">
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            {/* <Badge className={themeColors[episode.theme]}>
              {episode.theme.charAt(0).toUpperCase() + episode.theme.slice(1)}
            </Badge> */}
            <div className="flex items-center text-white text-sm gap-1">
              <Clock size={14} />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col h-[45vh]">
        <div className="mb-2">
          <p className="text-sm text-gray-500 mb-1">{episode.pubDate}</p>
          <h3 className={`font-bold ${featured ? "text-2xl" : "text-xl"} mb-3`}>{episode.title}</h3>
          <div
  className="text-gray-600 mb-6 line-clamp-3"
  dangerouslySetInnerHTML={{ __html: episode.description }}
/>
        </div>

        <div className="mt-auto flex gap-3">
          <Button asChild className="gap-2 flex-1" variant="default">
            <a href={episode.audioUrl} target="_blank" rel="noopener noreferrer">
              <Play size={16} />
              Écouter
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            {/* <Link to={`/episodes/${episode.id}`}>
              En savoir plus
            </Link> */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
