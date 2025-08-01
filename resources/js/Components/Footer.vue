<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <!-- Sección del logo -->
      <div class="footer-logo">
        <img src="https://academiasj.munisanjeronimocusco.gob.pe/wp-content/uploads/2025/03/1san_sebastian_blanco.png" alt="Logo de la compañía" width="150">
      </div>

      <!-- Sección de enlaces -->
      <div class="footer-links">
        <div>
          <h3>Temas de Weebly</h3>
          <ul>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Enviar un Ticket</a></li>
          </ul>
        </div>

        <div>
          <h3>Servicios</h3>
          <ul>
            <li><a href="#">Ajustes de Tema</a></li>
          </ul>
        </div>

        <div>
          <h3>Exhibición</h3>
          <ul>
            <li><a href="#">Widgetkit</a></li>
            <li><a href="#">Soporte</a></li>
          </ul>
        </div>

        <div>
          <h3>Sobre Nosotros</h3>
          <ul>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Afiliados</a></li>
            <li><a href="#">Recursos</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Línea divisoria -->
    <hr />

    <!-- Sección de redes sociales -->
    <div class="social-icons">
      <a href="https://facebook.com" target="_blank"><font-awesome-icon :icon="faFacebook" /></a>
      <a href="https://instagram.com" target="_blank"><font-awesome-icon :icon="faInstagram" /></a>
      <a href="https://twitter.com" target="_blank"><font-awesome-icon :icon="faTwitter" /></a>
    </div>

    <!-- Derechos reservados -->
    <p class="copyright">© Copyright. Todos los derechos reservados.</p>
  </footer>
</template>

<style scoped>
/* Estilos generales del footer */
.footer {
  background: #3e610a;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
}

/* Sección de enlaces */
.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
}

.footer-links div {
  text-align: left;
  margin: 10px;
}

.footer-links h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #fff;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin: 5px 0;
}

.footer-links ul li a {
  text-decoration: none;
  color: #aaa;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-links ul li a:hover {
  color: #fff;
}

/* Línea divisoria */
hr {
  border: none;
  border-top: 1px solid #dfcd0e;
  margin: 20px auto;
  width: 80%;
}

/* Iconos de redes sociales */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.social-icons a {
  color: #fff;
  font-size: 26px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #dfcd0e;
}

/* Derechos reservados */
.copyright {
  font-size: 12px;
  opacity: 0.7;
}

/* Responsividad solo para móviles */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-links div {
    margin-bottom: 20px;
  }
}
</style>
