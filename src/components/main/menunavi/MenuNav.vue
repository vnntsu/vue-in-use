<template>
  <div class="flex-auto mt-10 h-2/4">
    <nav>
      <ul>
        <menu-item 
          v-for="(menu, index) in menus"
          :menu="menu"
          :key="index"
          v-on:click="select(index)"
          :class="selectedIndex === index ? '':'normal'"
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
    },
    data: () => {
      return {
        selectedIndex: 0
      }
    },
    methods: {
      select: function (index) {
        alert('dkmmmmmmmmmm')
        console.log(index)
        this.selectedIndex = index
      }
    }
}
</script>

<style scoped>
.normal {
  color: #646464;
}
</style>