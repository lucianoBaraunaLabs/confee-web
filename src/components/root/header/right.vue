<template>
    <ul class="nav navbar-nav navbar-right">
      <router-link to="/auth" tag="li" class="nav-item" v-if="!isLogged">
        <a class="nav-link">Entrar</a>
      </router-link>
      <li class="dropdown" :class="{ open: isOpenUser}" v-if="isLogged">
        <a href="javascript:;"
          @click="toggleUserMenu"
          class="dropdown-toggle">{{ currentUser.name }} <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 1</a></li>
          <li class="divider"><a href="">Link 1</a></li>
          <li><a href="">Link 1</a></li>
        </ul>
      </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isOpenUser: false
    }
  },
  computed: {
    ...mapGetters(['isLogged', 'currentUser'])
  },
  methods: {
    toggleUserMenu () {
      this.isOpenUser = !this.isOpenUser
    }
  }
}
</script>
