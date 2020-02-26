<template>
  <li class="my-4 hover:text-white hover:underline hover:border-gray-300"><a href="#" class="">{{ menu }}</a></li>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
      menu: String
    }
}
</script>

<style>
</style>