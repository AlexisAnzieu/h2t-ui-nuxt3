<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"
  >
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold">H2tèque</h1>
      <h2 class="text-2xl text-gray-600">
        🎄 Histoires vertes à glisser sous le sapin 🎄
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      <div v-for="book in books" :key="book.title">
        <Book
          :color="book.color"
          :title="book.title"
          :author="book.author"
          :summary="book.summary"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Book from "~/components/Book.vue";

const books = ref([
  {
    title: "The Vue.js Odyssey",
    author: "Jane Developer",
    summary:
      "Embark on an epic journey through the world of Vue.js. This comprehensive guide takes you from the basics to advanced concepts, helping you master the art of building dynamic and efficient web applications. Discover the power of reactive programming and component-based architecture in this must-read for aspiring Vue developers.",
    color: "blue",
  },
  {
    title: "Learning Vue.js 3",
    author: "John Doe",
    summary:
      "A practical guide to building modern web applications with Vue.js 3. Learn the fundamentals and advanced features of Vue.js, including the Composition API, Vue Router, and Vuex.",
    color: "green",
  },
  {
    title: "Vue.js Design Patterns",
    author: "Mary Smith",
    summary:
      "Explore common design patterns and best practices for developing scalable and maintainable Vue.js applications. This book covers patterns for state management, component design, and more.",
    color: "green",
  },
  {
    title: "The Vue.js Odyssey",
    author: "Jane Developer",
    summary:
      "Embark on an epic journey through the world of Vue.js. This comprehensive guide takes you from the basics to advanced concepts, helping you master the art of building dynamic and efficient web applications. Discover the power of reactive programming and component-based architecture in this must-read for aspiring Vue developers.",
    color: "blue",
  },
  {
    title: "Learning Vue.js 3",
    author: "John Doe",
    summary:
      "A practical guide to building modern web applications with Vue.js 3. Learn the fundamentals and advanced features of Vue.js, including the Composition API, Vue Router, and Vuex.",
    color: "blue",
  },
  {
    title: "Vue.js Design Patterns",
    author: "Mary Smith",
    summary:
      "Explore common design patterns and best practices for developing scalable and maintainable Vue.js applications. This book covers patterns for state management, component design, and more.",
    color: "purple",
  },
]);
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
