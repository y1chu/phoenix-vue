import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/assets/styles.scss';

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import solid icons for the header and gallery controls
import { faHome, faUser, faWrench, faProjectDiagram, faEnvelope, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import brand icons for the footer
import { faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faHome, faUser, faWrench, faProjectDiagram, faEnvelope, faChevronLeft, faChevronRight, faYoutube, faLinkedin, faGithub);

// Create Vue app and register the FontAwesome component globally
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

// Initialize AOS
AOS.init();
