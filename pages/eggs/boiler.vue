<template>
  <div class="body bg-gray-100 min-h-screen py-8">
    <div
      v-for="session in sessions"
      :key="session.date"
      class="lg:w-5/6 lg:mx-auto md:w-full p-4"
    >
      <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-600 font-semibold">{{ session.date }}</span>
          <div class="subtitle text-lg font-bold text-gray-800">
            {{ session.title }}
          </div>
        </div>
        <div class="description">
          <template v-if="session.type === 'youtube'">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <iframe
                v-for="video in session.videos"
                :key="video"
                title="boiler"
                :width="isMobile ? '100%' : '100%'"
                height="315"
                :src="video"
                class="rounded-lg shadow-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </template>
          <template v-else-if="session.type === 'soundcloud'">
            <iframe
              title="boiler"
              width="100%"
              height="300"
              allow="autoplay"
              :src="session.src"
              class="rounded-lg shadow-md"
            ></iframe>
          </template>
          <template v-else>
            <p class="text-gray-700">{{ session.description }}</p>
            <a
              v-if="session.email"
              :href="'mailto:' + session.email"
              class="text-blue-500 hover:underline"
              >Envoie moi un mail!</a
            >
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "H2T.boiler",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Projets musicaux récurrent du réseau communautaire H2T",
        },
        { hid: "title", property: "og:title", content: "H2T.boiler" },
        {
          hid: "image",
          property: "og:image",
          content: "/images/facebook-logo-OG-boiler.png",
        },
        { property: "fb:app_id", content: "2367260910156432" },
      ],
    };
  },
  data() {
    return {
      sessions: [
        {
          date: "30 octobre 2021",
          title: "XX Halloween",
          type: "youtube",
          videos: [
            "https://www.youtube.com/embed/624X4iVqoBQ",
            "https://www.youtube.com/embed/T9wx0XTU0nA",
            "https://www.youtube.com/embed/x2UjGP_Qktc",
            "https://www.youtube.com/embed/djL3nWoRNT4",
          ],
        },
        {
          date: "18 août 2021",
          title: "Boiler Rhum",
          type: "youtube",
          videos: ["https://www.youtube.com/embed/o8SUW0flFCo"],
        },
        {
          date: "29 juillet 2021",
          title: "Jamjazz",
          type: "youtube",
          videos: ["https://www.youtube.com/embed/xWzacY1VKXE"],
        },
        {
          date: "15 avril 2021",
          title: "SoundCrate X Jeremy",
          type: "youtube",
          videos: ["https://www.youtube.com/embed/qO4ipGwr7dQ"],
        },
        {
          date: "19 février 2020",
          title: "Live Jazz",
          type: "soundcloud",
          src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/764061727&color=%2318a2d8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        },
        {
          date: "8 janvier 2020",
          title: "Dolc’Evita",
          type: "soundcloud",
          src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/740572471&color=%2318a2d8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        },
        {
          date: "18 décembre 2019",
          title: "Christmas",
          type: "text",
          description:
            "Cette session contenant une prestation vinyle live de 2 heures n'a malheureusement pas pu être enregistré faute de moyen technique. Tu souhaites apporter ton aide?",
          email: "alexis@soundmotion.ca",
        },
        {
          date: "6 novembre 2019",
          title: "Rap session",
          type: "text",
          description:
            "Cette session contenant une prestation rap live de 40 minutes n'a malheureusement pas pu être enregistré faute de moyen technique. Tu souhaites apporter ton aide?",
          email: "alexis@soundmotion.ca",
        },
        {
          date: "9 octobre 2019",
          title: "SoundCrate",
          type: "soundcloud",
          src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/695698288&color=%2318a2d8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        },
      ],
    };
  },
};
</script>

<style>
.subtitle {
  font-size: 15px;
  color: #999;
}
.body {
  text-align: center;
}
.description {
  padding: 20px;
}
iframe {
  border: 0;
}
</style>
