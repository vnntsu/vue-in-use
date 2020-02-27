<template>
  <div id="app">
    <div class="flex flex-col sm:flex-row h-screen font-mono">
      <header-nav 
        :name="name"
        :bio="bio"
        :email="email"
        :menus="menus"
      ></header-nav>
      <Main msg="Welcome to My Page"/>
    </div>
  </div>
</template>

<script>
import Main from './components/main/Main.vue'
import HeaderNav from './components/main/Header.vue'

export default {
  name: 'App',
  components: {
    Main,
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
    background-color: #191919;
  }
  .main-content {
    background-color: #000;
  }

</style>
