<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-14 md:py-12">
      <div
        class="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto"
      >
        <div class="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 md:p-6">
          <h2 class="text-white text-lg md:text-xl font-semibold">
            Quand a été inventé le terme "data science" ?
          </h2>
        </div>

        <div class="p-4 md:p-6">
          <div class="space-y-3">
            <button
              v-for="(answer, index) in answers"
              :key="index"
              @click="checkAnswer(index)"
              class="w-full min-h-[60px] text-left rounded-lg transition-all duration-300 border-2 active:scale-98 touch-manipulation"
              :class="[
                selectedAnswer === index
                  ? isCorrect
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'bg-red-50 border-red-500 text-red-700'
                  : 'bg-white border-gray-200 hover:border-indigo-500 text-gray-700 hover:bg-indigo-50',
              ]"
            >
              <div class="flex items-center p-3 md:p-4">
                <div
                  class="w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-3"
                  :class="[
                    selectedAnswer === index
                      ? isCorrect
                        ? 'border-green-500 bg-green-100'
                        : 'border-red-500 bg-red-100'
                      : 'border-gray-300',
                  ]"
                >
                  <span
                    v-if="selectedAnswer === index"
                    class="text-sm font-bold"
                    :class="isCorrect ? 'text-green-500' : 'text-red-500'"
                  >
                    {{ isCorrect ? "✓" : "×" }}
                  </span>
                </div>
                <span class="text-base md:text-lg">{{ answer.text }}</span>
              </div>
            </button>
          </div>

          <div
            v-if="showExplanation"
            class="mt-6 p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-200"
          >
            <h4 class="text-base md:text-lg font-semibold text-blue-800 mb-2">
              Explication
            </h4>
            <p class="text-sm md:text-base text-blue-700 leading-relaxed">
              Le terme "data science" a été inventé en 1974 par Peter Naur. Il
              l'a utilisé pour la première fois dans son livre "Concise Survey
              of Computer Methods" pour décrire le traitement des données dans
              un large éventail d'applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "H2T.data-science",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Quiz sur l'histoire de la data science",
        },
        { hid: "title", property: "og:title", content: "H2T.data-science" },
      ],
    };
  },
  data() {
    return {
      answers: [
        {
          text: "1960 - Avec l'émergence des premiers ordinateurs",
          correct: false,
        },
        { text: "1974 - Par Peter Naur", correct: true },
        { text: "1990 - Avec l'essor d'Internet", correct: false },
        { text: "2001 - Par William S. Cleveland", correct: false },
      ],
      selectedAnswer: null,
      showExplanation: false,
      isCorrect: false,
    };
  },
  methods: {
    async checkAnswer(index) {
      this.selectedAnswer = index;
      this.isCorrect = this.answers[index].correct;
      if (this.isCorrect) {
        useNuxtApp().$toast.promise(
          fetch("/api/openDoor", {
            method: "GET",
          })
            .then((result) => result.json())
            .then((data) => {
              if (data.msg === "ok") {
                return "Porte ouverte";
              } else {
                throw new Error("Erreur lors de l'ouverture de la porte");
              }
            }),
          {
            pending: "Ouverture de la porte...",
            success: "Porte ouverte 👌",
            error: "Erreur lors de l'ouverture de la porte 🤯",
          }
        );
        this.showExplanation = true;
      }
    },
  },
};
</script>

<style>
.active\:scale-98:active {
  transform: scale(0.98);
}

.touch-manipulation {
  touch-action: manipulation;
}
</style>
