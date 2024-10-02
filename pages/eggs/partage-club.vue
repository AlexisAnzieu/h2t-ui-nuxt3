<template>
  <div class="body">
    <button
      class="mt-5 w-72 h-72 rounded-full text-6xl bg-red-500 text-white disabled:opacity-50"
      :disabled="disabledDoor"
      @click="openDoor"
    >
      PORTE
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const disabledDoor = computed(() => {
  const hours = new Date().getHours();
  return hours < 1;
});

const openDoor = async () => {
  useNuxtApp().$toast.promise(
    fetch("/api/openDoor", {
      method: "POST",
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
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
