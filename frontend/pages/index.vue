<template>
  <header class="relative min-h-screen bg-center bg-cover bg-backgroundColor">
    <div
      class="absolute sm:text-left text-center top-1/3 left-5 lg:left-40 transform translate-y-0.5 text-white"
    >
      <h1 class="text-7xl">Contacts task</h1>
      <p class="my-4 text-3xl font-light">Go find out your contacts ️</p>
      <nuxt-link class="text-2xl" to="/contacts">
        View Contacts <span class="ml-2">&rarr;</span>
      </nuxt-link>
    </div>
  </header>
</template>
<script>
export default {
  head() {
    return {
      title: 'Home page',
    }
  },
}
</script>
