<template>
  <div class="flex">
    <div
      @mouseleave="leftNavWidth = 1"
      @mouseover="leftNavWidth = isMobile ? 18 : 7"
      class="eggs"
    >
      <div class="flex flex-col items-center">
        <div class="egg-cover" :class="{ active: $route.path === '/' }">
          <router-link to="/">
            <div class="egg-title" :class="{ active: $route.path === '/' }">
              .accueil
            </div>
          </router-link>
          <div
            :style="`background-image: url('/images/nav/accueil.jpg')`"
            class="bg-image"
          ></div>
        </div>
        <div
          v-for="egg in eggs"
          :key="egg"
          class="egg-cover"
          :class="{ active: $route.path.startsWith(`/eggs/${egg}`) }"
        >
          <router-link
            v-if="egg !== 'market' && egg !== 'tech'"
            :to="`/eggs/${egg}`"
          >
            <div
              class="egg-title"
              :class="{ active: $route.path.startsWith(`/eggs/${egg}`) }"
            >
              .{{ egg }}
            </div>
          </router-link>

          <a
            v-if="egg === 'market'"
            target="_blank"
            href="https://www.partage.club/"
          >
            <div class="egg-title">.partage</div>
          </a>

          <a
            v-if="egg === 'tech'"
            target="_blank"
            href="https://tally.so/r/wd0XVo"
          >
            <div class="egg-title">.tech</div>
          </a>

          <div
            :style="`background-image: url('/images/nav/${egg}.jpg')`"
            class="bg-image"
          ></div>
        </div>
      </div>
    </div>

    <div class="section flex-1">
      <div>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const eggs = computed(() => {
      const tabs = ["transition", "boiler", "talk", "teach", "market", "tech"];
      return tabs.sort();
    });

    return {
      eggs,
      route,
    };
  },
};
</script>

<style>
html {
  font-family: montserrat, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.eggs {
  box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.75);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  text-align: center;
  transition: width 0.5s;
  background: rgba(6, 3, 51, 0.925);
  width: 30vw;
}

.egg-cover {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 15vh;
  transition: transform 0.1s;
  z-index: 0;
  position: relative;
}

.egg-cover:hover {
  transform: scale(1.15);
  z-index: 2;
  position: relative;
}

.egg-cover.active {
  transform: scale(1.2);
  z-index: 1;
  position: relative;
}

.egg-title {
  position: absolute;
  background: rgba(6, 3, 51, 0.87);
  width: 100%;
  height: 15vh;
  padding: 4vh;
  font-size: 55px;
  color: white !important;
}

.egg-title.active {
  background: rgba(51, 48, 3, 0.479);
}

.egg-title:hover {
  background: rgba(34, 32, 2, 0.699);
}

.bg-image {
  width: 100%;
  height: 15vh;
  background-size: cover;
}

.section {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  padding-left: 6px;
  transition: width 0.5s;
}
</style>
