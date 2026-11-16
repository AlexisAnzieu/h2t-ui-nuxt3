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
  <div class="mx-auto max-w-2xl">
    <UiPageHeader eyebrow=".data-science · Quiz" title="Quand a été inventé le terme « data science » ?">
      Trouve la bonne réponse pour ouvrir la porte.
    </UiPageHeader>

    <div class="space-y-3" role="radiogroup" aria-label="Réponses">
      <button
        v-for="(answer, index) in answers"
        :key="answer.year"
        type="button"
        role="radio"
        :aria-checked="selected === index"
        :disabled="solved && !answer.correct"
        class="group flex w-full items-center gap-5 rounded-2xl p-4 text-left shadow-card transition-all duration-200 active:scale-[0.99] disabled:opacity-40 md:p-5"
        :class="{
          'bg-white ring-1 ring-paper-200 hover:-translate-y-0.5 hover:ring-plum-300': stateOf(index) === 'idle',
          'bg-forest-100 ring-2 ring-forest-500': stateOf(index) === 'correct',
          'animate-shake bg-brand-50 ring-2 ring-brand-500': stateOf(index) === 'wrong',
        }"
        @click="choose(index)"
      >
        <span
          class="w-20 shrink-0 font-display text-3xl font-extrabold tabular-nums tracking-tight md:w-24 md:text-4xl"
          :class="{
            'text-plum-300 group-hover:text-plum-900': stateOf(index) === 'idle',
            'text-forest-500': stateOf(index) === 'correct',
            'text-brand-500': stateOf(index) === 'wrong',
          }"
        >
          {{ answer.year }}
        </span>
        <span class="flex-1 text-lg text-plum-700">{{ answer.text }}</span>
        <span
          v-if="stateOf(index) !== 'idle'"
          class="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white"
          :class="stateOf(index) === 'correct' ? 'bg-forest-500' : 'bg-brand-500'"
        >
          <UiIcon :name="stateOf(index) === 'correct' ? 'check' : 'x'" :size="18" />
        </span>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0 translate-y-3"
    >
      <div v-if="solved" class="mt-8 rounded-2xl bg-plum-900 p-6 text-white md:p-8">
        <p class="eyebrow mb-3 text-plum-300">Explication</p>
        <p class="text-lg leading-relaxed text-plum-100">
          Le terme « data science » a été inventé en
          <strong class="text-white">1974</strong> par Peter Naur. Il l'a
          utilisé pour la première fois dans son livre
          <em>Concise Survey of Computer Methods</em> pour décrire le traitement
          des données dans un large éventail d'applications.
        </p>
      </div>
    </Transition>
  </div>
</template>
