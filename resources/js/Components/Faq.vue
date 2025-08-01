<template>
    <div class="max-w-5xl mx-auto p-6 bg-white">
      <h2 class="text-2xl font-bold mb-4 text-center sm:text-left">PREGUNTAS</h2>
      <p class="text-gray-600 mb-4 text-center sm:text-left">
        Encuentra respuestas a las preguntas más frecuentes sobre la Academia Pre Champita.
      </p>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="border-b"
        >
          <button 
            @click="toggleFaq(index)" 
            class="w-full flex justify-between items-center py-3 px-4 text-left font-semibold text-[#5d881a] hover:bg-gray-100 transition-all duration-300"
          >
            {{ faq.question }}
            <span class="text-[#5d881a] text-xl">
              {{ activeIndex === index ? '-' : '+' }}
            </span>
          </button>
          <p v-if="activeIndex === index" class="text-gray-700 p-4 bg-gray-50 rounded-md">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
    <br>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null,
        faqs: [
          {
            question: "¿La Academia Pre Champita tiene algún costo?",
            answer: "No, la academia es completamente gratuita. La Municipalidad de San Sebastián cubre todos los gastos como parte de un proyecto de inversión en la educación de los jóvenes."
          },
          {
            question: "¿Quiénes pueden inscribirse en la academia?",
            answer: "La academia está dirigida a estudiantes de 5to de secundaria y a aquellos que ya culminaron el colegio y desean prepararse para el ingreso a la universidad pro Cepru."
          },
          // {
          //   question: "¿Es necesario asistir con mi apoderado para inscribirme?",
          //   answer: "Sí, es recomendable que asistas con tu apoderado, en caso de ser menor de edad, ya que es importante que esté informado sobre tu participación en la academia y el proceso educativo."
          // },
          // {
          //   question: "¿Es necesario asistir con mi apoderado para inscribirme?",
          //   answer: "Sí, es recomendable que asistas con tu apoderado, en caso de ser menor de edad, ya que es importante que esté informado sobre tu participación en la academia y el proceso educativo."
          // },
          // {
          //   question: "¿Es necesario asistir con mi apoderado para inscribirme?",
          //   answer: "Sí, es recomendable que asistas con tu apoderado, en caso de ser menor de edad, ya que es importante que esté informado sobre tu participación en la academia y el proceso educativo."
          // },
          {
            question: "¿Cómo puedo inscribirme en la Academia Pre Champita?",
            answer: "Puedes inscribirte acercándote a la municipalidad o mediante el formulario de registro en nuestra página web. No olvides traer tu DNI y, de ser posible, la compañía de tu apoderado."
          }
        ]
      };
    },
    methods: {
      toggleFaq(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>
  
  <style scoped>
  button:focus {
    outline: none;
  }
  </style>
  