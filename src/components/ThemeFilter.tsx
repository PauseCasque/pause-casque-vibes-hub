
import React from "react";
import { Button } from "@/components/ui/button";

interface ThemeFilterProps {
  selectedTheme: string | null;
  onThemeChange: (theme: string | null) => void;
}

const ThemeFilter = ({ selectedTheme, onThemeChange }: ThemeFilterProps) => {
  const themes = [
    { id: "all", label: "Tous les thèmes", color: "bg-gray-100 hover:bg-gray-200" },
    { id: "science", label: "Science", color: "bg-blue-100 hover:bg-blue-200" },
    { id: "business", label: "Business", color: "bg-green-100 hover:bg-green-200" },
    { id: "sport", label: "Sport", color: "bg-orange-100 hover:bg-orange-200" },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {themes.map((theme) => (
        <Button
          key={theme.id}
          variant={selectedTheme === theme.id || (selectedTheme === null && theme.id === "all") ? "default" : "outline"}
          className={selectedTheme === theme.id || (selectedTheme === null && theme.id === "all") ? "" : theme.color}
          onClick={() => onThemeChange(theme.id === "all" ? null : theme.id)}
        >
          {theme.label}
        </Button>
      ))}
    </div>
  );
};

export default ThemeFilter;
