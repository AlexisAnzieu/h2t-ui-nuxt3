/** Clé utilisée par /api/books (champ `color`) */
export type BookTheme = "blue" | "green" | "purple";

export interface Book {
  title: string;
  author: string;
  summary: string;
  color: BookTheme;
  tags: string[];
  link: string;
}

export const bookThemes: Record<
  BookTheme,
  { label: string; description: string; cover: string; accent: string }
> = {
  blue: {
    label: "Réflexion",
    description: "Philosophie, anthropologie et réflexion sociale",
    cover: "bg-ocean-500",
    accent: "bg-ocean-700",
  },
  green: {
    label: "Nature",
    description: "Nature, écologie et environnement",
    cover: "bg-forest-500",
    accent: "bg-forest-700",
  },
  purple: {
    label: "Récits",
    description: "Romans historiques, sagas familiales et récits personnels",
    cover: "bg-clay-500",
    accent: "bg-clay-700",
  },
};
