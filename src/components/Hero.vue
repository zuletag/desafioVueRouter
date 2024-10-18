<template>
    <div class="hero">
        <div class="hero-content">
            <h1>BIENVENIDOS</h1>
            <p>Visita nuestros productos para mayor información</p>
            <div class="d-flex justify-content-center mb-5">
                <button type="button" class="btn btn-primary btn-lg rounded-pill" @click="irProductos">Ver Productos</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .hero {
        position: relative;
        width: 100%;
        height: 800px;
        background-image: url('../assets/img/imagenfondo.jpg');
        background-size: cover;
        background-position: center;
    }

    .hero-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
    }

    h1 {
        color: azure;
        font-size: 5rem;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 3rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
</style>

<script>
export default {
  name: 'Hero',
  methods: {
    irProductos() {
      this.$router.push('/products')
    }
  }
}
</script>

