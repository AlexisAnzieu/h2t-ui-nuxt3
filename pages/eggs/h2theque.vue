<template>
  <div class="layout">
    <div class="header">
      <h1 class="title">H2tèque</h1>
      <h2 class="subtitle">🎄 Histoires vertes à glisser sous le sapin 🎄</h2>
    </div>
    <div
      class="col-span-12 md:col-span-6 lg:col-span-4 p-4"
      v-for="(item, index) in items"
      :key="index"
    >
      <div
        class="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
      >
        <div class="font-bold text-2xl mb-4 text-red-800">
          {{ item.title }}
        </div>
        <div class="text-left text-gray-600">
          {{ item.description }}
          <br /><br />
          <a :href="item.link">
            <button
              class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
            >
              Offrir
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      items: [
        {
          title: "Le Noël de M. Scrooge",
          description: `Découvrez l'histoire classique de Charles Dickens, "Un chant de Noël", où M. Scrooge apprend la vraie signification de Noël.`,
          link: "https://example.com/scrooge",
        },
        {
          title: "Les Contes de Noël",
          description: `Une collection de contes de Noël pour toute la famille, remplie de magie et de traditions festives.`,
          link: "https://example.com/contes",
        },
        {
          title: "Cuisine de Noël",
          description: `Un livre de recettes pour préparer des plats délicieux et festifs pour votre repas de Noël.`,
          link: "https://example.com/cuisine",
        },
        {
          title: "Décorations de Noël",
          description: `Un guide pour créer des décorations de Noël magnifiques et uniques pour votre maison.`,
          link: "https://example.com/decorations",
        },
        {
          title: "Histoires de Noël pour enfants",
          description: `Des histoires courtes et amusantes pour les enfants, parfaites pour les soirées de Noël.`,
          link: "https://example.com/histoires",
        },
        {
          title: "Traditions de Noël à travers le monde",
          description: `Explorez les différentes traditions de Noël célébrées dans le monde entier.`,
          link: "https://example.com/traditions",
        },
      ],
    };
  },
};
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
}

.header {
  grid-column: span 12;
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  color: #333;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
}

@media screen and (max-width: 600px) {
  .layout {
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem;
  }
}
</style>
