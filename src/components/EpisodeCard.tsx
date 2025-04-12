
import React from "react";
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface Episode {
  id: string;
  title: string;
  description: string;
  image: string;
  theme: "science" | "business" | "sport";
  duration: string;
  date: string;
  guest: string;
  spotifyLink: string;
}

interface EpisodeCardProps {
  episode: Episode;
  featured?: boolean;
}

const EpisodeCard = ({ episode, featured = false }: EpisodeCardProps) => {
  const themeColors = {
    science: "bg-blue-100 text-blue-800",
    business: "bg-green-100 text-green-800",
    sport: "bg-orange-100 text-orange-800",
  };

  return (
    <div 
      className={`group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all bg-white ${
        featured ? "md:grid md:grid-cols-2 gap-6" : ""
      }`}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={episode.image}
          alt={`${episode.guest} - ${episode.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20">
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <Badge className={themeColors[episode.theme]}>
              {episode.theme.charAt(0).toUpperCase() + episode.theme.slice(1)}
            </Badge>
            <div className="flex items-center text-white text-sm gap-1">
              <Clock size={14} />
              <span>{episode.duration}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col">
        <div className="mb-2">
          <p className="text-sm text-gray-500 mb-1">{episode.date} · {episode.guest}</p>
          <h3 className={`font-bold ${featured ? "text-2xl" : "text-xl"} mb-3`}>{episode.title}</h3>
          <p className="text-gray-600 mb-6 line-clamp-3">{episode.description}</p>
        </div>

        <div className="mt-auto flex gap-3">
          <Button asChild className="gap-2 flex-1" variant="default">
            <a href={episode.spotifyLink} target="_blank" rel="noopener noreferrer">
              <Play size={16} />
              Écouter
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/episodes/${episode.id}`}>
              En savoir plus
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
