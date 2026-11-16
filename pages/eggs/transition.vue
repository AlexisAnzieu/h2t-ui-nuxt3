<script setup lang="ts">
useSeoMeta({
  title: "Transition",
  ogTitle: "H2T.transition",
  description: "Initiatives écologiques et solidaires soutenues par la communauté H2T",
});

interface Initiative {
  title: string;
  tag: string;
  description: string;
  link: string;
  linkLabel: string;
}

const initiatives: Initiative[] = [
  {
    title: "Fresque du Climat",
    tag: "Atelier hébergé",
    description:
      "Nous hébergeons des ateliers de la Fresque du Climat. Depuis fin 2018, l'association œuvre pour embarquer individus et organisations dans la transition, en diffusant une compréhension partagée du défi climatique, en France et dans plus de 40 pays. Le nombre de personnes sensibilisées double tous les 5 mois.",
    link: "https://fresqueduclimat.org/",
    linkLabel: "En savoir plus",
  },
  {
    title: "Les Primitifs",
    tag: "Formation",
    description:
      "Certains membres participent activement à ces formations. Depuis 2007, Les Primitifs vont au-delà du cours de survie : remplacer la peur et les mythes par des connaissances, des traditions et une curiosité contagieuse. Les tarifs sont maintenus au plus bas, l'objectif étant la diffusion.",
    link: "https://www.lesprimitifs.ca/nos-formations",
    linkLabel: "En savoir plus",
  },
  {
    title: "Documentaires",
    tag: "Ressource",
    description:
      "Nous avons référencé un bon nombre de documentaires permettant d'appréhender les enjeux des changements climatiques et sociétaux.",
    link: "https://docs.google.com/spreadsheets/d/1lhk0222MjeaAeHhq2EMPAKu8Xzei3IeFi7ez-DjdBXM/edit?usp=sharing",
    linkLabel: "Voir la liste",
  },
  {
    title: "Activités au Québec",
    tag: "Projet H2T",
    description:
      "Un site centralisant des activités à faire au Québec, pour répondre au besoin d'évasion tout en évitant de prendre l'avion.",
    link: "https://acti.quebec/",
    linkLabel: "Aller sur Actï",
  },
  {
    title: "Santropol Roulant",
    tag: "Partenaire",
    description:
      "Un centre alimentaire et une communauté intergénérationnelle : faire pousser, préparer et livrer de la nourriture aux Montréalais·es, pour renforcer la sécurité alimentaire et l'inclusion sociale en ville.",
    link: "https://santropolroulant.org/fr/",
    linkLabel: "Voir le site",
  },
  {
    title: "Les Compagnons Maraîchers·ères",
    tag: "Bénévolat",
    description:
      "Des équipes de volontaires de la ville, organisées et motivées, qui viennent prêter main-forte ponctuellement sur des fermes écologiques de proximité.",
    link: "https://compagnonsmaraichers.org/",
    linkLabel: "Voir le site",
  },
];

// Chaque flyer a son papier, son angle et son bout de scotch
const papers = [
  { card: "bg-paper-50 text-ink", tape: "bg-sun/80", button: "dark" },
  { card: "bg-sun text-ink", tape: "bg-paper-50/70", button: "dark" },
  { card: "on-dark bg-violet-900 text-paper", tape: "bg-sun/80", button: "sun" },
  { card: "bg-brand text-white", tape: "bg-paper-50/70", button: "secondary" },
  { card: "on-dark bg-riso-green text-paper", tape: "bg-sun/80", button: "sun" },
  { card: "bg-paper-200 text-ink", tape: "bg-brand-300/80", button: "primary" },
] as const;
const tilts = ["-rotate-[1.5deg]", "rotate-[1.2deg]", "rotate-[-0.8deg]", "rotate-[2deg]", "rotate-[-2deg]", "rotate-[0.8deg]"];
</script>

<template>
  <div>
    <UiPageHeader
      egg="transition"
      :lines="['Agir local,', 'ensemble.']"
      :accent="1"
    >
      Ateliers, formations, ressources et partenaires : le tableau d'affichage
      des initiatives écologiques et solidaires que la communauté porte ou
      soutient.
    </UiPageHeader>

    <div class="columns-1 gap-10 md:columns-2 xl:columns-3">
      <article
        v-for="(item, i) in initiatives"
        :key="item.title"
        class="relative mb-14 break-inside-avoid border-2 border-ink p-6 pt-8 shadow-hard-lg transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-[1.02]"
        :class="[papers[i % papers.length].card, tilts[i % tilts.length]]"
      >
        <!-- Scotch -->
        <span
          class="absolute -top-4 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-3 border border-ink/10 backdrop-blur-[1px]"
          :class="papers[i % papers.length].tape"
          aria-hidden="true"
        />
        <UiBadge>{{ item.tag }}</UiBadge>
        <h2
          class="mt-4 hyphens-auto break-words font-display text-[2.6rem] font-black uppercase leading-[0.95] font-condensed sm:text-5xl md:text-[2.6rem] 2xl:text-5xl"
        >
          {{ item.title }}
        </h2>
        <p class="mt-4 text-[17px] font-medium leading-snug opacity-90">
          {{ item.description }}
        </p>
        <UiButton
          :href="item.link"
          new-tab
          :variant="papers[i % papers.length].button"
          size="sm"
          icon="arrow-up-right"
          class="mt-6"
        >
          {{ item.linkLabel }}
        </UiButton>
      </article>
    </div>
  </div>
</template>
