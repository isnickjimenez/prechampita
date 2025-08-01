<template>
    <div class="about-container">
      <div class="text-content">
        <h6 class="subtitle">PROYECTO SOCIAL</h6>
        <h1 class="title">
          Crece con <span class="highlight">Nosotros</span>
        </h1>
        <p class="description">
          La Municipalidad de San Sebastián impulsa una <strong>academia gratuita</strong> como parte de su compromiso con la educación y el desarrollo social.  
          Brindamos oportunidades de aprendizaje a jóvenes y adultos, ofreciendo cursos en diversas áreas para mejorar sus habilidades y fomentar su crecimiento personal y profesional.
        </p>
      </div>
      <div class="image-content">
        <img :src="logoUrl" alt="Logo" class="h-28 w-auto mr-3" />
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
  }
  
  .text-content {
    max-width: 700px;
  }
  
  .subtitle {
    font-size: 14px;
    font-weight: bold;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .title {
    font-size: 45px;
    font-weight: bold;
    color: #111;
    margin: 10px 0;
  }
  
  .highlight {
    color: #5d881a; /* Azul llamativo */
    font-size: 50px;
    font-weight: 800;
  }
  
  .description {
    font-size: 18px;
    color: #333;
    line-height: 1.6;
    margin-top: 10px;
  }
  
  .image-content img {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-top: 20px;
    border-radius: 10px;
  }
  
  /* Responsivo */
  @media (min-width: 768px) {
    .about-container {
      flex-direction: row;
      text-align: left;
      justify-content: center;
      gap: 40px;
    }
  
    .text-content {
      max-width: 50%;
    }
  
    .image-content img {
      max-width: 350px;
    }
  }
  </style>
  <script setup>
// Ruta del logo
const logoUrl = "/img/nosotros.png";</script>