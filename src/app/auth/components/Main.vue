<template>
    <div>
        <header class="page-headerrow">
            <h2>Confee auth</h2>
        </header>
        <Login />
    </div>
</template>

<script>
import Login from './Forms/Login'

export default {
  name: 'auth',
  components: { Login }
}
</script>

<style scoped>

</style>
