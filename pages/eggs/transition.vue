<script setup lang="ts">
import { mailto } from "~/data/navigation";
import type { BadgeTone } from "~/components/ui/UiBadge.vue";

useSeoMeta({
  title: "Transition",
  ogTitle: "H2T.transition",
  description: "Initiatives écologiques et solidaires soutenues par la communauté H2T",
});

interface Initiative {
  title: string;
  tag: string;
  tone: BadgeTone;
  description: string;
  link: string;
  linkLabel: string;
  /** Sujet du mail pour participer via H2T */
  contact?: string;
}

const initiatives: Initiative[] = [
  {
    title: "Fresque du Climat",
    tag: "Atelier hébergé",
    tone: "brand",
    description:
      "Nous hébergeons des ateliers de la Fresque du Climat. Depuis fin 2018, l'association œuvre pour embarquer individus et organisations dans la transition, en diffusant une compréhension partagée du défi climatique, en France et dans plus de 40 pays. Le nombre de personnes sensibilisées double tous les 5 mois.",
    link: "https://fresqueduclimat.org/",
    linkLabel: "En savoir plus",
    contact: "Je souhaite participer à la Fresque du Climat",
  },
  {
    title: "Formation Les Primitifs",
    tag: "Formation",
    tone: "forest",
    description:
      "Certains membres participent activement à ces formations. Depuis 2007, Les Primitifs vont au-delà du cours de survie : remplacer la peur et les mythes par des connaissances, des traditions et une curiosité contagieuse. Les tarifs sont maintenus au plus bas, l'objectif étant la diffusion.",
    link: "https://www.lesprimitifs.ca/nos-formations",
    linkLabel: "En savoir plus",
    contact: "Je souhaite participer à une formation Les Primitifs",
  },
  {
    title: "Documentaires",
    tag: "Ressource",
    tone: "ocean",
    description:
      "Nous avons référencé un bon nombre de documentaires permettant d'appréhender les enjeux des changements climatiques et sociétaux.",
    link: "https://docs.google.com/spreadsheets/d/1lhk0222MjeaAeHhq2EMPAKu8Xzei3IeFi7ez-DjdBXM/edit?usp=sharing",
    linkLabel: "Accéder à la liste",
  },
  {
    title: "Activités au Québec",
    tag: "Projet H2T",
    tone: "plum",
    description:
      "Un site centralisant des activités à faire au Québec, pour répondre au besoin d'évasion tout en évitant de prendre l'avion.",
    link: "https://acti.quebec/",
    linkLabel: "Accéder à Actï",
  },
  {
    title: "Santropol Roulant",
    tag: "Partenaire",
    tone: "clay",
    description:
      "Un centre alimentaire et une communauté intergénérationnelle : faire pousser, préparer et livrer de la nourriture aux Montréalais·es, pour renforcer la sécurité alimentaire et l'inclusion sociale en ville.",
    link: "https://santropolroulant.org/fr/",
    linkLabel: "Accéder au site",
  },
  {
    title: "Les Compagnons Maraîchers·ères",
    tag: "Bénévolat",
    tone: "forest",
    description:
      "Des équipes de volontaires de la ville, organisées et motivées, qui viennent prêter main-forte ponctuellement sur des fermes écologiques de proximité.",
    link: "https://compagnonsmaraichers.org/",
    linkLabel: "Accéder au site",
  },
];
</script>

<template>
  <div>
    <UiPageHeader eyebrow=".transition" title="Agir localement, ensemble.">
      Ateliers, formations, ressources et partenaires : les initiatives
      écologiques et solidaires que la communauté porte ou soutient.
    </UiPageHeader>

    <div class="grid gap-5 md:grid-cols-2">
      <UiCard
        v-for="item in initiatives"
        :key="item.title"
        as="article"
        padding="lg"
        interactive
        class="flex flex-col"
      >
        <UiBadge :tone="item.tone" class="self-start">{{ item.tag }}</UiBadge>
        <h2 class="mt-4 font-display text-2xl font-bold tracking-tight">
          {{ item.title }}
        </h2>
        <p class="mt-3 flex-1 leading-relaxed text-plum-600">
          {{ item.description }}
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <UiButton
            :href="item.link"
            new-tab
            variant="dark"
            size="sm"
            icon="arrow-up-right"
          >
            {{ item.linkLabel }}
          </UiButton>
          <UiButton
            v-if="item.contact"
            :href="mailto(item.contact)"
            variant="ghost"
            size="sm"
            icon-left="mail"
          >
            Participer
          </UiButton>
        </div>
      </UiCard>
    </div>
  </div>
</template>
