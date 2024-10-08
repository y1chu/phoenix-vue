<template>
  <div id="app" class="portfolio">
    <div
      :class="['background-overlay', fadeIn ? 'visible' : 'hidden']"
      :style="{ backgroundImage: 'url(' + currentBackground + ')' }"
    ></div>

    <div id="particles-js"></div>

    <Header />

    <section id="hero">
      <HeroSection />
    </section>

    <section id="about">
      <AboutSection />
    </section>

    <section id="experience">
      <ExperienceSection />
    </section>

    <section id="projects">
      <ProjectsSection />
    </section>

    <section id="contact">
      <ContactSection />
    </section>

    <Footer />

  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';

export default {
  components: {
    Header,
    Footer,
    HeroSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
  },
  data() {
    return {
      currentBackgroundIndex: 0,
      backgrounds: [
        new URL('@/assets/1.jpg', import.meta.url).href,
        new URL('@/assets/2.jpg', import.meta.url).href,
        new URL('@/assets/3.jpg', import.meta.url).href,
        new URL('@/assets/4.jpg', import.meta.url).href,
        new URL('@/assets/5.jpg', import.meta.url).href,
      ],
      fadeIn: true,
    };
  },
  computed: {
    currentBackground() {
      return this.backgrounds[this.currentBackgroundIndex];
    },
  },
  methods: {
    changeBackground() {
      this.fadeIn = false;

      setTimeout(() => {
        this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgrounds.length;
        this.fadeIn = true;
      }, 2000);
    },
    initializeParticles() {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ['#ff4500', '#ff7f00', '#ffff00', '#ff0000'],
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'top',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      });
    },
  },
  mounted() {
    this.initializeParticles();
    setInterval(this.changeBackground, 20000);
  },
};
</script>

<style scoped>
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

.portfolio {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  z-index: 2;
}

#hero {
  height: 100vh;
}

#projects, #about, #experience, #contact {
  min-height: 100vh;
  padding: 3rem 2rem;
}


.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: opacity 2s linear, visibility 0s 2s;
  z-index: 0;
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 2s linear;
}


.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;
}
</style>
