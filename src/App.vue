<template>
  <div id="app">
    <div class="flex flex-col sm:flex-row h-screen font-mono">
      <header-nav 
        :name="name"
        :bio="bio"
        :email="email"
        :menus="menus"
      ></header-nav>
      <home msg="Welcome to My Page"/>
    </div>
  </div>
</template>

<script>
import Home from './components/main/Home.vue'
import HeaderNav from './components/main/Header.vue'

export default {
  name: 'App',
  components: {
    Home,
    HeaderNav
  },
  data: function() {
    return {
      name: "su ng_",
      bio: "I am a Softwre Engineer - iOS Developer",
      email: "vnntsu@gmail",
      menus: ["HOME", "PORTFOLIO", "ARTICLES", "NOTES", "CONTACT"]
    }
  }
}
</script>

<style scoped>
  .bg-header {
    background-color: #9E9E9E;
  }
  .main-content {
    background-color: #191919;
  }

</style>
