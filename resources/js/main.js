import { createApp } from 'vue';
import App from './Components/App.vue';
import router from './router'; // Importa el router
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faLightbulb, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBuilding, faLightbulb, faBullhorn);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router); // Usa Vue Router
app.mount('#app');
