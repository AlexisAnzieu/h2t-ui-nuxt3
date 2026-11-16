<script setup lang="ts">
import { mailto } from "~/data/navigation";

useSeoMeta({
  title: "Teach",
  ogTitle: "H2T.teach",
  description: "Ateliers de la communauté H2T : bonnes pratiques de finances personnelles",
});

const topics = [
  "REER et CELI, c'est quoi ?",
  "RAP et achat immobilier",
  "Principes de base de l'investissement",
  "Atteindre l'indépendance financière",
  "Fiscalité",
  "Retour en France",
];

const joinLink = mailto(
  "Je souhaite participer à l'atelier finances personnelles"
);
</script>

<template>
  <div>
    <UiPageHeader
      egg="teach"
      :lines="['Apprendre', 'les uns', 'des autres']"
      :accent="2"
    >
      Chaque membre a un savoir à partager. Les ateliers rendent ces
      connaissances accessibles à toute la communauté.
    </UiPageHeader>

    <UiCard as="article" tone="sun" padding="none" class="grid lg:grid-cols-[1fr_1.1fr]">
      <div class="flex flex-col p-6 md:p-10">
        <UiBadge tone="ink">Finances personnelles</UiBadge>
        <h2
          class="mt-6 font-display text-[clamp(2.75rem,4.6vw,4.5rem)] font-black uppercase leading-[0.9] font-condensed"
        >
          Bonnes pratiques
          <span class="text-brand riso-violet">de finances perso</span>
        </h2>
        <p class="mt-6 max-w-md text-lg font-medium leading-snug">
          Démystifier le monde de l'investissement afin d'atteindre
          l'indépendance financière, en quelques étapes.
        </p>
        <div class="mt-auto flex flex-wrap gap-4 pt-10">
          <UiButton href="/assets/Investissement.pdf" new-tab variant="dark" icon-left="download">
            La présentation
          </UiButton>
          <UiButton :href="joinLink" variant="secondary">Participer</UiButton>
        </div>
      </div>

      <div class="border-ink bg-paper-50 p-6 max-lg:border-t-2 md:p-10 lg:border-l-2">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
          ✺ Au programme
        </p>
        <ol class="mt-4">
          <li
            v-for="(topic, i) in topics"
            :key="topic"
            class="group flex items-baseline gap-5 border-b-2 border-ink py-3.5 transition-colors last:border-0 hover:bg-sun"
          >
            <span
              class="w-12 shrink-0 font-display text-5xl font-black leading-none text-brand font-condensed transition-transform group-hover:-rotate-6"
            >
              {{ String(i + 1).padStart(2, "0") }}
            </span>
            <span class="text-xl font-semibold leading-tight">{{ topic }}</span>
          </li>
        </ol>
      </div>
    </UiCard>
  </div>
</template>
