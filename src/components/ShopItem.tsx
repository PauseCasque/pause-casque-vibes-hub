
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

interface ShopItemProps {
  product: Product;
}

const ShopItem = ({ product }: ShopItemProps) => {
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 bg-white">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white px-3 py-1 rounded-full font-medium text-sm">
              Rupture de stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-primary font-semibold mt-1">{product.price.toFixed(2)} €</p>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
        
        <Button 
          className="w-full mt-4 gap-2" 
          disabled={!product.available}
        >
          <ShoppingCart size={16} />
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
};

export default ShopItem;
