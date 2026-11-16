<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => (title ? `${title} · H2T` : "H2T.club"),
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
