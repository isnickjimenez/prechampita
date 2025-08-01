<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
  "/img/banner_prechampita.png",
  "/img/banner_prechampita.png"
];


const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const setSlide = (index) => {
  currentIndex.value = index;
};

// Iniciar el carrusel automático
onMounted(() => {
  interval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
});

// Detener el carrusel al salir
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="carousel">
    <transition name="fade" mode="out-in">
      <img :src="images[currentIndex]" :key="images[currentIndex]" class="carousel-image" />
    </transition>

    <!-- Indicadores en la parte inferior -->
    <div class="indicators">
      <span v-for="(image, index) in images" :key="index"
        @click="setSlide(index)"
        :class="{ active: index === currentIndex }">
      </span>
    </div>
  </div>
</template>


<style scoped>
.carousel {
  position: relative;
  width: 100vw; /* Ancho completo */
  height: 85vh; /* Altura ajustada */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Fondo para evitar espacios vacíos */
}

.carousel-image {
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Evita deformaciones */
}



/* Indicadores (puntos) */
.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicators span {
  width: 14px;
  height: 14px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
}

.indicators span.active {
  background: white;
  transform: scale(1.3);
}

/* Transición de desvanecimiento */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
