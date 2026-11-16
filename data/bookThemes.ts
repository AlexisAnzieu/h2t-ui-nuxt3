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
  { label: string; description: string; bg: string }
> = {
  blue: {
    label: "Réflexion",
    description: "Philosophie, anthropologie et réflexion sociale",
    bg: "bg-riso-blue",
  },
  green: {
    label: "Nature",
    description: "Nature, écologie et environnement",
    bg: "bg-riso-green",
  },
  purple: {
    label: "Récits",
    description: "Romans historiques, sagas familiales et récits personnels",
    bg: "bg-riso-orange",
  },
};

/** Petit hash stable pour varier les tranches sans aléatoire (SSR-safe) */
export const hashString = (value: string) => {
  let h = 0;
  for (let i = 0; i < value.length; i++) {
    h = (h * 31 + value.charCodeAt(i)) >>> 0;
  }
  return h;
};
