<template>
  <div class="flex justify-center mt-10">
    <div class="w-full lg:w-5/6 p-4">
      <div class="card bg-white shadow-lg rounded-lg mb-4">
        <div
          class="card-header bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-t-lg p-4"
          id="headingDeux"
        >
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left text-white font-bold focus:outline-none"
              type="button"
            >
              H2TALK DEUX
            </button>
          </h2>
        </div>
        <div
          class="show"
          aria-labelledby="headingDeux"
          data-parent="#accordionExample"
        >
          <div class="card-body p-6 bg-gray-50">
            <div class="description">
              <div class="text-left mb-5 text-gray-700">
                SAISON Trois: Zéro préparation, zéro sujet prédéfini, zéro
                expérience. Instants de partage entre quatre femmes concernant
                la place de la femme dans la société, la fatigue morale liée à
                l'hypersensibilité, l'acceptation des réalités de chacun, la
                place de l'éducation dans le patriarcat... Merci à Perle,
                Ksénia, Camille et Pauline pour cet échange à coeur ouvert.
              </div>
              <iframe
                title="S02"
                src="https://open.spotify.com/embed/episode/78vCbGHRUVy0VEddGA1Sb5?utm_source=generator"
                :width="isMobile ? '100%' : '60%'"
                height="232"
                allow="encrypted-media"
                class="mx-auto rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="card bg-white shadow-lg rounded-lg mb-4">
        <div
          class="card-header bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg p-4"
          id="headingUn"
        >
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left text-white font-bold focus:outline-none collapsed"
              type="button"
            >
              H2TALK UN
            </button>
          </h2>
        </div>
        <div aria-labelledby="headingUn" data-parent="#accordionExample">
          <div class="card-body p-6 bg-gray-50">
            <div class="description">
              <div class="text-left mb-5 text-gray-700">
                SAISON Deux: Zéro préparation, zéro sujet prédéfini, zéro
                expérience. Tour de passe-passe écologique, spirituel, éducatif
                et rêveur entre les copains Thomas, Alexis, Victor, Pierre et
                Aymeric
              </div>
              <iframe
                title="S02"
                src="https://open.spotify.com/embed-podcast/episode/49adm7U6GQvgdmZVqafQXJ"
                :width="isMobile ? '100%' : '60%'"
                height="232"
                allow="encrypted-media"
                class="mx-auto rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="card bg-white shadow-lg rounded-lg mb-4">
        <div
          class="card-header bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg p-4"
          id="headingZero"
        >
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left text-white font-bold focus:outline-none collapsed"
              type="button"
            >
              H2TALK ZERO
            </button>
          </h2>
        </div>
        <div aria-labelledby="headingZero" data-parent="#accordionExample">
          <div class="card-body p-6 bg-gray-50">
            <div class="description">
              <div class="text-left mb-5 text-gray-700">
                Zéro préparation, zéro sujet prédéfini, zéro expérience. Tour de
                passe-passe écologique, spirituel, éducatif et rêveur entre les
                copains du Plateau Clémentin, Hugo, Sandro et Alexis.
              </div>
              <iframe
                title="S01"
                src="https://open.spotify.com/embed-podcast/episode/3LfY19oLQZZGrWhWvssp12"
                :width="isMobile ? '100%' : '60%'"
                height="232"
                allow="encrypted-media"
                class="mx-auto rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalkPage",
};
</script>

<style scoped>
.description {
  padding: 20px;
}

iframe {
  border: 0;
}
</style>
