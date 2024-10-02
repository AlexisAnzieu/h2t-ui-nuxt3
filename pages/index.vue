<template>
  <div class="container mx-auto p-6">
    <header class="text-center py-6">
      <h1 class="text-4xl font-bold">Bienvenue sur H2T</h1>
      <p class="text-lg text-gray-600">
        La plateforme intra-communautaire locale
      </p>
    </header>
    <main class="grid grid-cols-1 gap-6">
      <div
        class="text-lg px-10 leading-7 text-justify bg-white p-6 rounded-lg shadow-md"
      >
        <p class="mb-4">
          Tout d'abord, bienvenue sur la plateforme intra-communautaire locale
          <strong>H2T</strong>!
        </p>
        <section class="mb-6">
          <h3 class="text-left font-bold text-xl mb-2">
            Plateforme intra-communautaire locale?
          </h3>
          <p>
            Le but de cette plateforme est de créer et d'entretenir un réseau de
            relations bienveillantes à travers des projets communs locaux
            (écologie, débats, radio, musique...). Autrement dit, un forum de
            partage de biens, de service et d'idées dans un cercle restreint.
          </p>
        </section>
        <section class="mb-6">
          <h3 class="text-left font-bold text-xl mb-2">Que signifie H2T?</h3>
          <p>
            La signification de H2T n'est pas fixe. Elle peut varier en fonction
            des projets et au gré du vent donc à toi de la définir comme tu le
            souhaites. Cependant lors de sa création elle portait sur trois
            idées:
          </p>
          <ul class="list-disc list-inside ml-4 mt-2">
            <li>👉 Code postal du Plateau-Mont-Royal (projet local)</li>
            <li>👉 House 2 Techno (projet musical)</li>
            <li>👉 Head 2 Toe - De la tête aux pieds (projet thématique)</li>
          </ul>
        </section>
        <section class="mb-6">
          <h3 class="text-left font-bold text-xl mb-2">
            Pourquoi ne pas créer un groupe Facebook?
          </h3>
          <p>
            La principale raison concerne l'indépendance de cette plateforme et
            de ses usagers. Ici, les données ne sont pas vendues à d'autres
            organismes (le coût de l'hébergement du site est de 100$/an donc nul
            besoin d'élaborer de stratégie publicitaire). En outre, il est
            possible de coder de nouvelles fonctionnalités dépendamment des
            besoins grandissants de la future communauté, le code source étant
            <a
              href="https://github.com/AlexisAnzieu/h2t-ui"
              class="text-blue-500 underline"
              >entièrement disponible en ligne</a
            >. Ce qui n'est pas le cas avec Facebook.
          </p>
        </section>
        <div class="border-t border-gray-300 my-6"></div>
        <p>
          PS: Si un trouble persiste dans ton esprit, envoie le à l'adresse
          email
          <a
            rel="noopener noreferrer"
            target="_blank"
            :href="`mailto:contact@h2t.club?subject=Je souhaite poser une question sur H2T`"
            class="text-blue-500 underline"
            >contact@h2t.club</a
          >. Une réponse te sera renvoyée et si la question se complète avec
          celles ci-dessus, elle sera ajoutée sur la page à son tour.
        </p>
      </div>
    </main>
    <footer class="text-center py-6 mt-10">
      <p class="text-gray-600">Codé avec ❤ à Montréal</p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    currentDateWord() {
      const hours = new Date().getHours();
      const isDayTime = hours > 5 && hours < 16;
      return isDayTime ? "journée ☀️" : "soirée 🌙";
    },
  },
};
</script>
