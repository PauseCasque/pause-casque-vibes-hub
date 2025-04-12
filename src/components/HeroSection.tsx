
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Headphones, Gift } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  hasButtons?: boolean;
  backgroundClass?: string;
  centered?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  hasButtons = true,
  backgroundClass = "hero-gradient",
  centered = false,
}: HeroProps) => {
  return (
    <section
      className={`py-24 ${backgroundClass} min-h-[70vh] flex items-center`}
    >
      <div className="container">
        <div className={`max-w-3xl mx-auto ${centered ? "text-center" : ""}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            {subtitle}
          </p>
          
          {hasButtons && (
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/episodes">
                  <Headphones size={18} />
                  Découvrir les épisodes
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/soutenir">
                  <Gift size={18} />
                  Soutenir le projet
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
