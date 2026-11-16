<script setup lang="ts">
import { mailto } from "~/data/navigation";

useSeoMeta({
  title: "Musique",
  ogTitle: "H2T.musique",
  description: "Projets musicaux récurrents du réseau communautaire H2T",
  ogImage: "/images/facebook-logo-OG-boiler.png",
});

type Session = {
  day: string;
  month: string;
  year: number;
  title: string;
} & (
  | { type: "youtube"; videos: string[] }
  | { type: "soundcloud"; src: string }
  | { type: "text"; description: string }
);

const soundcloud = (track: string) =>
  `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&color=%23e3193d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

const sessions: Session[] = [
  {
    day: "30",
    month: "oct.",
    year: 2021,
    title: "XX Halloween",
    type: "youtube",
    videos: [
      "https://www.youtube.com/embed/624X4iVqoBQ",
      "https://www.youtube.com/embed/T9wx0XTU0nA",
      "https://www.youtube.com/embed/x2UjGP_Qktc",
      "https://www.youtube.com/embed/djL3nWoRNT4",
    ],
  },
  {
    day: "18",
    month: "août",
    year: 2021,
    title: "Boiler Rhum",
    type: "youtube",
    videos: ["https://www.youtube.com/embed/o8SUW0flFCo"],
  },
  {
    day: "29",
    month: "juil.",
    year: 2021,
    title: "Jamjazz",
    type: "youtube",
    videos: ["https://www.youtube.com/embed/xWzacY1VKXE"],
  },
  {
    day: "15",
    month: "avr.",
    year: 2021,
    title: "SoundCrate X Jeremy",
    type: "youtube",
    videos: ["https://www.youtube.com/embed/qO4ipGwr7dQ"],
  },
  {
    day: "19",
    month: "févr.",
    year: 2020,
    title: "Live Jazz",
    type: "soundcloud",
    src: soundcloud("764061727"),
  },
  {
    day: "08",
    month: "janv.",
    year: 2020,
    title: "Dolc’Evita",
    type: "soundcloud",
    src: soundcloud("740572471"),
  },
  {
    day: "18",
    month: "déc.",
    year: 2019,
    title: "Christmas",
    type: "text",
    description:
      "Une prestation vinyle en direct de 2 heures, qui n'a malheureusement pas pu être enregistrée faute de moyens techniques.",
  },
  {
    day: "06",
    month: "nov.",
    year: 2019,
    title: "Rap session",
    type: "text",
    description:
      "Une prestation rap en direct de 40 minutes, qui n'a malheureusement pas pu être enregistrée faute de moyens techniques.",
  },
  {
    day: "09",
    month: "oct.",
    year: 2019,
    title: "SoundCrate",
    type: "soundcloud",
    src: soundcloud("695698288"),
  },
];

const years = computed(() => {
  const groups = new Map<number, Session[]>();
  for (const s of sessions) {
    groups.set(s.year, [...(groups.get(s.year) ?? []), s]);
  }
  return [...groups.entries()];
});

const typeStyle = {
  youtube: { label: "▶ Vidéo", tone: "brand", date: "bg-brand text-white" },
  soundcloud: { label: "♫ Audio", tone: "violet", date: "on-dark bg-violet-900 text-paper" },
  text: { label: "Non enregistrée", tone: "outline", date: "bg-paper-200 text-ink" },
} as const;
</script>

<template>
  <div>
    <UiPageHeader
      egg="musique"
      :lines="['Le son', 'du Plateau']"
      :accent="1"
    >
      Des soirées musicales en direct, du jazz au rap en passant par le vinyle.
      Remonte le fil des soirées enregistrées.
    </UiPageHeader>

    <div class="space-y-20">
      <section
        v-for="[year, items] in years"
        :key="year"
        :aria-labelledby="`year-${year}`"
      >
        <h2
          :id="`year-${year}`"
          class="mb-8 font-display text-[clamp(6rem,18vw,13rem)] font-black leading-[0.75] tracking-tight font-condensed text-outline"
        >
          {{ year }}
        </h2>

        <ol class="space-y-10">
          <li v-for="session in items" :key="session.title">
            <article
              class="grid border-2 border-ink bg-paper-50 shadow-hard-lg md:grid-cols-[9.5rem_1fr]"
            >
              <!-- Date façon billet -->
              <div
                class="flex items-baseline gap-3 border-b-2 border-ink p-4 md:flex-col md:items-start md:gap-1 md:border-b-0 md:border-r-2 md:p-5"
                :class="typeStyle[session.type].date"
              >
                <span
                  class="font-display text-6xl font-black leading-[0.8] font-condensed md:text-[6.5rem]"
                  >{{ session.day }}</span
                >
                <span class="font-mono text-sm font-semibold uppercase tracking-wider">
                  {{ session.month }} {{ session.year }}
                </span>
              </div>

              <div class="min-w-0 p-5 md:p-7">
                <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <h3
                    class="font-display text-4xl font-black uppercase leading-[0.88] font-condensed md:text-6xl"
                  >
                    {{ session.title }}
                  </h3>
                  <UiBadge :tone="typeStyle[session.type].tone">
                    {{ typeStyle[session.type].label }}
                  </UiBadge>
                </div>

                <div
                  v-if="session.type === 'youtube'"
                  class="grid gap-4"
                  :class="session.videos.length > 1 && 'md:grid-cols-2'"
                >
                  <UiEmbed
                    v-for="(video, i) in session.videos"
                    :key="video"
                    :src="video"
                    :title="`${session.title} – vidéo ${i + 1}`"
                  />
                </div>

                <UiEmbed
                  v-else-if="session.type === 'soundcloud'"
                  :src="session.src"
                  :title="session.title"
                  :height="300"
                />

                <div
                  v-else
                  class="relative overflow-hidden border-2 border-dashed border-ink p-5 md:p-6"
                >
                  <div class="hatch absolute inset-0 text-ink/[0.06]" aria-hidden="true" />
                  <p class="relative max-w-prose text-lg font-medium">
                    {{ session.description }}
                    <span class="font-bold">Tu souhaites apporter ton aide ?</span>
                  </p>
                  <UiButton
                    :href="mailto(`Soirée ${session.title}`)"
                    variant="sun"
                    size="sm"
                    class="relative mt-5"
                  >
                    Je peux aider
                  </UiButton>
                </div>
              </div>
            </article>
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>
