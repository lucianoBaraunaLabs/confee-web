<template>
    <div>
        <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <Brand @toggle="onToggleMenu" />
        <div class="collapse navbar-collapse" :class="{ in: isOpen }" id="navbarResponsive">
          <Left />
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="mt-5">A Bootstrap 4 Starter Template</h1>
          <p class="lead">Complete with pre-defined file paths and responsive navigation!</p>
          <ul class="list-unstyled">
            <li>Bootstrap 4.1.3</li>
            <li>jQuery 3.3.1</li>
          </ul>
        </div>
      </div>
    </div>

    </div>
</template>

<script>
import Brand from './brand'
import Left from './left'
export default {
  name: 'confee-header',
  components: {
    Brand,
    Left
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
