<template>
    <header class="rpg-header">
        <!-- Make the logo clickable to scroll back to 'Home' (hero section) -->
        <div class="logo" @click="scrollToSection('hero')">
            <img src="@/assets/phoenix_icon.png" alt="Logo" />
        </div>

        <div class="progress-bar-container">
            <!-- Display the current section name dynamically -->
            <div class="section-name">
                <span>{{ currentSectionName }}</span>
            </div>

            <!-- Progress Bar -->
            <div class="progress-bar">
                <div class="hp-bar" :style="{ width: scrollProgress + '%' }"></div>
            </div>

            <!-- Quick Travel Icons (without Home) -->
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
    </header>
</template>

<script>
export default {
    data() {
        return {
            scrollProgress: 0,
            currentSectionName: 'Home' // Default to "Home"
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

            // Call function to detect the current section
            this.updateCurrentSection(scrollTop);
        },
        updateCurrentSection(scrollTop) {
            // Get the positions of each section
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
/* Full width header */
.rpg-header {
    display: flex;
    align-items: center;
    /* Aligns the logo and progress bar container vertically */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* Full width */
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

/* Progress bar container vertically centered */
.progress-bar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding-top: 2rem;
}

/* Dynamic section name aligned to the left */
.section-name {
    width: 25%;
    color: #fff;
    font-size: 18px;
    margin-bottom: 4px;
    text-align: left;
    /* Align to the left */
}

/* Progress bar with the polygon shape */
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
    /* Smooth transition effect */
    box-shadow: 0 0 10px greenyellow;
    /* Light glowing shadow */
}

/* Quick travel icons, moved to the right */
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
</style>