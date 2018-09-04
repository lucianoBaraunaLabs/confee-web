<template>
    <div>
        <router-link to="/" class="navbar-brand">Confee</router-link>
        <button class="navbar-toggler" type="button" @click="toggle">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</template>

<script>
export default {
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>
