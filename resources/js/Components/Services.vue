<template>
    <section class="relative bg-dark-green py-16 px-4 flex justify-center items-center">
      <div 
        class="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20"
        :style="{ backgroundImage: `url(${logoUrl})` }">
      </div>
      <div class="relative container mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="(item, index) in features" :key="index" class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="text-[#5d881a] text-3xl mb-2">
              <font-awesome-icon :icon="item.icon" />
            </div>
            <h3 class="text-lg font-bold">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
        <div class="text-white">
          <p class="font-semibold">Un Futuro Mejor Para Ti</p>
          <h2 class="text-2xl font-bold mb-4">ACADEMIA GRATUITA PREUNIVERSITARIA</h2>
          <p class="mb-4">
            La Academia Preuniversitaria de la Municipalidad de San Sebastián es un proyecto social que brinda preparación gratuita 
            a jóvenes que desean ingresar a la universidad. Nuestro objetivo es apoyarte en tu camino académico con enseñanza de calidad.
          </p>
          
          <div class="text-lg font-bold">Servicios que ofrecemos:</div>
          <ul class="mb-6 list-disc pl-5">
            <li>Clases presenciales y virtuales</li>
            <li>Simulacros de examen de admisión</li>
            <li>Material de estudio gratuito</li>
            <li>Tutorías personalizadas</li>
            <li>Charlas vocacionales</li>
          </ul>
          <button class="mt-4 px-6 py-2 bg-[#dfcd0e] text-[#ffffff] font-bold rounded-full shadow-md hover:bg-gray-200">
            Más Información
          </button>
        </div>
      </div>
    </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBookOpen, faChalkboardTeacher, faClipboardList, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const logoUrl = "/img/logo_prechampita.png";

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      logoUrl,
      features: [
        { icon: faBookOpen, title: 'Material de Estudio', description: 'Acceso a recursos y guías actualizadas para mejorar tu aprendizaje.' },
        { icon: faChalkboardTeacher, title: 'Clases Magistrales', description: 'Docentes altamente capacitados para brindarte la mejor enseñanza.' },
        { icon: faClipboardList, title: 'Simulacros de Examen', description: 'Pruebas periódicas para medir tu nivel y mejorar tu rendimiento.' },
        { icon: faGraduationCap, title: 'Charlas Vocacionales', description: 'Orientación para elegir la mejor carrera según tu perfil.' }
      ]
    };
  }
};
</script>

<style scoped>
.bg-dark-green {
  background-color: #5d881a; /* Verde oscuro con toque negro */
}
</style>
