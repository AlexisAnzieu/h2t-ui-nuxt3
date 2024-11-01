<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"
  >
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold">H2tèque</h1>
      <h2 class="text-2xl text-gray-600">
        🎄 Cadeaux à glisser sous le sapin 🎄
      </h2>
    </div>
    <div class="mb-8">
      <label
        for="colorFilter"
        class="text-lg font-medium text-gray-700 mb-2 mr-4"
        >Filtrer par thématique:</label
      >
      <div class="relative inline-block w-full md:w-1/2 lg:w-1/3">
        <select
          id="colorFilter"
          v-model="selectedColor"
          class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option value="">Tout</option>
          <option value="blue">
            Livres philosophiques, anthropologiques et de réflexion sociale
          </option>
          <option value="green">
            Livres liés à la nature, l'écologie et l'environnement
          </option>
          <option value="purple">
            Romans historiques, sagas familiales et récits personnels
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      <div v-for="book in filteredBooks" :key="book.title">
        <Book
          :color="book.color"
          :title="book.title"
          :author="book.author"
          :summary="book.summary"
          :link="book.link"
          :tags="book.tags"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Book from "~/components/Book.vue";

const books = ref([]);
const selectedColor = ref("");

const fetchBooks = async () => {
  try {
    const response = await fetch("/api/books");
    books.value = await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

onMounted(() => {
  fetchBooks();
});

const filteredBooks = computed(() => {
  if (!selectedColor.value) {
    return books.value;
  }
  return books.value.filter((book) => book.color === selectedColor.value);
});
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
