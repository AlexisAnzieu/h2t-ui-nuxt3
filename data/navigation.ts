export interface NavItem {
  /** Libellé affiché, sans le point (ex: "balados" → ".balados") */
  label: string;
  /** Numéro d'« édition », affiché comme sur une affiche */
  number: string;
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
  number: "00",
  caption: "Le projet H2T",
  image: "/images/nav/accueil.jpg",
  to: "/",
};

export const eggs: NavItem[] = [
  {
    label: "musique",
    number: "01",
    caption: "Soirées musicales",
    image: "/images/nav/boiler.jpg",
    to: "/eggs/musique",
  },
  {
    label: "partage",
    number: "02",
    caption: "Échange de biens",
    image: "/images/nav/market.jpg",
    href: "https://www.partage.club/",
  },
  {
    label: "balados",
    number: "03",
    caption: "Balado sans filtre",
    image: "/images/nav/talk.jpg",
    to: "/eggs/balados",
  },
  {
    label: "apprendre",
    number: "04",
    caption: "Ateliers & savoirs",
    image: "/images/nav/teach.jpg",
    to: "/eggs/apprendre",
  },
  {
    label: "theque",
    number: "05",
    caption: "Bibliothèque partagée",
    image: "/images/nav/theque.jpg",
    to: "/eggs/theque",
  },
  {
    label: "transition",
    number: "06",
    caption: "Écologie & engagement",
    image: "/images/nav/transition.jpg",
    to: "/eggs/transition",
  },
];

export const navigation: NavItem[] = [homeItem, ...eggs];

export const findNavItem = (label: string) =>
  navigation.find((item) => item.label === label);

export const CONTACT_EMAIL = "contact@h2t.club";
export const SOURCE_URL = "https://github.com/AlexisAnzieu/h2t-ui-nuxt3";

export const mailto = (subject: string, email = CONTACT_EMAIL) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;
