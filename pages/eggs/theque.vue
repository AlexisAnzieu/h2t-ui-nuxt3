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

const filter = ref<BookTheme | "">("");
const themeKeys = Object.keys(bookThemes) as BookTheme[];

const countFor = (key: BookTheme) =>
  books.value.filter((b) => b.color === key).length;

const shelf = computed(() =>
  filter.value ? books.value.filter((b) => b.color === filter.value) : books.value
);

// Livre sorti de l'étagère, affiché dans la modale
const selected = ref<Book>();
const isOpen = ref(false);

const select = (book: Book) => {
  selected.value = book;
  isOpen.value = true;
};
</script>

<template>
  <div>
    <UiPageHeader
      egg="theque"
      :lines="['Des livres', 'sous le sapin']"
      :accent="1"
    >
      Les lectures qui ont marqué la communauté, à offrir ou à s'offrir.
      Tire un livre de l'étagère pour lire sa quatrième de couverture.
    </UiPageHeader>

    <div class="mb-12 flex flex-wrap gap-3" role="group" aria-label="Filtrer par thématique">
      <UiChip :active="filter === ''" @click="filter = ''">
        Tout <span class="font-mono text-xs opacity-70">{{ books.length }}</span>
      </UiChip>
      <UiChip
        v-for="key in themeKeys"
        :key="key"
        :active="filter === key"
        :title="bookThemes[key].description"
        @click="filter = key"
      >
        <span class="h-3 w-3 border-2 border-current" :class="bookThemes[key].bg" aria-hidden="true" />
        {{ bookThemes[key].label }}
        <span class="font-mono text-xs opacity-70">{{ countFor(key) }}</span>
      </UiChip>
    </div>

    <!-- Étagère -->
    <div
      v-if="status === 'pending'"
      class="h-72 animate-pulse border-b-[12px] border-ink bg-paper-200"
      aria-busy="true"
    />
    <div v-else class="flex flex-wrap items-end gap-y-12 pt-8">
      <ThequeSpine
        v-for="book in shelf"
        :key="book.title"
        :book="book"
        :selected="isOpen && book.title === selected?.title"
        @select="select(book)"
      />
    </div>

    <!-- Livre sorti -->
    <UiModal v-model:open="isOpen" :label="selected?.title ?? 'Livre'">
      <ThequeBookCard v-if="selected" :book="selected" />
    </UiModal>
  </div>
</template>
