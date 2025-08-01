<template>
    <section class="location-section">
      <h6 class="subtitle">UBICACIÓN</h6>
      <h2 class="pricing-title">¿Dónde nos  <span style="color: orange;">ubicamos</span> ?</h2>
      <br>
      <div class="location-container">
        <!-- Mapa -->
        <div class="map-wrapper">
          <iframe
            class="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.425973832059!2d-71.9374047!3d-13.5300709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7f4f9c3a1469%3A0xa837e21e1e977c08!2sPlaza%20de%20San%20Sebasti%C3%A1n!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        <!-- Tarjetas de información -->
        <div class="info-cards">
          <div class="card">
            <span class="icon">📍</span>
            <p>Cll. Agricultura, xxxxxxxxxxxxxxxxxxxxx</p>
          </div>
          <div class="card">
            <span class="icon">📞</span>
            <p>+51 XXXXXXXXXXX</p>
          </div>
          <div class="card">
            <span class="icon">✉️</span>
            <p>XXXXXXXXXXX@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Sección principal */
  .location-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  /* Contenedor principal */
  .location-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 900px;
  }
  
  /* Estilo del mapa */
  .map-wrapper {
    flex: 1;
    min-width: 300px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid #74b40d;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .map-frame {
    width: 120%;
    height: 100%;
    border: 0;
  }
  
  /* Estilo de las tarjetas */
  .info-cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .card {
    display: flex;
    align-items: center;
    gap: 10px;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #74b40d;
    width: 350px;
  }
  
  .icon {
    font-size: 20px;
  }
  .pricing-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000000;
}
.subtitle {
    font-size: 14px;
    font-weight: bold;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  </style>
  