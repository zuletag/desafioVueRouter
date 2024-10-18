<template lang="">
  <section class="container" id="contacto">
    <h1 class="text-center">Contáctanos</h1>
    <div class="row justify-content-center">
      <div class="col-sm-6 col-12 px-5 mb-4">
        <form @submit.prevent="enviarFormulario">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <input
              type="text"
              v-model="nombre"
              class="form-control"
              id="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico:</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje:</label>
            <textarea
              v-model="mensaje"
              class="form-control"
              id="message"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100">Enviar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            nombre: "",
            email: "",
            mensaje: "",
        };
    },
    methods: {
        enviarFormulario() {
            alert(`Formulario enviado por ${this.nombre}`);
        },
    },
};
</script>

<style s>
.form-control {
    border-radius: 5px;
}

.btn {
    padding: 10px;
}
</style>
