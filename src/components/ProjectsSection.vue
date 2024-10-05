<template>
    <section class="projects" data-aos="fade-up">
        <div class="project-list">
            <h2>Projects</h2>
            <div v-for="(project, index) in projects" :key="index" class="project">
                <div class="project-info">
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                    <div class="contributions">
                        <h4>Contributions:</h4>
                        <ul>
                            <li v-for="(contribution, i) in project.contributions" :key="i">{{ contribution }}</li>
                        </ul>
                    </div>

                    <ul class="tech-used">
                        <li v-for="tech in project.techStack" :key="tech">{{ tech }}</li>
                    </ul>
                    <div class="project-links">
                        <a v-if="project.liveDemo" :href="project.liveDemo" target="_blank">Official Site</a>
                        <a v-if="project.video" :href="project.video" target="_blank">Video Walkthrough</a>
                    </div>
                </div>

                <!-- Image Gallery -->
                <div class="gallery">
                    <img :src="project.images[currentImageIndex[index]]" alt="Project image" class="gallery-image">
                    <button class="gallery-prev" @click="prevImage(index)">
                        <font-awesome-icon :icon="['fas', 'chevron-left']" />
                    </button>
                    <button class="gallery-next" @click="nextImage(index)">
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {

    data() {
        return {
            currentImageIndex: [0, 0, 0], // Track the current image index for each project
            projects: [
                {
                    name: "ACGCreator - Web Game Engine",
                    description: `
            ACGCreator is an interactive visual novel game engine that allows creators to build immersive storytelling experiences without any coding background.
            I contributed to both the frontend and backend, focusing on optimizing the game’s performance and enhancing user experience.
        `,
                    techStack: ["Unity", "C#", "Vue.js", "Nuxt.js"],
                    contributions: [
                        "Frontend Development: Implemented key components of the game editor using Vue.js and Nuxt.js, focusing on the design and functionality of the web engine.",
                        "Mobile Optimization: Tailored the visual novel interface for mobile platforms using Unity, ensuring smooth performance across devices.",
                        "Web Interface Development: Contributed to the architecture and layout of the web editor, allowing creators to easily build and preview their games."
                    ],
                    liveDemo: "https://acgcreator.com/ja-JP",
                    video: "https://www.youtube.com/watch?v=iKEDTVtmtl0",
                    images: [
                        new URL('@/assets/projects/ge-editor-1.png', import.meta.url).href,
                        new URL('@/assets/projects/ge-editor-2.png', import.meta.url).href,
                        new URL('@/assets/projects/ge-editor-3.png', import.meta.url).href,
                        new URL('@/assets/projects/ge-editor-4.png', import.meta.url).href
                    ]
                },
                {
                    name: "ACGCreator - Creator Studio",
                    description: `
            The Creator Studio is the central hub for game developers to manage and publish their visual novel projects. 
            It allows creators to upload assets, set pricing, and submit their games for review before publishing.
        `,
                    techStack: ["Vue.js", "Nuxt.js", "GraphQL", "Node.js", "JavaScript"],
                    contributions: [
                        "Asset Management: Developed the interface for creators to upload and manage screenshots, trailers, and other game assets.",
                        "Pricing & Monetization: Implemented functionality for creators to set the price for their games and manage in-app purchases.",
                        "Game Submission Flow: Designed and implemented the workflow for creators to submit their games for review, enabling an efficient review process for the team.",
                        "Approval & Publishing: Contributed to the review system that allows admins to review submissions and either approve or reject games based on quality and compliance."
                    ],
                    liveDemo: "https://acgcreator.com/ja-JP",
                    images: [
                        new URL('@/assets/projects/acg-lobby-1.png', import.meta.url).href,
                        new URL('@/assets/projects/acg-lobby-2.png', import.meta.url).href,
                        new URL('@/assets/projects/acg-lobby-3.png', import.meta.url).href
                    ]
                }
            ]
        };
    },
    methods: {
        nextImage(index) {
            const project = this.projects[index];
            this.currentImageIndex[index] = (this.currentImageIndex[index] + 1) % project.images.length;
        },
        prevImage(index) {
            const project = this.projects[index];
            this.currentImageIndex[index] =
                (this.currentImageIndex[index] - 1 + project.images.length) % project.images.length;
        }
    }
};
</script>

<style scoped lang="scss">
.projects {
    padding: 10rem;
    color: #fff;
    width: 100%;
}

h2 {
    font-size: 2.5rem;
}

.project-list {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
}

.project {
    display: flex;
    justify-content: space-between;
    background: rgba(255, 68, 0, 0.1);
    padding: 1.5rem;
    border-radius: 10px;
    width: 100%;
}

.project-info {
    flex: 1;
    margin-right: 2rem;
}

h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #ffc400;
}

p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.gallery {
    position: relative;
    /* Ensure the buttons are positioned relative to the gallery container */
    width: 800px;
    display: flex;
    justify-content: center;
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    position: relative;
}

.gallery-prev,
.gallery-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    margin-left: 10px;
    margin-right: 10px;
}

.gallery-prev {
    left: 10px;
    /* Align to the left edge */
}

.gallery-next {
    right: 10px;
    /* Align to the right edge */
}

button:hover {
    background-color: #e03e00;
}


.tech-used {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    li {
        background-color: rgba(255, 68, 0, 0.438);
        padding: 0.5rem 1rem;
        border-radius: 8px;
    }
}

.project-links a {
    margin-right: 1rem;
    color: #ffffff;
    text-decoration: none;
}

.project-links a:hover {
    text-decoration: underline;
}

.contributions {
    margin-bottom: 1rem;

    h4 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    ul {
        padding-left: 1.1rem;

        li {
            margin-bottom: 0.5rem;
        }
    }
}
</style>
