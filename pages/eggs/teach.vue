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
    <UiPageHeader eyebrow=".teach" title="Apprendre les uns des autres.">
      Chaque membre a un savoir à partager. Les ateliers .teach rendent ces
      connaissances accessibles à toute la communauté.
    </UiPageHeader>

    <UiCard as="article" padding="none" class="grid lg:grid-cols-[1.1fr_1fr]">
      <div class="p-6 md:p-10">
        <UiBadge tone="forest">Atelier</UiBadge>
        <h2
          class="mt-4 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl"
        >
          Bonnes pratiques de finances personnelles
        </h2>
        <p class="mt-4 max-w-prose text-lg leading-relaxed text-plum-600">
          Démystifier le monde de l'investissement afin d'atteindre
          l'indépendance financière, en quelques étapes.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <UiButton href="/assets/Investissement.pdf" new-tab icon-left="download">
            Voir la présentation
          </UiButton>
          <UiButton
            :href="joinLink"
            variant="secondary"
          >
            Participer au prochain
          </UiButton>
        </div>
      </div>

      <div class="border-t border-paper-200 bg-paper-100 p-6 md:p-10 lg:border-l lg:border-t-0">
        <p class="eyebrow mb-5">Au programme</p>
        <ol class="space-y-1">
          <li
            v-for="(topic, i) in topics"
            :key="topic"
            class="flex items-baseline gap-4 border-b border-paper-200 py-3 last:border-0"
          >
            <span class="font-mono text-sm text-brand-500">
              {{ String(i + 1).padStart(2, "0") }}
            </span>
            <span class="font-medium text-plum-800">{{ topic }}</span>
          </li>
        </ol>
      </div>
    </UiCard>
  </div>
</template>
