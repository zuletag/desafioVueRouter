<template>
    <Form 
    :nombre="nombre"
    :email="email"
    :mensaje="mensaje"
    />
    <div class="d-flex justify-content-center mb-5">
      <button type="button" class="btn btn-primary btn-lg rounded-pill" @click="volverInicio">Volver Al Inicio</button>
     </div>
</template>
  
<script>
  // @ is an alias to /src
  import Form from '../components/Form.vue'
  
  export default {
    components: {
      Form
    },

    props: {
      nombre: String,
      email: String,
      mensaje: String
    },

    methods: {
      volverInicio() {
        return this.$router.push('/')
      }
    },
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