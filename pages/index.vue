<script setup lang="ts">
import { eggs, mailto, CONTACT_EMAIL, SOURCE_URL } from "~/data/navigation";
import type { DuotoneTone } from "~/components/ui/UiDuotone.vue";

useSeoMeta({
  title: "Accueil",
  ogTitle: "H2T.club",
  description:
    "Un réseau de relations bienveillantes autour de projets communs locaux : écologie, débats, radio, musique.",
});

const tones: DuotoneTone[] = ["red", "violet", "sun", "blue", "red", "violet"];
const questionLink = mailto("Je souhaite poser une question sur H2T");
</script>

<template>
  <div>
    <UiPageHeader
      egg="accueil"
      :lines="['Bienvenue', 'sur H2T.']"
      :accent="1"
    >
      Un réseau de relations bienveillantes, tissé à travers des projets communs
      locaux. Un forum de partage de biens, de services et d'idées, dans un
      cercle restreint.
      <template #actions>
        <UiButton to="/eggs/boiler" icon="arrow-right" size="lg">
          Explorer les projets
        </UiButton>
        <UiButton :href="questionLink" variant="secondary" size="lg">
          Nous écrire
        </UiButton>
      </template>
    </UiPageHeader>

    <!-- Les œufs -->
    <section class="mb-24 mt-20 md:mb-32 md:mt-28" aria-labelledby="eggs-title">
      <div class="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2
          id="eggs-title"
          class="font-display text-[clamp(3.5rem,9vw,7.5rem)] font-black uppercase leading-[0.82] font-condensed riso"
        >
          Les œufs
        </h2>
        <p class="max-w-xs text-lg font-medium">
          Chaque projet de la communauté éclot dans son propre espace.
        </p>
      </div>

      <div class="grid gap-5 md:grid-cols-3 md:gap-6">
        <NuxtLink
          v-for="(egg, i) in eggs"
          :key="egg.label"
          :to="egg.to ?? egg.href"
          :target="egg.href ? '_blank' : undefined"
          class="group relative block aspect-[4/3] border-2 border-ink shadow-hard-lg transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#170D24] md:aspect-auto md:min-h-[15rem]"
          :class="i === 0 && 'md:col-span-2 md:row-span-2'"
        >
          <UiDuotone :src="egg.image" :tone="tones[i]" reveal />
          <div
            class="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
            aria-hidden="true"
          />
          <span
            class="absolute left-3 top-3 border-2 border-ink bg-paper-50 px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider"
          >
            N°{{ egg.number }} ✺ {{ egg.caption }}
          </span>
          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white md:p-5">
            <span
              class="min-w-0 font-display font-black uppercase leading-[0.82] font-condensed"
              :class="i === 0 ? 'text-6xl md:text-[8.5rem]' : 'text-5xl'"
              >.{{ egg.label }}</span
            >
            <span
              class="grid h-11 w-11 shrink-0 place-items-center border-2 border-ink bg-sun text-ink transition-transform duration-300 group-hover:-rotate-12"
            >
              <UiIcon :name="egg.href ? 'arrow-up-right' : 'arrow-right'" :size="20" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Manifeste -->
    <section class="relative mb-24 md:mb-32" aria-labelledby="why-title">
      <UiCard tone="violet" padding="lg">
        <h2
          id="why-title"
          class="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sun"
        >
          Pourquoi pas un groupe Facebook ?
        </h2>
        <p
          class="mt-6 max-w-4xl font-display text-[clamp(2.75rem,7vw,6rem)] font-black uppercase leading-none font-condensed"
        >
          Ici, tes données <span class="text-sun">ne sont pas à vendre.</span>
        </p>
        <div class="mt-10 grid gap-6 text-lg leading-relaxed text-paper/90 md:grid-cols-2">
          <p>
            La plateforme et ses usagers restent indépendants. L'hébergement coûte
            100 $ par an : nul besoin d'élaborer une stratégie publicitaire.
          </p>
          <p>
            Le code source est
            <a
              :href="SOURCE_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-sun underline decoration-2 underline-offset-4 hover:bg-sun hover:text-ink"
              >entièrement disponible en ligne</a
            >. De nouvelles fonctionnalités peuvent naître selon les besoins de la
            communauté. Ce qui n'est pas le cas avec Facebook.
          </p>
        </div>
      </UiCard>
    </section>

    <!-- Contact -->
    <section aria-labelledby="contact-title">
      <h2
        id="contact-title"
        class="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
      >
        ✺ Une question persiste ?
      </h2>
      <a
        :href="questionLink"
        class="group mt-4 inline-block font-display text-[clamp(2.6rem,8vw,7rem)] font-black uppercase leading-[0.85] font-condensed transition-colors hover:text-brand"
      >
        {{ CONTACT_EMAIL }}
        <span class="inline-block transition-transform duration-300 group-hover:translate-x-3">→</span>
      </a>
    </section>
  </div>
</template>
