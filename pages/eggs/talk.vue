<script setup lang="ts">
useSeoMeta({
  title: "Talk",
  ogTitle: "H2T.talk",
  description: "H2TALK, le podcast sans préparation du réseau H2T",
  ogImage: "/images/facebook-logo-OG-talk.png",
});

const episodes = [
  {
    number: "02",
    title: "H2TALK Deux",
    season: "Saison 3",
    description:
      "Instants de partage entre quatre femmes : la place de la femme dans la société, la fatigue morale liée à l'hypersensibilité, l'acceptation des réalités de chacun, la place de l'éducation dans le patriarcat… Merci à Perle, Ksénia, Camille et Pauline pour cet échange à cœur ouvert.",
    src: "https://open.spotify.com/embed/episode/78vCbGHRUVy0VEddGA1Sb5?utm_source=generator",
  },
  {
    number: "01",
    title: "H2TALK Un",
    season: "Saison 2",
    description:
      "Tour de passe-passe écologique, spirituel, éducatif et rêveur entre les copains Thomas, Alexis, Victor, Pierre et Aymeric.",
    src: "https://open.spotify.com/embed-podcast/episode/49adm7U6GQvgdmZVqafQXJ",
  },
  {
    number: "00",
    title: "H2TALK Zéro",
    season: "Saison 1",
    description:
      "Tour de passe-passe écologique, spirituel, éducatif et rêveur entre les copains du Plateau Clémentin, Hugo, Sandro et Alexis.",
    src: "https://open.spotify.com/embed-podcast/episode/3LfY19oLQZZGrWhWvssp12",
  },
];
</script>

<template>
  <div>
    <UiPageHeader eyebrow=".talk" title="Zéro préparation, zéro sujet, zéro expérience.">
      H2TALK, c'est le podcast de la communauté : on s'assoit, on lance
      l'enregistrement, et on voit où la conversation nous emmène.
    </UiPageHeader>

    <div class="space-y-6">
      <UiCard
        v-for="episode in episodes"
        :key="episode.number"
        as="article"
        padding="none"
        class="grid md:grid-cols-[1fr_1.1fr]"
      >
        <div class="flex flex-col p-6 md:p-8">
          <div class="mb-6 flex items-center gap-3">
            <span
              class="grid h-11 w-11 place-items-center rounded-full bg-brand-500 text-white"
              aria-hidden="true"
            >
              <UiIcon name="mic" :size="20" />
            </span>
            <UiBadge tone="plum">{{ episode.season }}</UiBadge>
          </div>
          <h2 class="font-display text-3xl font-bold tracking-tight">
            {{ episode.title }}
          </h2>
          <p class="mt-3 leading-relaxed text-plum-600">
            {{ episode.description }}
          </p>
          <span
            class="mt-auto pt-8 font-display text-7xl font-extrabold leading-none tracking-tighter text-paper-200"
            aria-hidden="true"
            >#{{ episode.number }}</span
          >
        </div>
        <div class="flex items-center bg-paper-100 p-4 md:p-6">
          <UiEmbed :src="episode.src" :title="episode.title" :height="232" />
        </div>
      </UiCard>
    </div>
  </div>
</template>
