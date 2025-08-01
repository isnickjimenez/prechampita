<template>
  <nav class="navbar">
    <Navbar />
  </nav>
  <section class="banner">
    <Banner />
    </section>
  
  <About /> 
  <!-- Sección de planes -->
  <div class="relative w-full">
  </div>

  <div class="relative w-full">
<br>
  </div>
  <Cycles />
  <Services />
  <Faq />
  <!-- <News /> -->
  <!-- <BR></BR> -->
  <!-- <Map /> -->
  
  <!-- Modal que se abre automáticamente -->
  <Modal v-if="showModal" @close="showModal = false"/>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '../Components/Navbar.vue';
import Banner from '../Components/Banner.vue';
import About from '../Components/About.vue';
// import Card from '../Components/Card.vue';
// import Map from '../Components/Map.vue';
// import Footer from '../Components/Footer.vue';
import Modal from '../Components/Modal.vue';
// import News from '@/Components/News.vue';
import Faq from '@/Components/Faq.vue';
import Cycles from '@/Components/Cycles.vue';
import Services from '@/Components/Services.vue';



const showModal = ref(false);

onMounted(() => {
  showModal.value = true;
});
</script>

<style scoped>

  .navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: white;
  height: 80px; /* Ajusta la altura según tu diseño */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Opcional: sombra para diferenciar el navbar */
}

.banner {
  margin-top: 70px; /* Ajusta según la altura del navbar */
  position: relative;
  z-index: 1;
}
</style>
