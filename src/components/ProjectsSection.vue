<template>
    <section class="projects" data-aos="fade-up">
        <div class="project-list">
            <h2>{{ $t('projects.title') }}</h2>
            <div v-for="(project, index) in localizedProjects" :key="index" class="project">
                <div class="project-info">
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                    <div class="contributions">
                        <h4>{{ $t('projects.contributions') }}</h4>
                        <ul>
                            <li v-for="(contribution, i) in project.contributions" :key="i">{{ contribution }}</li>
                        </ul>
                    </div>

                    <ul class="tech-used">
                        <li v-for="tech in project.techStack" :key="tech">{{ tech }}</li>
                    </ul>
                    <div class="project-links">
                        <a v-if="project.liveDemo" :href="project.liveDemo" target="_blank">{{ $t('projects.liveDemo')
                            }}</a>
                        <a v-if="project.video" :href="project.video" target="_blank">{{ $t('projects.videoWalkthrough')
                            }}</a>
                    </div>
                </div>

                <!-- Image Gallery -->
                <div class="gallery">
                    <img :src="project.images[currentImageIndex[index]]" alt="Project image" class="gallery-image"
                        :ref="'galleryImage-' + index">
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
            currentImageIndex: [0, 0, 0],
            transitioning: [false, false, false]
        };
    },
    computed: {
        localizedProjects() {
            return [
                {
                    name: this.$t('projects.acgCreator.name'),
                    description: this.$t('projects.acgCreator.description'),
                    techStack: [
                        this.$t('projects.acgCreator.techStack.unity'),
                        this.$t('projects.acgCreator.techStack.cSharp'),
                        this.$t('projects.acgCreator.techStack.vueJs'),
                        this.$t('projects.acgCreator.techStack.nuxtJs')
                    ], // Translation for tech stack
                    contributions: [
                        this.$t('projects.acgCreator.contributions.frontend'),
                        this.$t('projects.acgCreator.contributions.mobileOptimization'),
                        this.$t('projects.acgCreator.contributions.webInterface')
                    ], // Translation for contributions
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
                    name: this.$t('projects.creatorStudio.name'),
                    description: this.$t('projects.creatorStudio.description'),
                    techStack: [
                        this.$t('projects.creatorStudio.techStack.vueJs'),
                        this.$t('projects.creatorStudio.techStack.nuxtJs'),
                        this.$t('projects.creatorStudio.techStack.graphQl'),
                        this.$t('projects.creatorStudio.techStack.nodeJs')
                    ],
                    contributions: [
                        this.$t('projects.creatorStudio.contributions.assetManagement'),
                        this.$t('projects.creatorStudio.contributions.pricingMonetization'),
                        this.$t('projects.creatorStudio.contributions.submissionFlow'),
                        this.$t('projects.creatorStudio.contributions.approvalPublishing')
                    ],
                    liveDemo: "https://acgcreator.com/ja-JP",
                    images: [
                        new URL('@/assets/projects/acg-lobby-1.png', import.meta.url).href,
                        new URL('@/assets/projects/acg-lobby-2.png', import.meta.url).href,
                        new URL('@/assets/projects/acg-lobby-3.png', import.meta.url).href
                    ]
                },
                {
                    name: this.$t('projects.drPortfolio.name'),
                    description: this.$t('projects.drPortfolio.description'),
                    techStack: [
                        this.$t('projects.drPortfolio.techStack.vueJs'),
                        this.$t('projects.drPortfolio.techStack.nuxtJs'),
                        this.$t('projects.drPortfolio.techStack.firebase'),
                        this.$t('projects.drPortfolio.techStack.contentful')
                    ],
                    contributions: [
                        this.$t('projects.drPortfolio.contributions.blogSystem'),
                        this.$t('projects.drPortfolio.contributions.portfolioShowcase'),
                        this.$t('projects.drPortfolio.contributions.firebaseAuth'),
                        this.$t('projects.drPortfolio.contributions.adminDashboard')
                    ],
                    liveDemo: "https://朱醫師的骨科園區.com",
                    images: [
                        new URL('@/assets/projects/dr-portfolio-1.png', import.meta.url).href,
                        new URL('@/assets/projects/dr-portfolio-2.png', import.meta.url).href,
                        new URL('@/assets/projects/dr-portfolio-3.png', import.meta.url).href
                    ]
                }
            ];
        }
    },
    methods: {
        nextImage(index) {
            if (this.transitioning[index]) return;
            this.transitioning[index] = true;
            const currentImage = this.$refs[`galleryImage-${index}`][0];
            currentImage.classList.add("fade-out");

            setTimeout(() => {
                this.currentImageIndex[index] = (this.currentImageIndex[index] + 1) % this.localizedProjects[index].images.length;
                currentImage.classList.remove("fade-out");
                this.transitioning[index] = false;
            }, 500);
        },
        prevImage(index) {
            if (this.transitioning[index]) return;
            this.transitioning[index] = true;

            const currentImage = this.$refs[`galleryImage-${index}`][0];
            currentImage.classList.add("fade-out");

            setTimeout(() => {
                this.currentImageIndex[index] = (this.currentImageIndex[index] - 1 + this.localizedProjects[index].images.length) % this.localizedProjects[index].images.length;
                currentImage.classList.remove("fade-out");
                this.transitioning[index] = false;
            }, 500);
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
    font-weight: bold;
}

p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.gallery {
    position: relative;
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
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
}

.gallery-image.fade-out {
    opacity: 0;
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
}

.gallery-next {
    right: 10px;
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

    li:hover {
        background-color: rgba(255, 68, 0, 0.8);
    }
}

.project-links a {
    margin-right: 1rem;
    color: #ffffff;
    text-decoration: none;
}

.project-links a {
    position: relative;
    color: #ffc400;
    text-decoration: none;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #ffc400;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
    }
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
