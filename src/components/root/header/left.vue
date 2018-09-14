<template>
    <ul class="navbar-nav ml-auto">
        <!-- <li class="nav-item active">
            <a class="nav-link" href="#">Home
            <span class="sr-only">(current)</span>
            </a>
            <a>Home</a>
        </li> -->
        <router-link :to="{ name: 'dashboard.main' }" tag="li" class="nav-item" exact>
            <a class="nav-link">Home</a>
        </router-link>
    </ul>
</template>

<script>
export default {

}
</script>
