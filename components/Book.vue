<template>
  <div
    class="book-container w-64 h-96 perspective-1000"
    @mouseenter="isFlipped = true"
    @mouseleave="isFlipped = false"
    :aria-label="ariaLabel"
  >
    <div
      class="book relative w-full h-full transition-transform duration-1000 transform-style-3d"
      :class="{ 'rotate-y-180': isFlipped }"
    >
      <!-- Front Cover -->
      <div
        class="absolute w-full h-full backface-hidden rounded-r-lg shadow-2xl flex flex-col justify-between p-6"
        :style="coverStyle"
        aria-label="Book front cover"
      >
        <h2 class="text-3xl font-extrabold text-white">{{ title }}</h2>
        <p class="text-lg text-white">{{ author }}</p>
        <div
          class="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
        >
          <span :class="iconClasses">B</span>
        </div>
      </div>

      <!-- Spine -->
      <div
        class="absolute left-0 w-6 h-full transform -translate-x-full flex items-center justify-center shadow-inner"
        :style="coverStyle"
        aria-hidden="true"
      ></div>

      <!-- Back Cover -->
      <div
        class="absolute w-full h-full backface-hidden rounded-l-lg shadow-2xl p-6 transform rotate-y-180 flex flex-col justify-between"
        :style="coverStyle"
        aria-label="Book back cover"
      >
        <div>
          <h3 class="text-2xl font-semibold mb-4 text-white">Summary</h3>
          <p class="text-sm text-white">{{ summary }}</p>
        </div>

        <button
          class="px-4 py-2 bg-white text-black font-semibold rounded shadow-md hover:bg-gray-200"
          @click="redirectToLink"
        >
          Acheter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  author: String,
  summary: String,
  color: {
    type: String,
    default: "blue",
    validator: (value) => ["blue", "green", "purple"].includes(value),
  },
  link: String,
});

const isFlipped = ref(false);

// Computed property for dynamic aria-label
const ariaLabel = computed(() =>
  isFlipped.value
    ? "Showing book summary. Hover to see front cover."
    : "Showing book cover. Hover to see summary."
);

// Color values
const colors = {
  blue: {
    500: "#4299e1",
    700: "#2b6cb0",
  },
  green: {
    500: "#48bb78",
    700: "#2f855a",
  },
  purple: {
    500: "#b794f4",
    700: "#805ad5",
  },
};

// Computed property for dynamic styles
const coverStyle = computed(() => ({
  background: `linear-gradient(to right, ${colors[props.color][500]}, ${
    colors[props.color][700]
  })`,
}));
const iconClasses = computed(() => `text-${props.color}-500 font-bold`);

const redirectToLink = () => {
  if (props.link) {
    window.location.href = props.link;
  }
};
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

.book-container {
  transition: transform 0.5s;
}

.shadow-2xl {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

.shadow-inner {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
}
</style>
