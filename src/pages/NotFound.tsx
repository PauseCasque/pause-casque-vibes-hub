
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout hideFooter>
      <div className="min-h-screen flex items-center justify-center bg-primary-100">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page non trouvée</h2>
          <p className="text-lg text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home size={18} />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
