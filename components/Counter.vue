<template>
        <div>
        Counter : {{ counter  }}
        <button @click="counter++" class="py-2 px-4 border rounded-lg shadwo font-black">+</button>
        <button @click="counter--" class="py-2 px-4 border rounded-lg shadwo font-black">-</button>
    </div>
    
</template>


<script setup>
    const counter =  useCounter();

</script>