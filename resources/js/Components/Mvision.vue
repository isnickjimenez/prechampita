<script setup>
const sections = [
  {
    title: "MISIÓN",
    description:
      "Brindar educación gratuita y de calidad, preparando a los jóvenes para afrontar con éxito su examen de ingreso.",
    color: "#00BFA6", // Verde turquesa vibrante
    icon: `<path d="M12 2L20 8L12 14L4 8L12 2Z"/><path d="M4 12L12 18L20 12"/><path d="M4 16L12 22L20 16"/>`,
  },
  {
    title: "VISIÓN",
    description:
      "Ser la academia líder en preparación preuniversitaria gratuita, formando jóvenes con excelencia académica.",
    color: "#FF9800", // Naranja intenso
    icon: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>`,
  },
  {
    title: "OBJETIVO",
    description:
      "Impulsar la educación gratuita y el acceso a oportunidades académicas para jóvenes de todas las comunidades.",
    color: "#FF1744", // Rojo vibrante
    icon: `<path d="M12 2L12 22"/><path d="M5 12L12 5L19 12"/>`,
  },
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900">NUESTRA</h2>
      <h2 class="text-3xl font-bold text-[#3e610a]">MISIÓN Y VISIÓN</h2>
      <p class="text-gray-700 mt-2">
        Comprometidos con la educación y el éxito de nuestros estudiantes en el ingreso a la universidad.
      </p>
    </div>

    <div class="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="relative w-[260px] md:w-[290px] aspect-square flex items-center justify-center"
      >
        <!-- Arco decorativo superior -->
        <svg
          class="absolute -top-1 left-0 w-full"
          viewBox="0 0 200 100"
        >
          <path d="M0,100 A100,100 0 0,1 200,100" fill="none" :stroke="section.color" stroke-width="5" />
        </svg>

        <!-- Contenedor redondo -->
        <div class="bg-white shadow-lg rounded-full w-full h-full p-6 flex flex-col items-center justify-center text-center border-4" :style="{ borderColor: section.color }">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" :stroke="section.color" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" v-html="section.icon"></svg>
          <h3 class="text-lg font-bold mt-2" :style="{ color: section.color }">{{ section.title }}</h3>
          <p class="text-gray-800 text-sm font-medium">
            {{ section.description }}
          </p>
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
