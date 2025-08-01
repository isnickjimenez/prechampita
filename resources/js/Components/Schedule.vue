<template>
    <section class="py-12 bg-white">
      <div class="container mx-auto px-6">
        <!-- Sección de título -->
        <div class="text-left mb-8">
          <p class="text-sm text-[#a5a5a5] uppercase">Información</p>
          <h2 class="text-4xl font-bold text-black">HORARIO DE CLASES</h2>
        </div>
  
        <!-- Texto descriptivo -->
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 flex items-center justify-center border-2 border-[#5d881a] rounded-md">
              <font-awesome-icon :icon="faClock" class="text-[#5d881a] text-2xl" /> 
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Nuestro programa educativo ofrece clases presenciales en nuestra academia gratuita. Asegura tu aprendizaje
            con horarios flexibles diseñados para ti.
          </p>
        </div>
  
        <!-- Sección de horarios -->
        <div class="grid md:grid-cols-2 gap-8 mt-10">
          <div 
            v-for="(item, index) in horarios" 
            :key="index" 
            class="flex items-start gap-4 p-6 rounded-md"
            :class="item.bgColor"
          >
            <div class="w-12 h-12 flex items-center justify-center bg-white rounded-md">
              <div class="text-[#5d881a] text-3xl mb-2">
                <font-awesome-icon :icon="item.icon" />
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold" :class="item.textColor">{{ item.title }}</h3>
              <p class="text-gray-700">
                <font-awesome-icon :icon="faClock" class="text-[#5d881a]" /> {{ item.time }}
              </p>
              <p v-if="item.extra" class="text-red-600 font-bold mt-2">
                <font-awesome-icon :icon="faFileAlt" class="text-red-600" /> {{ item.extra }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { faClock, faCalendarAlt, faCalendarDay, faFileAlt } from "@fortawesome/free-solid-svg-icons";
  
  export default {
    name: "HorarioClases",
    components: { FontAwesomeIcon },
    data() {
      return {
        faClock,  // ✅ Añadido aquí para usarlo en el template
        faFileAlt,
        horarios: [
          {
            title: "Lunes a Viernes",
            time: "2:00 p.m. - 8:00 p.m.",
            icon: faCalendarAlt,  
            bgColor: "bg-[#c3e375]",
            textColor: "text-[#5d881a]",
          },
          {
            title: "Sábados",
            time: "8:00 a.m. - 1:00 p.m.",
            extra: "2:00 p.m. - 3:00 p.m. (Examen Semanal)",
            icon: faCalendarDay,  
            bgColor: "bg-[#f7c36b]",
            textColor: "text-[#d88b2c]",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  