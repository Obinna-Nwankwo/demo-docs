<template>
  <div>
    <NuxtLayout>
      <header>
        <ul class="flex">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/events">Events</nuxt-link>
          </li>
        </ul>
      </header>
        <NuxtPage  />
    </NuxtLayout>
  </div>
</template>
