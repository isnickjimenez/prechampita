<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-vue-next';

// Estado del menú móvil
const isOpen = ref(false);

// Funciones para manejar el menú
const toggleMenu = () => isOpen.value = !isOpen.value;
const closeMenu = () => isOpen.value = false;

// Ruta del logo
const logoUrl = "/img/logo_prechampita.png";

// Obtener la ruta actual
const route = useRoute();
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <!-- Barra superior -->
    <!-- <div class="bg-[#3e610a] text-[#dfcd0e] text-sm py-2 px-4 flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-1">
          <MapPin class="w-4 h-4" />
          <span>Inscripciones en la Casa de la Cultura, San Sebastián, Cusco</span>
        </div>
        <div class="flex items-center space-x-1">
          <Clock class="w-4 h-4" />
          <span>Inscripciones de Lunes a Viernes de 9:00 a 18:00</span>
        </div>
      </div>
      <div class="flex items-center space-x-1 font-bold">
        <Phone class="w-4 h-4" />
        <span>+51987654321</span>
      </div>
    </div> -->

    <div class="bg-[#3e610a] text-[#dfcd0e] text-sm py-2 px-4 overflow-hidden">
      <div class="whitespace-nowrap animate-marquee flex items-center gap-36 space-x-10">
        <div class="flex items-center space-x-2">
          <MapPin class="w-4 h-4" />
          <span>Inscripciones en la Casa de la Cultura, San Sebastián, Cusco</span>
        </div>
        <div class="flex items-center space-x-2">
          <Clock class="w-4 h-4" />
          <span>Inscripciones de Lunes a Viernes de 9:00 a 18:00</span>
        </div>
      </div>
    </div>

    <!-- Navbar principal -->
    <nav class="bg-white text-[#3e610a] shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <img :src="logoUrl" alt="Logo" class="h-28 w-auto mr-3" />
          </div>

          <!-- Menú hamburguesa móvil -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-[#3e610a] focus:outline-none">
              <Menu v-if="!isOpen" class="w-8 h-8" />
              <X v-else class="w-8 h-8" />
            </button>
          </div>

          <!-- Menú de escritorio -->
          <div class="hidden md:flex space-x-6 font-semibold">
            <router-link to="/" 
              :class="[
                route.path === '/' ? 'text-[#f97316] border-b-4 border-[#f97316]' : 'text-[#3e610a]',
                route.path !== '/' ? 'hover:border-b-4 hover:border-[#3e610a]' : ''
              ]"
              class="px-3 py-2 transition-all duration-200">
              Inicio
            </router-link>
            <!-- <router-link to="/nosotros" 
              :class="[
                route.path === '/nosotros' ? 'text-[#f97316] border-b-4 border-[#f97316]' : 'text-[#3e610a]',
                route.path !== '/nosotros' ? 'hover:border-b-4 hover:border-[#3e610a]' : ''
              ]"
              class="px-3 py-2 transition-all duration-200">
              Nosotros
            </router-link> -->
            <router-link to="/inscripciones" 
              :class="[
                route.path === '/inscripciones' ? 'text-[#f97316] border-b-4 border-[#f97316]' : 'text-[#3e610a]',
                route.path !== '/inscripciones' ? 'hover:border-b-4 hover:border-[#3e610a]' : ''
              ]"
              class="px-3 py-2 transition-all duration-200">
              Inscripciones
            </router-link>
            <!-- <router-link to="/psicologia" 
              :class="[
                route.path === '/psicologia' ? 'text-[#f97316] border-b-4 border-[#f97316]' : 'text-[#3e610a]',
                route.path !== '/psicologia' ? 'hover:border-b-4 hover:border-[#3e610a]' : ''
              ]"
              class="px-3 py-2 transition-all duration-200">
              Psicologia
            </router-link> -->
          </div>
        </div>
      </div>

      <!-- Menú móvil desplegable -->
      <div v-if="isOpen" class="md:hidden bg-white shadow-md absolute w-full left-0 py-4 px-6 space-y-4 transition-all duration-300">
        <router-link to="/" 
          :class="[
            route.path === '/' ? 'text-[#f97316] border-b-4 border-[#f97316]' : 'text-[#3e610a]',
            route.path !== '/' ? 'hover:border-b-4 hover:border-[#3e610a]' : ''
          ]" 
          class="block py-2 border-b transition-all duration-200" 
          @click="closeMenu">
          Inicio
        </router-link>
        <router-link to="/nosotros" 
          :class="[
            route.path === '/nosotros' ? 'text-[#f97316] border-b-4 border-[#f97316]' : 'text-[#3e610a]',
            route.path !== '/nosotros' ? 'hover:border-b-4 hover:border-[#3e610a]' : ''
          ]" 
          class="block py-2 border-b transition-all duration-200" 
          @click="closeMenu">
          Nosotros
        </router-link>
        <router-link to="/inscripciones" 
          :class="[
            route.path === '/inscripciones' ? 'text-[#f97316] border-b-4 border-[#f97316]' : 'text-[#3e610a]',
            route.path !== '/inscripciones' ? 'hover:border-b-4 hover:border-[#3e610a]' : ''
          ]" 
          class="block py-2 border-b transition-all duration-200" 
          @click="closeMenu">
          Inscripciones
        </router-link>
        <router-link to="/psicologia" 
          :class="[
            route.path === '/psicologia' ? 'text-[#f97316] border-b-4 border-[#f97316]' : 'text-[#3e610a]',
            route.path !== '/psicologia' ? 'hover:border-b-4 hover:border-[#3e610a]' : ''
          ]" 
          class="block py-2 border-b transition-all duration-200" 
          @click="closeMenu">
          Psicologia
        </router-link>
      </div>
    </nav>
  </header>
</template>
