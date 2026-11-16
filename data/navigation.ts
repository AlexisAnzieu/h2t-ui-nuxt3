export interface NavItem {
  /** Libellé affiché, sans le point (ex: "boiler" → ".boiler") */
  label: string;
  /** Courte description affichée sous le libellé */
  caption: string;
  image: string;
  /** Route interne */
  to?: string;
  /** Lien externe (ouvert dans un nouvel onglet) */
  href?: string;
}

export const homeItem: NavItem = {
  label: "accueil",
  caption: "Le projet H2T",
  image: "/images/nav/accueil.jpg",
  to: "/",
};

export const eggs: NavItem[] = [
  {
    label: "boiler",
    caption: "Sessions musicales",
    image: "/images/nav/boiler.jpg",
    to: "/eggs/boiler",
  },
  {
    label: "partage",
    caption: "Échange de biens",
    image: "/images/nav/market.jpg",
    href: "https://www.partage.club/",
  },
  {
    label: "talk",
    caption: "Podcast sans filtre",
    image: "/images/nav/talk.jpg",
    to: "/eggs/talk",
  },
  {
    label: "teach",
    caption: "Ateliers & savoirs",
    image: "/images/nav/teach.jpg",
    to: "/eggs/teach",
  },
  {
    label: "theque",
    caption: "Bibliothèque partagée",
    image: "/images/nav/theque.jpg",
    to: "/eggs/theque",
  },
  {
    label: "transition",
    caption: "Écologie & engagement",
    image: "/images/nav/transition.jpg",
    to: "/eggs/transition",
  },
];

export const navigation: NavItem[] = [homeItem, ...eggs];

export const CONTACT_EMAIL = "contact@h2t.club";
export const SOURCE_URL = "https://github.com/AlexisAnzieu/h2t-ui";

export const mailto = (subject: string, email = CONTACT_EMAIL) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;
