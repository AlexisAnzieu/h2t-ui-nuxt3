<template>
  <div class="layout">
    <div
      class="col-span-12 md:col-span-6 lg:col-span-4 p-4"
      v-for="(item, index) in items"
      :key="index"
    >
      <div
        class="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
      >
        <div class="font-bold text-2xl mb-4 text-gray-800">
          {{ item.title }}
        </div>
        <div class="text-left text-gray-600">
          {{ item.description }}
          <a
            v-if="item.contact"
            :href="`mailto:contact@h2t.club?subject=${item.contact}`"
            class="text-blue-500 underline hover:text-blue-700"
            >Contactez-nous</a
          >
          <br /><br />
          <a :href="item.link">
            <button
              class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              {{ item.buttonText }}
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
          title: "Fresque du Climat",
          description: `Nous hébergeons des ateliers de la Fresque du Climat. Si vous êtes interessés! Depuis fin 2018, l’association la Fresque du Climat œuvre pour embarquer tous les individus et toutes les organisations dans la transition, en permettant la diffusion rapide d’une compréhension partagée du défi que représente le changement climatique. Ils réalisent cette mission d’éducation et de sensibilisation auprès de tous les publics, en France et dans plus de 40 pays. L’efficacité de cet outil pédagogique et sa licence d’utilisation ont facilité sa diffusion exponentielle, avec un doublement du nombre de personnes sensibilisées tous les 5 mois.`,
          contact: "Je souhaite participer à la Fresque du Climat",
          link: "https://fresqueduclimat.org/",
          buttonText: "En savoir plus",
        },
        {
          title: "Formation Les primitifs",
          description: `Certains membres participent activement à ces formations. Depuis 2007, l’expérience des Primitifs va au-delà du cours de survie. Leur vision de la nature n’est pas naïve ou romantique, elle enseigne simplement comment vivre comme le faisaient nos ancêtres. La philosophie des Primitifs est de remplacer la peur et les mythes par des connaissances, des traditions, une conscience nouvelle et une curiosité contagieuse. En ce qui concerne les formations régulières, les tarifs sont maintenus au plus bas puisque l' objectif est la diffusion : le savoir appartient à l’enfant de la terre qui sommeille en chacun de nous.`,
          contact: "Je souhaite participer à la Fresque du Climat",
          link: "https://www.lesprimitifs.ca/nos-formations",
          buttonText: "En savoir plus",
        },
        {
          title: "Documentaires",
          description: `Nous avons référencé un bon nombre de documentaires permettant d'appréhender les enjeux des changements climatiques et sociétaux.`,
          link: "https://docs.google.com/spreadsheets/d/1lhk0222MjeaAeHhq2EMPAKu8Xzei3IeFi7ez-DjdBXM/edit?usp=sharing",
          buttonText: "Accéder à la liste",
        },
        {
          title: "Activités au Québec",
          description: `Nous avons développé un site centralisant quelques activités à faire au Québec, afin de faciliter ce besoin d'évasion tout en évitant de prendre l'avion.`,
          link: "https://acti.quebec/",
          buttonText: "Accéder à Actï",
        },
        {
          title: "Santropol Roulant",
          description: `Santropol Roulant est un centre alimentaire et une communauté intergénérationnelle. En faisant pousser de la nourriture, en la préparant, et en la livrant aux Montréalaises et Montréalais, nous créons un continuum de services inspirants et engageants au bénéfice de la communauté, et nous renforçons le tissu social montréalais en faisant grandir la sécurité alimentaire en ville et l’inclusion sociale.`,
          link: "https://santropolroulant.org/fr/",
          buttonText: "Accéder au site",
        },
        {
          title: "Les Compagnons Maraichers·ères",
          description: `Ce sont des équipes organisées et motivées de volontaires de la ville qui viennent prêter main-forte de façon ponctuelle sur des fermes écologiques de proximité.`,
          link: "https://compagnonsmaraichers.org/",
          buttonText: "Accéder au site",
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
}

@media screen and (max-width: 600px) {
  .layout {
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem;
  }
}
</style>
