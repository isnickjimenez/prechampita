<script setup>
const logoUrl = "/img/nosotros.png"; // Imagen de la academia
</script>

<template>
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <!-- Texto -->
      <div class="md:w-1/2 text-center md:text-left px-6">
        <h3 class="italic text-2xl text-gray-700">La educación transforma vidas</h3>
        <h2 class="text-4xl font-bold text-[#000000] mt-2">
          ¡Únete a <span class="text-[#3E610A]">PRECHAMPITA</span> y alcanza tu meta!
        </h2>
        <p class="text-gray-600 mt-4">
          Nuestra academia preuniversitaria gratuita te brinda la mejor preparación para tu examen de ingreso.
          Accede a contenido de calidad, docentes experimentados y un ambiente motivador.
        </p>
        <!-- <button class="mt-6 px-6 py-3 bg-[#3E610A] text-white font-semibold rounded-lg shadow-md hover:bg-[#dfcd0e] transition-all">
            Inscríbete Ahora
        </button> -->
      </div>

      <!-- Imagen -->
      <div class="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img :src="logoUrl" alt="Academia Preuniversitaria" class="w-full max-w-md">
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1100px;
}
</style>
