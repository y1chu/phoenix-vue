<template>
    <header class="rpg-header">
        <div class="logo" @click="scrollToSection('hero')">
            <img src="@/assets/phoenix_icon.png" alt="Logo" />
        </div>
        <div class="progress-bar-container">
            <div class="section-name">
                <span>{{ currentSectionName }}</span>
            </div>
            <div class="progress-bar">
                <div class="hp-bar" :style="{ width: scrollProgress + '%' }"></div>
            </div>
            <nav class="quick-travel">
                <ul>
                    <li :class="{ active: currentSectionName === 'About' }" @click="scrollToSection('about')">
                        <font-awesome-icon icon="user" />
                    </li>
                    <li :class="{ active: currentSectionName === 'Experience' }" @click="scrollToSection('experience')">
                        <font-awesome-icon icon="wrench" />
                    </li>
                    <li :class="{ active: currentSectionName === 'Projects' }" @click="scrollToSection('projects')">
                        <font-awesome-icon icon="project-diagram" />
                    </li>
                    <li :class="{ active: currentSectionName === 'Contact' }" @click="scrollToSection('contact')">
                        <font-awesome-icon icon="envelope" />
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Language Switch -->
        <div class="language-switch toggle-wrapper">
            <input type="checkbox" class="toggle-input" v-model="isJapanese" @change="switchLanguage"
                id="toggleSwitch" />
            <label for="toggleSwitch" class="toggle-container">
                <span class="toggle-circle">
                    <!-- Japanese Circle Flag -->
                    <span class="japanese-flag"></span>
                </span>
            </label>
        </div>
    </header>
</template>



<script>
export default {
    data() {
        return {
            scrollProgress: 0,
            currentSectionName: 'Home',
            currentLanguage: this.$i18n.locale, // Get the current language from i18n
            isJapanese: this.$i18n.locale === 'ja' // Track whether the current language is Japanese
        };
    },
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        updateScrollProgress() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.scrollProgress = (scrollTop / docHeight) * 100;
            this.updateCurrentSection(scrollTop);
        },
        updateCurrentSection(scrollTop) {
            const sections = [
                { id: 'hero', name: 'Home' },
                { id: 'about', name: 'About' },
                { id: 'experience', name: 'Experience' },
                { id: 'projects', name: 'Projects' },
                { id: 'contact', name: 'Contact' }
            ];

            for (let section of sections) {
                const element = document.getElementById(section.id);
                const sectionTop = element.offsetTop;
                const sectionHeight = element.offsetHeight;

                if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                    this.currentSectionName = section.name;
                    break;
                }
            }
        },
        switchLanguage() {
            // Toggle between English ('en') and Japanese ('ja')
            this.currentLanguage = this.isJapanese ? 'ja' : 'en';
            this.$i18n.locale = this.currentLanguage; // Set the new locale
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScrollProgress);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateScrollProgress);
    }
};
</script>

<style scoped>
/* Your existing styles */
.rpg-header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    z-index: 10;
    padding: 1rem;
}

.logo {
    cursor: pointer;
}

.logo img {
    width: 150px;
    height: 150px;
}

.progress-bar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding-top: 2rem;
}

.section-name {
    width: 25%;
    color: #fff;
    font-size: 18px;
    margin-bottom: 4px;
    text-align: left;
}

.progress-bar {
    width: 25%;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 10;
    position: relative;
    clip-path: polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%);
}

.hp-bar {
    height: 100%;
    background: linear-gradient(to right, mediumseagreen, rgba(218, 244, 19, 0.4));
    transition: width 0.3s ease;
    box-shadow: 0 0 10px greenyellow;
}

.quick-travel ul {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 25%;
    list-style: none;
    padding: 0;
    margin-left: 1.1rem;
    margin-top: 1rem;
}

.quick-travel li {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease, transform 0.2s ease-in-out;
}

.quick-travel li:hover {
    opacity: 1;
    transform: scale(1.2);
}

.quick-travel li.active {
    opacity: 1;
}

.quick-travel .fa-icon {
    color: #fff;
    font-size: 24px;
}

.toggle-wrapper {
    padding: 16px;
    position: relative;
}

.toggle-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    outline: none;
}

.toggle-container {
    border-radius: 30px;
    display: block;
    width: 100px;
    height: 40px;
    background-color: #606060a2;
    /* Default background color when toggle is off */
    position: relative;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.35, 0.4, 0.45, 0.2);
    border: 2px solid #606060;
    /* Add a border when toggle is off */
    transition: background-color 0.3s ease, border-color 0.3s ease;
    /* Smooth transitions */
}

.toggle-circle {
    position: absolute;
    top: 50%;
    left: -4px;
    transform: translateY(-50%);
    background-color: #ffffff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    transition: all 0.3s cubic-bezier(0.33, 0.44, 0.45, 1.65);
    display: flex;
    align-items: center;
    justify-content: center;
}

.japanese-flag {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #ff0000;
    border-radius: 50%;
}

.toggle-input:checked+.toggle-container {
    background-color: #ffd90093;
    /* Background when the toggle is checked */
    border-color: #ffd900;
    /* Border color when the toggle is checked */
}

.toggle-input:checked+.toggle-container>.toggle-circle {
    left: calc(100% - 44px);
}
</style>