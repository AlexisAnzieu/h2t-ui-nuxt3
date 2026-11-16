<script setup lang="ts">
useSeoMeta({
  title: "Balados",
  ogTitle: "H2T.balados",
  description: "H2TALK, le balado sans préparation du réseau H2T",
  ogImage: "/images/facebook-logo-OG-talk.png",
});

const episodes = [
  {
    number: "02",
    name: "Deux",
    season: "Saison 3",
    description:
      "Instants de partage entre quatre femmes : la place de la femme dans la société, la fatigue morale liée à l'hypersensibilité, l'acceptation des réalités de chacun, la place de l'éducation dans le patriarcat… Merci à Perle, Ksénia, Camille et Pauline pour cet échange à cœur ouvert.",
    src: "https://open.spotify.com/embed/episode/78vCbGHRUVy0VEddGA1Sb5?utm_source=generator",
  },
  {
    number: "01",
    name: "Un",
    season: "Saison 2",
    description:
      "Tour de passe-passe écologique, spirituel, éducatif et rêveur entre les copains Thomas, Alexis, Victor, Pierre et Aymeric.",
    src: "https://open.spotify.com/embed-podcast/episode/49adm7U6GQvgdmZVqafQXJ",
  },
  {
    number: "00",
    name: "Zéro",
    season: "Saison 1",
    description:
      "Tour de passe-passe écologique, spirituel, éducatif et rêveur entre les copains du Plateau Clémentin, Hugo, Sandro et Alexis.",
    src: "https://open.spotify.com/embed-podcast/episode/3LfY19oLQZZGrWhWvssp12",
  },
];
</script>

<template>
  <div>
    <UiPageHeader
      egg="balados"
      :lines="['Zéro prépa.', 'Zéro sujet.', 'Zéro expérience.']"
      :accent="2"
    >
      H2TALK, c'est le balado de la communauté : on s'assoit, on lance
      l'enregistrement, et on voit où la conversation nous emmène.
    </UiPageHeader>

    <div class="space-y-12">
      <article
        v-for="(episode, i) in episodes"
        :key="episode.number"
        class="grid overflow-hidden border-2 border-ink bg-paper-50 shadow-hard-lg md:grid-cols-[1fr_1.05fr]"
      >
        <div
          class="relative overflow-hidden p-6 md:p-9"
          :class="i % 2 === 1 && 'md:order-last'"
        >
          <span
            class="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[9rem] font-black leading-none font-condensed text-outline opacity-20 md:text-[12rem]"
            aria-hidden="true"
            >#{{ episode.number }}</span
          >
          <UiBadge tone="sun" tilt>{{ episode.season }}</UiBadge>
          <h2
            class="relative mt-5 font-display text-6xl font-black uppercase leading-[0.82] font-condensed md:text-7xl"
          >
            H2Talk<br /><span class="text-brand riso-violet">{{ episode.name }}</span>
          </h2>
          <p class="relative mt-5 text-lg font-medium leading-snug">
            {{ episode.description }}
          </p>
        </div>
        <div
          class="flex items-center border-ink bg-violet-900 p-4 max-md:border-t-2 md:p-7"
          :class="i % 2 === 1 ? 'md:border-r-2' : 'md:border-l-2'"
        >
          <UiEmbed :src="episode.src" :title="`H2TALK ${episode.name}`" :height="232" />
        </div>
      </article>
    </div>
  </div>
</template>
