<template>
    <div class="flex flex-col items-center p-6 bg-gray-50">
      <h2 class="text-3xl font-bold text-gray-800">MATRICÚLATE <span class="text-[#3E610A]">YA</span></h2>
      <p class="text-gray-600 text-center max-w-lg mt-2">
        Asegura tu lugar en nuestra a siguiendo estos simples pasos. Completa tu inscripción de manera rápida y sencilla.
      </p>
      <div class="mt-6 space-y-6 w-full max-w-xl">
        <div v-for="(step, index) in steps" :key="index" class="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div class="relative w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#3E610A] bg-white shadow-md">
            <span class="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {{ index + 1 }}
            </span>
            <img :src="step.icon" alt="Step Icon" class="w-10 h-10" />
          </div>
          <div class="text-left flex-1">
            <h3 class="text-lg font-semibold text-gray-700">{{ step.title }}</h3>
            <p class="text-gray-500 text-sm">{{ step.description }}</p>
            <a v-if="step.pdf" :href="step.pdf" download class="mt-2 inline-block bg-[#3E610A] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#dfcd0e] transition">
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
      <p class="mt-6 text-red-600 font-semibold text-sm text-center max-w-md">
        <!-- ⚠️ Recuerda que el estudiante debe asistir a las oficinas acompañado de su apoderado en caso de ser menor de edad. -->
      </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { 
          title: "COMPLETA LA FICHA DE INSCRIPCIÓN", 
          icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png", 
          description: "Descarga y completa la ficha con todos tus datos personales y académicos para procesar tu inscripción.",
          pdf: "/resource/Ficha Prechampita.pdf" 
        },
        { 
          title: "DNI / DOCUMENTO DE IDENTIDAD", 
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", 
          description: "Para la verificacion de identidad del estudiante para validar tu información."
        
        },
        { 
          title: "APERSONATE PARA LA INSCRIPCION", 
          icon: "https://cdn-icons-png.flaticon.com/512/808/808476.png", 
          description: "Apersonate con la ficha y tu documento de indetidad para la inscripcion.",
          // pdf: "ficha_autorizacion.pdf" 
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
