<script setup lang="ts">
import { eggs, mailto, CONTACT_EMAIL, SOURCE_URL } from "~/data/navigation";

useSeoMeta({
  title: "Accueil",
  ogTitle: "H2T.club",
  description:
    "Un réseau de relations bienveillantes autour de projets communs locaux : écologie, débats, radio, musique.",
});

const meanings = [
  {
    code: "H2T",
    title: "Plateau-Mont-Royal",
    text: "Le code postal du quartier, pour un projet résolument local.",
  },
  {
    code: "H2T",
    title: "House 2 Techno",
    text: "Le fil musical qui a lancé les premières sessions.",
  },
  {
    code: "H2T",
    title: "Head 2 Toe",
    text: "De la tête aux pieds : une approche thématique et complète.",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative mb-16 md:mb-24">
      <p class="eyebrow mb-6 flex items-center gap-3">
        <span class="h-px w-8 bg-brand-500" aria-hidden="true" />
        Plateforme intra-communautaire locale
      </p>
      <h1
        class="max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-plum-900 sm:text-6xl md:text-7xl xl:text-8xl"
      >
        Bienvenue sur <span class="text-brand-500">H2T</span>.
      </h1>
      <p
        class="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-plum-600 md:text-xl"
      >
        Un réseau de relations bienveillantes, tissé à travers des projets
        communs locaux : écologie, débats, radio, musique. Autrement dit, un
        forum de partage de biens, de services et d'idées dans un cercle
        restreint.
      </p>
      <div class="mt-10 flex flex-wrap gap-3">
        <UiButton to="/eggs/boiler" icon="arrow-right" size="lg">
          Découvrir les projets
        </UiButton>
        <UiButton
          :href="mailto('Je souhaite poser une question sur H2T')"
          variant="secondary"
          icon-left="mail"
          size="lg"
        >
          Nous écrire
        </UiButton>
      </div>
    </section>

    <!-- Signification -->
    <section class="mb-16 md:mb-24" aria-labelledby="meaning-title">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 id="meaning-title" class="section-title">Que signifie H2T ?</h2>
        <p class="max-w-md text-plum-600">
          Le sens n'est pas figé : il varie au gré des projets et du vent. À toi
          de le définir. À sa création, il portait trois idées.
        </p>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        <UiCard v-for="(m, i) in meanings" :key="m.title" padding="lg">
          <div class="mb-10 flex items-start justify-between">
            <span class="font-mono text-sm text-plum-400">0{{ i + 1 }}</span>
            <span
              class="font-display text-sm font-bold tracking-tight text-brand-500"
              >{{ m.code }}</span
            >
          </div>
          <h3 class="font-display text-2xl font-bold tracking-tight">
            {{ m.title }}
          </h3>
          <p class="mt-2 text-plum-600">{{ m.text }}</p>
        </UiCard>
      </div>
    </section>

    <!-- Explorer -->
    <section class="mb-16 md:mb-24" aria-labelledby="eggs-title">
      <div class="mb-8">
        <h2 id="eggs-title" class="section-title">Les œufs</h2>
        <p class="mt-2 text-plum-600">
          Chaque projet de la communauté éclot dans son propre espace.
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <NuxtLink
          v-for="egg in eggs"
          :key="egg.label"
          :to="egg.to ?? egg.href"
          :target="egg.href ? '_blank' : undefined"
          class="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-card"
        >
          <img
            :src="egg.image"
            alt=""
            loading="lazy"
            class="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-t from-plum-950/90 via-plum-950/40 to-transparent"
            aria-hidden="true"
          />
          <div class="flex items-end justify-between gap-3 text-white">
            <div>
              <div class="font-display text-3xl font-bold tracking-tight">
                <span class="text-brand-400">.</span>{{ egg.label }}
              </div>
              <div class="mt-1 font-mono text-xs text-white/70">
                {{ egg.caption }}
              </div>
            </div>
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition-all duration-300 group-hover:bg-brand-500"
            >
              <UiIcon
                :name="egg.href ? 'arrow-up-right' : 'arrow-right'"
                :size="18"
              />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Pourquoi pas Facebook -->
    <section
      class="mb-16 grid gap-10 rounded-3xl bg-plum-900 p-8 text-white md:mb-24 md:grid-cols-[1fr_1.4fr] md:p-12"
      aria-labelledby="why-title"
    >
      <div>
        <p class="eyebrow mb-4 text-plum-300">FAQ</p>
        <h2
          id="why-title"
          class="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl"
        >
          Pourquoi ne pas créer un groupe Facebook ?
        </h2>
      </div>
      <div class="space-y-4 text-lg leading-relaxed text-plum-200">
        <p>
          Pour l'<strong class="font-semibold text-white">indépendance</strong>
          de la plateforme et de ses usagers. Ici, les données ne sont pas
          vendues : l'hébergement coûte 100 $ par an, nul besoin de stratégie
          publicitaire.
        </p>
        <p>
          Et parce que le code source est
          <a
            :href="SOURCE_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-white underline decoration-brand-500 decoration-2 underline-offset-4 hover:text-brand-200"
            >entièrement disponible en ligne</a
          >, de nouvelles fonctionnalités peuvent naître selon les besoins de la
          communauté. Ce qui n'est pas le cas avec Facebook.
        </p>
      </div>
    </section>

    <!-- Contact -->
    <section
      class="flex flex-col items-start justify-between gap-6 border-t border-paper-300 pt-10 md:flex-row md:items-center"
    >
      <div class="max-w-xl">
        <h2 class="section-title">Une question persiste ?</h2>
        <p class="mt-2 text-plum-600">
          Écris à
          <a :href="mailto('Je souhaite poser une question sur H2T')" class="link">{{
            CONTACT_EMAIL
          }}</a
          >. Une réponse te sera envoyée, et si elle complète celles ci-dessus,
          elle sera ajoutée à la page.
        </p>
      </div>
      <UiButton
        :href="mailto('Je souhaite poser une question sur H2T')"
        variant="dark"
        icon="arrow-right"
      >
        Poser ma question
      </UiButton>
    </section>
  </div>
</template>
