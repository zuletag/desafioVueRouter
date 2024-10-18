<template>
  
    <Card
    :nombre="nombre"
    :descripcion="descripcion"
    :precio="precio"
    :cantidad="cantidad"
     />

     <div class="d-flex justify-content-center mb-5">
      <button type="button" class="btn btn-primary btn-lg rounded-pill" @click="volverInicio">Volver Al Inicio</button>
     </div>

</template>
  
<script>
// Importamos el componente Card
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  },

  props: {
    nombre:"",
    descripcion:"",
    precio:"",
    cantidad:"",
  },
  
  methods: {
    volverInicio() {
      return this.$router.push('/')
    }
  }
}
</script>

<style>
button {
  background-color: #14a2b8!important;
  border-color: #14a2b8!important;
  &:hover {
    opacity: 0.8;
  }
}
</style>