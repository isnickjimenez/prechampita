<template>
    <section class="py-10 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Encabezado -->
        <div class="text-center mb-6">
          
          <h2 class="text-3xl font-bold text-gray-900">ÚLTIMAS NOTICIAS</h2>
        </div>
  
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Noticia Principal con Video -->
          <div class="lg:col-span-2">
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="w-full h-auto aspect-video">
                <iframe
                  :src="mainNews.videoUrl"
                  width="100%" height="100%" style="border:none;overflow:hidden"
                  scrolling="no" frameborder="0" allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
              </div>
              <div class="p-6">
                <p class="text-[#95b738] font-semibold">{{ mainNews.category }}</p>
                <h3 class="text-xl font-bold text-gray-900 mt-2">
                  {{ mainNews.title }}
                </h3>
                <p class="text-gray-500 text-sm mt-2">{{ mainNews.date }}</p>
  
                <!-- Iconos de redes sociales -->
                <div class="flex items-center mt-4 space-x-4 text-gray-500">
                  <FontAwesomeIcon :icon="faHeart" class="text-red-500" />
                  <span>900</span>
                  <FontAwesomeIcon :icon="faEye" />
                  <span>830</span>
                  <FontAwesomeIcon :icon="faShare" />
                  <span>Compartir</span>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Noticias Secundarias -->
          <div class="space-y-4">
            <div v-for="(news, index) in newsList" :key="index" class="flex items-center space-x-4 cursor-pointer" @click="swapNews(index)">
              <div class="w-20 h-20 rounded-lg overflow-hidden">
                <iframe
                  :src="news.videoUrl"
                  width="100%" height="100%" style="border:none;overflow:hidden"
                  scrolling="no" frameborder="0" allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
              </div>
              <div>
                <p class="text-[#95b738] text-sm font-semibold">{{ news.category }}</p>
                <h4 class="text-gray-900 font-medium text-sm">{{ news.title }}</h4>
                <p class="text-gray-500 text-xs">{{ news.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faHeart, faEye, faShare } from '@fortawesome/free-solid-svg-icons'
  
  // Noticia principal inicial
  const mainNews = ref({
    category: "Inicio de Clases",
    title: "¡Bienvenidos ingresantes! Inicio de ciclo académico 2024-II",
    date: "20 Marzo, 2024",
    videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100092360144141%2Fvideos%2F1316906132680812%2F&show_text=true&width=560&t=0"
  })
  
  // Lista de noticias secundarias
  const newsList = ref([
    { category: "Ingresantes 2024", title: "Lista oficial de ingresantes publicada", date: "18 Marzo, 2024", videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100092360144141%2Fvideos%2F939278004968448%2F&show_text=true&width=560&t=0" },
    { category: "Clases Virtuales", title: "Guía de acceso a nuestra plataforma", date: "17 Marzo, 2024", videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100092360144141%2Fvideos%2F8628283433887168%2F&show_text=true&width=560&t=0" },
    { category: "Biblioteca Digital", title: "Nuevos libros y recursos disponibles", date: "16 Marzo, 2024", videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100092360144141%2Fvideos%2F975625924401361%2F&show_text=true&width=560&t=0" },
    { category: "Eventos Académicos", title: "Charlas y talleres gratuitos este mes", date: "15 Marzo, 2024", videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100092360144141%2Fvideos%2F1299383614426612%2F&show_text=true&width=560&t=0" }
  ])
  
  // Función para intercambiar la noticia principal con la secundaria seleccionada
  const swapNews = (index) => {
    // Guardar temporalmente la noticia principal
    const tempMain = { ...mainNews.value }
    // Reemplazar la noticia principal con la secundaria seleccionada
    mainNews.value = { ...newsList.value[index] }
    // Reemplazar la secundaria seleccionada con la anterior noticia principal
    newsList.value[index] = tempMain
  }
  </script>
  
  <style scoped>
.aspect-video {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
    overflow: hidden;
}

.aspect-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  </style>


