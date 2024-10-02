<template>
  <div class="layout flex justify-center items-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-6">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
          <h2 class="text-white text-lg font-semibold">
            Bonnes pratiques de finances personnelles
          </h2>
        </div>
        <div class="p-6 text-left">
          <p class="text-gray-700">
            Démystifier le monde de l'investissement afin d'atteindre
            l'indépendance financière en quelques étapes:
          </p>
          <ul class="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>REER et CELI, c’est quoi?</li>
            <li>RAP et achat immobilier</li>
            <li>Principe de base d’investissements</li>
            <li>Atteindre l’indépendance financière</li>
            <li>Fiscalité</li>
            <li>Retour en France</li>
          </ul>
          <div class="mt-6 text-center">
            <a href="/assets/Investissement.pdf">
              <button
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Accéder à la présentation
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.layout {
  padding-left: 40px;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .layout {
    padding-left: 20px;
  }
}
</style>
