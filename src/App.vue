<template>
  <div id="app">
    <RootHeader/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RootHeader from './components/root/header.vue'

export default {
  name: 'app',
  components: {
    RootHeader
  }
}
</script>

<style lang="scss">
@import 'assets/sass/app.scss';

</style>
