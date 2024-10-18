<template lang="">
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container px-4">
      <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="logo de suricata" /></a>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <router-link class="navItem" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="navItem" to="/products">Productos</router-link>
            <!-- <a class="nav-link text-light" href="#">Productos</a> -->
          </li>
          <li class="nav-item">
            <router-link class="navItem" to="/contact">Contacto</router-link>
            <!-- <a class="nav-link text-light" href="#">Contacto</a> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.navItem {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin: 10px;
  &:hover {
    color: #14a2b8;
  }
}
</style>