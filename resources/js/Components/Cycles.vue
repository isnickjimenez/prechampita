<template>
    <section class="py-12 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <!-- Sección de texto -->
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-[#000000]">NUESTRAS MODALIDADES</h2>
          <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
            La Academia Preuniversitaria Gratuita de la Municipalidad de San Sebastián nos ofrese las siguientes modalidades.  
          </p>
  
         
        </div>
  
        <!-- Sección de tarjetas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <!-- Primer Ciclo -->
          <div class="bg-white p-6 rounded-lg shadow-lg border flex flex-col items-center text-center">
            <img src="https://uam.edu.pa/wp-content/uploads/2020/12/NOTIO_190.png" alt="Primer Ciclo" class="w-full h-40 object-cover rounded-t-lg">
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900">Ciclo Primera Oportunidad</h3>
              <p class="text-sm text-gray-600">Inicio de Clases - 11 de Agosto</p>
              <p class="text-sm text-gray-700 mt-2">
                Dirigido a jóvenes que se preparen para primera oprtunidad Cepru Primera Oportunidad.
              </p>
              <button class="mt-6">
                <a href="/inscripciones" class="mt-4 bg-[#5d881a] text-white px-4 py-2 rounded-lg">
                  Matricularme
                </a>
              </button>
            </div>
          </div>
  
          <!-- Segundo Ciclo -->
          <div class="bg-white p-6 rounded-lg shadow-lg border flex flex-col items-center text-center">
            <img src="https://www.shutterstock.com/image-photo/smiling-students-standing-on-university-260nw-2490446859.jpg" alt="Segundo Ciclo" class="w-full h-40 object-cover rounded-t-lg">
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900">Ciclo Ordinario</h3>
              <p class="text-sm text-gray-600">Inicio de Clases - 11 de Agosto</p>
              <p class="text-sm text-gray-700 mt-2">
                Dirigido a jóvenes que se preparen para primera oprtunidad Cepru Ordinario.
              </p>
              <button class="mt-6">
                <a href="/inscripciones" class="mt-4 bg-[#d76700] text-white px-4 py-2 rounded-lg">
                  Matricularme
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  </script>
  
  <style scoped>
  /* No se necesita CSS adicional porque todo se maneja con Tailwind */
  </style>