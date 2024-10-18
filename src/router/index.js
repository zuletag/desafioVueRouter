import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },

  
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue'),
    props: (route) => {
      return {
        nombre: 'Desayunos',
        descripcion: 'Contamos con desayunos nutritivos y deliciosos',
        precio: 2000,
        cantidad: 'Para 2 personas',
      }
    }
  },


  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

