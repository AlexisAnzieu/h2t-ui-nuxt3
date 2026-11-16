<script setup lang="ts">
import { bookThemes, type Book, type BookTheme } from "~/data/bookThemes";

useSeoMeta({
  title: "Thèque",
  ogTitle: "H2T.theque",
  description: "La bibliothèque partagée de la communauté H2T",
});

const { data: books, status } = await useFetch<Book[]>("/api/books", {
  default: () => [],
});

const selected = ref<BookTheme | "">("");

const themeKeys = Object.keys(bookThemes) as BookTheme[];

const countFor = (key: BookTheme) =>
  books.value.filter((b) => b.color === key).length;

const filteredBooks = computed(() =>
  selected.value
    ? books.value.filter((b) => b.color === selected.value)
    : books.value
);
</script>

<template>
  <div>
    <UiPageHeader eyebrow=".theque" title="Des livres à glisser sous le sapin.">
      Les lectures qui ont marqué la communauté, à offrir ou à s'offrir.
      Survole ou touche une couverture pour découvrir le résumé.
    </UiPageHeader>

    <div
      class="mb-10 flex flex-wrap gap-2"
      role="group"
      aria-label="Filtrer par thématique"
    >
      <UiChip :active="selected === ''" @click="selected = ''">
        Tout
        <span class="font-mono text-xs opacity-60">{{ books.length }}</span>
      </UiChip>
      <UiChip
        v-for="key in themeKeys"
        :key="key"
        :active="selected === key"
        :title="bookThemes[key].description"
        @click="selected = key"
      >
        <span
          class="h-2.5 w-2.5 rounded-full"
          :class="bookThemes[key].cover"
          aria-hidden="true"
        />
        {{ bookThemes[key].label }}
        <span class="font-mono text-xs opacity-60">{{ countFor(key) }}</span>
      </UiChip>
    </div>

    <p v-if="selected" class="-mt-6 mb-10 text-sm text-plum-500">
      {{ bookThemes[selected].description }}
    </p>

    <div
      v-if="status === 'pending'"
      class="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3"
      aria-busy="true"
    >
      <div
        v-for="n in 6"
        :key="n"
        class="aspect-[3/4] animate-pulse rounded-xl bg-paper-200"
      />
    </div>

    <TransitionGroup
      v-else
      tag="div"
      class="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3"
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0 translate-y-2"
    >
      <Book
        v-for="book in filteredBooks"
        :key="book.title"
        :title="book.title"
        :author="book.author"
        :summary="book.summary"
        :color="book.color"
        :link="book.link"
        :tags="book.tags"
      />
    </TransitionGroup>
  </div>
</template>
