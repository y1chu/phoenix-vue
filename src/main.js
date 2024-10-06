import { createApp, watch } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/assets/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUser, faWrench, faProjectDiagram, faEnvelope, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import ja from './locales/ja.json';

// Add icons to the FontAwesome library
library.add(faHome, faUser, faWrench, faProjectDiagram, faEnvelope, faChevronLeft, faChevronRight, faYoutube, faLinkedin, faGithub);

// Create Vue I18n instance
const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en', // Fallback language
    messages: {
        en, // English translations
        ja  // Japanese translations
    }
});

const app = createApp(App);

// Watch for changes in the locale using Vue's `watch` API
watch(
    () => i18n.global.locale, // The locale to watch
    (newLocale) => {
        if (newLocale === 'ja') {
            document.body.classList.add('japanese');
        } else {
            document.body.classList.remove('japanese');
        }
    }
);

// Ensure that the correct class is applied when the app starts
if (i18n.global.locale === 'ja') {
    document.body.classList.add('japanese');
}

// Use i18n and mount the app
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

// Initialize AOS animations
AOS.init();
