<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark padding">
  <NuxtLink class="navbar-brand" to="/">
    <b-img id="logo" src="~/assets/images/logo.png"></b-img>
  </NuxtLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
              <NuxtLink to="/products" class="nav-link">Partners <span class="sr-only">(current)</span></NuxtLink>
          </li>
          <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Orders<span class="sr-only">(current)</span></NuxtLink>
          </li>
      </ul>
  </div>
  </nav>

</template>

<script>
import { getters } from 'vuex'

export default {
  computed: {
  }
}
</script>

<style scoped>
#logo {
  width: 80px;
}
</style>
