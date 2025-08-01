<template>
    <div class="modal-overlay" @click.self="$emit('close')">
      <img :src="logoUrl" alt="Imagen Modal" class="modal-img" />
      
    </div>
  </template>
  
  <script setup>
  defineEmits(['close']);
  const logoUrl = "/img/flyer_prechampita.png";
  </script>
  
  <style scoped>
  /* Fondo oscuro que cubre toda la pantalla */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* Oscurece el fondo */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; /* Se asegura de que esté por encima de todo */
  }
  
  /* Imagen sin bordes, sin márgenes */
  .modal-img {
    max-width: 480px; /* Ajusta el tamaño para que se vea como una tarjeta */
    height: auto;
    border-radius: 0px; /* Sin bordes */
    box-shadow: none; /* Sin sombra */
  }
  </style>
  