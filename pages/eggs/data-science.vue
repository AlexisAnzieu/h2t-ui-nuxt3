<script setup lang="ts">
useSeoMeta({
  title: "Data science",
  ogTitle: "H2T.data-science",
  description: "Quiz sur l'histoire de la data science",
});

const answers = [
  { year: "1960", text: "Avec l'émergence des premiers ordinateurs", correct: false },
  { year: "1974", text: "Par Peter Naur", correct: true },
  { year: "1990", text: "Avec l'essor d'Internet", correct: false },
  { year: "2001", text: "Par William S. Cleveland", correct: false },
];
const letters = ["A", "B", "C", "D"];

const selected = ref<number | null>(null);
const solved = ref(false);
const { openDoor } = useOpenDoor();

const choose = (index: number) => {
  if (solved.value) return;
  selected.value = index;
  if (answers[index].correct) {
    solved.value = true;
    openDoor();
  }
};

const stateOf = (index: number) => {
  if (selected.value !== index) return "idle";
  return answers[index].correct ? "correct" : "wrong";
};
</script>

<template>
  <div>
    <UiPageHeader
      egg="data-science"
      size="lg"
      :lines="['Quand a été inventé', 'le terme', '« data science » ?']"
      :accent="2"
    >
      Trouve la bonne réponse pour ouvrir la porte.
    </UiPageHeader>

    <div class="grid gap-5 md:grid-cols-2" role="radiogroup" aria-label="Réponses">
      <button
        v-for="(answer, index) in answers"
        :key="answer.year"
        type="button"
        role="radio"
        :aria-checked="selected === index"
        :disabled="solved && !answer.correct"
        class="group relative flex items-stretch overflow-hidden border-2 border-ink text-left shadow-hard-lg transition-[transform,box-shadow] duration-150 enabled:hover:-translate-x-1 enabled:hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-35"
        :class="{
          'bg-paper-50': stateOf(index) === 'idle',
          'bg-riso-green text-white': stateOf(index) === 'correct',
          'animate-shake bg-brand text-white': stateOf(index) === 'wrong',
        }"
        @click="choose(index)"
      >
        <span
          class="grid w-16 shrink-0 place-items-center border-r-2 border-ink font-display text-4xl font-black font-condensed transition-colors md:w-20"
          :class="stateOf(index) === 'idle' ? 'bg-sun group-hover:bg-brand group-hover:text-white' : 'bg-ink text-paper'"
        >
          {{ letters[index] }}
        </span>
        <span class="flex flex-col justify-center p-5">
          <span class="font-display text-6xl font-black leading-[0.85] font-condensed md:text-7xl">
            {{ answer.year }}
          </span>
          <span class="mt-2 text-lg font-semibold leading-tight">{{ answer.text }}</span>
        </span>

        <!-- Tampon -->
        <span
          v-if="stateOf(index) !== 'idle'"
          :key="`stamp-${selected}`"
          class="absolute right-4 top-4 animate-stamp border-[3px] border-current px-2 py-0.5 font-display text-2xl font-black uppercase font-condensed md:text-3xl"
          aria-hidden="true"
        >
          {{ stateOf(index) === "correct" ? "Bravo !" : "Raté" }}
        </span>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-4 -rotate-1"
    >
      <UiCard v-if="solved" tone="sun" padding="lg" class="mt-12 -rotate-[0.6deg]">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
          ✺ Explication
        </p>
        <p class="mt-4 max-w-3xl text-xl font-medium leading-snug md:text-2xl">
          Le terme « data science » a été inventé en
          <strong class="font-black">1974</strong> par Peter Naur. Il l'a
          utilisé pour la première fois dans son livre
          <em>Concise Survey of Computer Methods</em> pour décrire le traitement
          des données dans un large éventail d'applications.
        </p>
      </UiCard>
    </Transition>
  </div>
</template>
