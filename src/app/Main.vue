<template>
  <div id="app">
    <RootHeader/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RootHeader from '@/components/root/header/Main.vue'
export default {
  name: 'App',
  components: {
    RootHeader
  }
}
</script>

<style lang="scss">
@import '../assets/sass/app.scss';

</style>
