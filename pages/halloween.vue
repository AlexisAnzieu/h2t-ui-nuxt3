<template>
  <div class="fullscreen-container" @click="openDoor">
    <transition name="door">
      <div v-if="!isDoorOpen" class="door">
        <img :src="doorImageUrl" alt="Door" class="fullscreen-image" />
      </div>
    </transition>
    <div class="hidden-content" :class="{ visible: isDoorOpen }">
      <img
        :src="hiddenImageUrl"
        alt="Hidden Content"
        class="fullscreen-image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDoorOpen = ref(false);
const doorImageUrl = "/images/halloween/door.jpg";
const hiddenImageUrl = "/images/halloween/stairs.jpg";

const openDoor = async () => {
  if (isDoorOpen.value) {
    return;
  }
  fetch("/api/openDoor", {
    method: "GET",
  });
  isDoorOpen.value = true;
};
</script>

<style scoped>
.fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.door {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: left;
  transition: transform 1.5s ease-in-out;
}

.door-enter-active,
.door-leave-active {
  transform: perspective(1200px) rotateY(-105deg);
}

.hidden-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.hidden-content.visible {
  opacity: 1;
}
</style>
