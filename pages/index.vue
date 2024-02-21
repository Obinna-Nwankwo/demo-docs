
<template> 
 <!-- <ContentDoc /> -->
 <Alert />
 <div>
     <div class="container py-3 mx-auto Main">
         <!-- <h1 class="text-white">Hello Nuxt 3</h1> -->
         <!-- <img src="~assets/code-img.jfif" alt=""> -->
         <!-- <img src="@/assets/code-img.jfif" alt=""> -->
            <!-- Counter : {{ counter  }}
         <button @click="counter++" class="py-2 px-4 border rounded-lg shadwo font-black">+</button>
         <button @click="counter--" class="py-2 px-4 border rounded-lg shadwo font-black">-</button>
        
         -->
        </div>
        <Counter />
        <div>
<!-- <pre>{{ data }}</pre> -->
         <p>{{ pending ? "Loading...." : productCount }}</p>
         <button @click="refresh">Refresh</button>
        </div>


 </div>
    
</template>


<script setup lang="ts">
//    const { $sayHello }  =  useNuxtApp();
//         $sayHello("Hello me");
// const counter =  useCounter();
// import { useCounterStore } from  "~/stores/myStore";
// const store  =  useCounterStore();

// console.log(store);

// const { data } = await useFetch("/api/hello");
// console.log(data);

const { data: productCount, pending } = await useAsyncData("products", () => $fetch("/api/products"));

function refresh(){ refreshNuxtData("products")};




useHead({
    title: "This Nuxt Demo Project",
  meta: [
    { name: 'description', content: "you can fined alot here " }
  ],
})
</script>