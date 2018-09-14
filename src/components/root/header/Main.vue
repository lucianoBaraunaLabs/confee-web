<template>
    <div>
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <Brand @toggle="onToggleMenu" />
          <div class="collapse navbar-collapse" :class="{ in: isOpen }" id="navbarResponsive">
            <Left />
            <Right />
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
import Brand from './brand'
import Left from './left'
import Right from './right'

export default {
  name: 'confee-header',
  components: {
    Brand,
    Left,
    Right
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    onToggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>

</style>
