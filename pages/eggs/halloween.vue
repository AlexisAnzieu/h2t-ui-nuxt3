<template>
  <div
    @click="toggleDoor"
    class="min-h-screen flex items-center justify-center bg-black overflow-hidden perspective"
  >
    <div class="relative w-full h-screen max-w-3xl mx-auto door-container">
      <!-- Door frame -->
      <div class="absolute inset-0 border-8 border-orange-900 z-10"></div>

      <!-- Door -->
      <div
        class="absolute inset-0 bg-cover bg-center cursor-pointer transition-all duration-1000 ease-in-out door"
        :class="{ 'door-open': isDoorOpen }"
        :style="{
          backgroundImage:
            'url(https://www.katebackdrop.com/cdn/shop/files/BH1045486B.jpg?v=1687526319)',
        }"
        @click="toggleDoor"
      >
        <!-- Door handle -->
        <div
          @click="toggleDoor"
          class="absolute right-4 top-1/2 w-4 h-8 bg-yellow-600 rounded-full"
        ></div>
      </div>

      <!-- Behind the door -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: 'url(/placeholder.svg?height=600&width=400)',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDoorOpen = ref(false);

const toggleDoor = () => {
  console.log("toggleDoor");
  isDoorOpen.value = !isDoorOpen.value;
};
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

.door-container {
  transform-style: preserve-3d;
}

.door {
  transform-origin: left;
  backface-visibility: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.door-open {
  transform: rotateY(-105deg);
}

@keyframes doorOpen {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-105deg);
  }
}

.door-open {
  animation: doorOpen 1s ease-in-out forwards;
}
</style>
