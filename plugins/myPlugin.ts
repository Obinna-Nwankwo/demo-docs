export default defineNuxtPlugin((nuxtApp) => {
   return {
    provide: {
        sayHello: (msg: string) => console.log(`Hello ${msg}`),
    },
   };
});

// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.hook('page:start', () => {
//       /* your code goes here */
//     });
//   });
  