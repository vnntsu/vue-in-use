<template>
  <div class="flex flex-col w-full sm:w-1/3 lg:w-1/5 bg-header px-10 pt-10 pb-5">
    <div class="flex-1">
      <h1 class="sm:text-base md:text-xl lg:text-2xl h-24">{{ name }}</h1>
      <p class="sm:text-xs md:text-sm">{{ bio }}</p>
    </div>

    <menu-nav
      :menus="menus"
    ></menu-nav>

    <div class="flex-1 sm:text-xs">
      <p>For business enquiries or casual chatter—do drop me a line at {{ email }}. I ♥︎ emails.</p>
      <nav>
        <ul>
          <li>github</li>
          <li>twitter</li>
          <li>linkedin</li>
        </ul>
      </nav>
    </div>
  </div>
    
</template>

<script>
import MenuNav from './menunavi/MenuNav.vue'

export default {
    name: 'Header',
    components: {
      MenuNav
    },
    props: {
      name: String,
      bio: String,
      menus: Array,
      email: String
    }
}
</script>

<style>
</style>