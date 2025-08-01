<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <section class="psychology-section">
    <div class="container">
      <!-- Contenido de la izquierda -->
      <div class="text-content">
        <h1>CONSULTORÍA PSICOLÓGICA</h1>
        <h2>Conciencia sobre la Salud Mental</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
        </p>
        <div class="buttons">
          <button class="btn-primary">Reservar Ahora</button>
          <button class="btn-secondary">Leer Más</button>
        </div>
      </div>
      
      <!-- Imagen de la derecha con elementos decorativos -->
      <div class="image-content">
        <div class="image-wrapper">
          <img src="/img/nosotros.png" alt="Niña con problemas de salud mental" />
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.psychology-section {
  background: #ececec;
  color: #000000;
  padding: 40px 20px;
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
}

.text-content {
  flex: 1;
  text-align: left;
}

.text-content h1 {
  font-size: 32px;
  font-weight: bold;
}

.text-content h2 {
  font-size: 20px;
  color: #dfcd0e;
}

.text-content p {
  font-size: 14px;
  margin: 15px 0;
}

.buttons {
  display: flex;
  gap: 10px;
}

.btn-primary {
  background: #dfcd0e;
  color: #3e610a;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid #dfcd0e;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
}

.image-wrapper {
  position: relative;
  display: inline-block;
}

.image-wrapper img {
  max-width: 100%;
  border-radius: 50%;
}

.decorative-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Responsividad */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
  .text-content {
    text-align: center;
  }
  .buttons {
    justify-content: center;
  }
}
</style>
