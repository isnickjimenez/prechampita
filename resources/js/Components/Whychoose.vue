<script setup>
const logoUrl = "/img/nosotros.png";
</script>

<template>
  <section class="pt-40 pb-16 bg-gray-50">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold">
            <span class="text-[#000000]">¿Por qué elegir</span>
            <span class="text-[#3e610a]"> PRE CHAMPITA?</span>
        </h2>

      <p class="text-orange-500 mt-2 font-bold">Comprometidos con tu preparación universitaria</p>

    </div>

    <div class="container mx-auto mt-10 flex flex-col md:flex-row items-center justify-center">
      <!-- Columna Izquierda -->
      <div class="flex-1 space-y-8">
        <div class="flex items-center space-x-4">
          <i class="text-blue-600 text-2xl">📖</i>
          <div>
            <h3 class="text-lg font-semibold">Experiencia Académica</h3>
            <p class="text-gray-500 text-sm">Nuestros docentes tienen amplia experiencia en la enseñanza preuniversitaria, garantizando una preparación de calidad.</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <i class="text-blue-600 text-2xl">📚</i>
          <div>
            <h3 class="text-lg font-semibold">Material de Estudio</h3>
            <p class="text-gray-500 text-sm">Contamos con libros, guías y simulacros actualizados para fortalecer tu aprendizaje y mejorar tu rendimiento.</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <i class="text-blue-600 text-2xl">🎯</i>
          <div>
            <h3 class="text-lg font-semibold">Metodología Eficiente</h3>
            <p class="text-gray-500 text-sm">Aplicamos técnicas de estudio y resolución de exámenes para optimizar el tiempo y mejorar la comprensión de cada tema.</p>
          </div>
        </div>
      </div>

      <!-- Imagen Central -->
      <div class="flex-1 flex justify-center">
        <img :src="logoUrl" alt="Nosotros" class="w-48 md:w-64" />
      </div>

      <!-- Columna Derecha -->
      <div class="flex-1 space-y-8">
        <div class="flex items-center space-x-4">
          <i class="text-blue-600 text-2xl">💲</i>
          <div>
            <h3 class="text-lg font-semibold">Accesibilidad</h3>
            <p class="text-gray-500 text-sm">Ofrecemos educación gratuita y materiales sin costo para que todos los estudiantes tengan las mismas oportunidades.</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <i class="text-blue-600 text-2xl">📝</i>
          <div>
            <h3 class="text-lg font-semibold">Simulacros de Examen</h3>
            <p class="text-gray-500 text-sm">Realizamos exámenes periódicos bajo condiciones reales para que practiques y mejores tu desempeño.</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <i class="text-blue-600 text-2xl">📆</i>
          <div>
            <h3 class="text-lg font-semibold">Horarios Flexibles</h3>
            <p class="text-gray-500 text-sm">Contamos con turnos en distintos horarios para que puedas organizar mejor tu tiempo de estudio.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1100px;
}
</style>
