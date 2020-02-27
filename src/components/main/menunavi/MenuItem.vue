<template>
  <li 
    @click="select(index)" 
    class="my-4 hover:text-white hover:underline hover:border-gray-300" 
    :class="selectedIndex === index ? '':'normal'">
    <router-link to="/home" class="">{{ menu }}</router-link>
  </li>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
      menu: String,
      index: Number,
      selectedIndex: Number
    },
    methods: {
      select(index) {
        this.$router.currentRoute
        console.log(index)
        this.selectedIndex = index
      }
    }
}
</script>

<style>
</style>