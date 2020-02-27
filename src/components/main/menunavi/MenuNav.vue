<template>
  <div class="flex-auto mt-10 h-2/4">
    <nav>
      <ul>
        <menu-item 
          v-for="(menu, index) in menus"
          :menu="menu"
          :index="index"
          :selectedIndex="selectedIndex"
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
    },
    data: () => {
      return {
        selectedIndex: 2
      }
    },
    methods: {
      select(index) {
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