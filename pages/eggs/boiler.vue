<script setup lang="ts">
import { mailto } from "~/data/navigation";

useSeoMeta({
  title: "Boiler",
  ogTitle: "H2T.boiler",
  description: "Projets musicaux récurrents du réseau communautaire H2T",
  ogImage: "/images/facebook-logo-OG-boiler.png",
});

type Session = {
  date: string;
  year: number;
  title: string;
} & (
  | { type: "youtube"; videos: string[] }
  | { type: "soundcloud"; src: string }
  | { type: "text"; description: string; email: string }
);

const soundcloud = (track: string) =>
  `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&color=%23e3193d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

const sessions: Session[] = [
  {
    date: "30 oct.",
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
    date: "18 août",
    year: 2021,
    title: "Boiler Rhum",
    type: "youtube",
    videos: ["https://www.youtube.com/embed/o8SUW0flFCo"],
  },
  {
    date: "29 juil.",
    year: 2021,
    title: "Jamjazz",
    type: "youtube",
    videos: ["https://www.youtube.com/embed/xWzacY1VKXE"],
  },
  {
    date: "15 avr.",
    year: 2021,
    title: "SoundCrate X Jeremy",
    type: "youtube",
    videos: ["https://www.youtube.com/embed/qO4ipGwr7dQ"],
  },
  {
    date: "19 févr.",
    year: 2020,
    title: "Live Jazz",
    type: "soundcloud",
    src: soundcloud("764061727"),
  },
  {
    date: "8 janv.",
    year: 2020,
    title: "Dolc’Evita",
    type: "soundcloud",
    src: soundcloud("740572471"),
  },
  {
    date: "18 déc.",
    year: 2019,
    title: "Christmas",
    type: "text",
    description:
      "Cette session, une prestation vinyle live de 2 heures, n'a malheureusement pas pu être enregistrée faute de moyens techniques.",
    email: "alexis@soundmotion.ca",
  },
  {
    date: "6 nov.",
    year: 2019,
    title: "Rap session",
    type: "text",
    description:
      "Cette session, une prestation rap live de 40 minutes, n'a malheureusement pas pu être enregistrée faute de moyens techniques.",
    email: "alexis@soundmotion.ca",
  },
  {
    date: "9 oct.",
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

const typeLabel = {
  youtube: { label: "Vidéo", tone: "brand" },
  soundcloud: { label: "Audio", tone: "plum" },
  text: { label: "Non enregistrée", tone: "neutral" },
} as const;
</script>

<template>
  <div>
    <UiPageHeader eyebrow=".boiler" title="Les sessions musicales">
      Des soirées live récurrentes, du jazz au rap en passant par le vinyle.
      Remonte le fil des sessions enregistrées depuis 2019.
    </UiPageHeader>

    <div class="space-y-16">
      <section
        v-for="[year, items] in years"
        :key="year"
        :aria-labelledby="`year-${year}`"
      >
        <h2
          :id="`year-${year}`"
          class="mb-6 flex items-center gap-4 font-display text-5xl font-extrabold tracking-tight text-plum-200 md:text-6xl"
        >
          {{ year }}
          <span class="h-px flex-1 bg-paper-300" aria-hidden="true" />
        </h2>

        <ol class="space-y-6">
          <li
            v-for="session in items"
            :key="session.title"
            class="grid gap-3 md:grid-cols-[7rem_1fr] md:gap-8"
          >
            <div class="pt-1 font-mono text-sm text-plum-500 md:text-right">
              {{ session.date }}
            </div>

            <UiCard as="article" padding="lg">
              <div class="mb-5 flex flex-wrap items-center gap-3">
                <h3 class="font-display text-2xl font-bold tracking-tight">
                  {{ session.title }}
                </h3>
                <UiBadge :tone="typeLabel[session.type].tone">
                  {{ typeLabel[session.type].label }}
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
                class="flex flex-col gap-4 rounded-xl bg-paper-100 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p class="max-w-prose text-plum-600">
                  {{ session.description }} Tu souhaites apporter ton aide ?
                </p>
                <UiButton
                  :href="mailto(`Session ${session.title}`, session.email)"
                  variant="secondary"
                  size="sm"
                  icon-left="mail"
                >
                  Écris-moi
                </UiButton>
              </div>
            </UiCard>
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>
