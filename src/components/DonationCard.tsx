
import React from "react";
import { Button } from "@/components/ui/button";
import { Coffee, Heart, Star, Award } from "lucide-react";

interface DonationOption {
  id: string;
  name: string;
  amount: number;
  description: string;
  icon: string;
}

interface DonationCardProps {
  option: DonationOption;
}

const DonationCard = ({ option }: DonationCardProps) => {
  // Map icon strings to icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Coffee":
        return <Coffee />;
      case "Heart":
        return <Heart />;
      case "Star":
        return <Star />;
      case "Award":
        return <Award />;
      default:
        return <Heart />;
    }
  };

  return (
    <div className="flex flex-col border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary">
          {getIcon(option.icon)}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{option.name}</h3>
          <p className="text-primary font-medium">{option.amount} €</p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">{option.description}</p>
      
      <Button className="mt-auto">Faire un don</Button>
    </div>
  );
};

export default DonationCard;
