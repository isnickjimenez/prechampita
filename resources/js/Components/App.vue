<template>
    
    <Navbar />
    <router-view />
    <!-- <Home /> -->
    <Footer />
  </template>
  
  <script setup>
  
  // import Home from '../Pages/Home.vue';
  import Navbar from '../Components/Navbar.vue'; // Importa tu navbar
  import '../../css/app.css'; // Si está en resources/css/
  import Footer from './Footer.vue';

  </script>
  