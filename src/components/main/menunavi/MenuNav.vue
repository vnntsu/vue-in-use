<template>
  <div class="flex-auto mt-10 h-2/4">
    <nav>
      <ul>
        <menu-item 
          v-for="(menu, index) in menus"
          :menu="menu"
          :key="index"
        ></menu-item>
      </ul>
    </nav>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
    name: 'MenuNav',
    components: {
      MenuItem,
    },
    props: {
      menus: Array
    }
}
</script>

<style>
</style>