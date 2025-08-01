<script setup>
const values = [
  {
    title: "Nos preocupamos",
    description:
      "Damos prioridad a las personas y nos relacionamos con honestidad, empatía y respeto.",
    icon: `<path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12 4 12 4C12 4 12.76 3 14.5 3C17.58 3 20 5.42 20 8.5C20 13.5 12 21 12 21Z"/>`,
  },
  {
    title: "Encontramos la mejor manera",
    description:
      "Tratamos de hacer todo de la mejor manera posible, encontramos formas de lograr un cambio positivo y conseguimos resultados impactantes.",
    icon: `<path d="M4 12L12 2L20 12"/><path d="M12 22V12"/>`,
  },
  {
    title: "Somos inclusivos y colaborativos",
    description:
      "Aceptamos nuestras diferencias y trabajamos juntos para garantizar que cada persona prospere.",
    icon: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="3"/><path d="M6 21V18C6 16 8 14 12 14C16 14 18 16 18 18V21"/>`,
  },
];
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-[#000000]">
        NUESTROS <span class="text-[#3E610A]">VALORES</span>
        </h2>
        <div class="w-24 h-1 bg-[#3E610A] mx-auto my-2"></div>

    </div>

    <div class="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
      <div
        v-for="(value, index) in values"
        :key="index"
        class="relative w-[300px] text-center"
      >
        <!-- Línea divisoria para el primer y segundo valor -->
        <div v-if="index < 2" class="hidden md:block absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-[2px] h-24 bg-[#D1D5DB]"></div>

        <div class="flex justify-center items-center bg-white p-3 rounded-full shadow-lg w-16 h-16 mx-auto">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3E610A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" v-html="value.icon"></svg>
        </div>
        <h3 class="text-lg font-bold text-[#3E610A] mt-3">{{ value.title }}</h3>
        <p class="text-gray-700 text-sm">{{ value.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1100px;
}
</style>
