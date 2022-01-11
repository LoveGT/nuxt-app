import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp, "nuxtApp");
  return {
    provide: {
      hello: () => "world",
    },
  };
});
