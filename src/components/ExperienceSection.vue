<template>
    <section class="experience" data-aos="fade-up">
        <!-- Title positioned above both the list and details -->
        <div class="experience-container">
            <!-- Sidebar: List of Jobs/Companies -->
            <div class="experience-list">
                <h2 class="experience-title">Experience</h2>
                <ul>
                    <li v-for="(job, index) in jobs" :key="job.company" :class="{ active: selectedJobIndex === index }"
                        @click="selectJob(index)">
                        {{ job.company }}
                    </li>
                </ul>
            </div>

            <!-- Right Side: Job Details -->
            <div class="experience-details">
                <transition name="custom-slide" mode="out-in">
                    <div v-if="selectedJob" :key="selectedJob.company" class="job-details">
                        <h3>{{ selectedJob.title }}
                            <a :href="selectedJob.url" target="_blank" class="company-name">@ {{ selectedJob.company
                                }}</a>
                        </h3>
                        <p class="date">{{ selectedJob.dates }}</p>
                        <p v-for="(desc, i) in selectedJob.description" :key="i" class="job-description">
                            {{ desc }}
                        </p>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            selectedJobIndex: 0, // Default job is PlayMeow
            jobs: [
                {
                    company: "PlayMeow",
                    title: "Software Engineer",
                    dates: "Aug 2023 - Present",
                    url: "https://acgcreator.com", // Add the company's URL
                    description: [
                        "Developed the mobile game interface tailored for visual novels, optimizing game effects and rendering within Unity.",
                        "Frontend development using Vue.js and Nuxt 2, contributing to the web engine architecture and interface development.",
                        "Integrated Vue-based components to improve user interaction and web performance, ensuring responsive design and seamless cross-platform experience."
                    ]
                },
                {
                    company: "UC San Diego",
                    title: "Computer Science Teacher's Assistant",
                    dates: "Sep 2021 - Mar 2024",
                    url: "https://jacobsschool.ucsd.edu",
                    description: [
                        "Assisted instructors in proctoring exams, grading quizzes and programming assignments, and addressing student inquiries on the Piazza class forum.",
                        "Conducted lab sessions to support students in debugging Java code and navigating the Unix command line.",
                        "Facilitated review sessions and discussions for over 300 students to prepare for quizzes and weekly programming assignments."
                    ]
                },
                {
                    company: "COSMOS",
                    title: "Cluster Assistant",
                    dates: "Jun 2023 - Aug 2023",
                    url: "https://jacobsschool.ucsd.edu/cosmos",
                    description: [
                        "Collaborated with the COSMOS cluster lead faculty to support the implementation of academic course content during the COSMOS Summer 2023 program.",
                        "Assisted with lab experiences and provided essential support to lead faculty members.",
                        "Coordinated with COSMOS Program representatives to ensure smooth execution of assigned cluster courses, including content delivery and resource management."
                    ]
                }
            ]
        };
    },
    computed: {
        selectedJob() {
            return this.jobs[this.selectedJobIndex];
        }
    },
    methods: {
        selectJob(index) {
            this.selectedJobIndex = index; // Update selected job
        }
    }
};
</script>

<style scoped lang="scss">
.experience {
    color: #fff;
}

.experience-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.experience-container {
    display: flex;
    gap: 5rem;
}

.experience-list {
    flex: 1;

    ul {
        list-style: none;
        padding: 0;

        li {
            position: relative;
            /* Ensure relative positioning for pseudo-elements */
            cursor: pointer;
            padding: 1rem;
            background: rgba(255, 69, 0, 0.1);
            margin-bottom: 1rem;
            border-radius: 10px;
            transition: all 0.5s ease;
            color: #ffffff;

            /* Create background overlay */
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                background-color: rgba(255, 255, 255, 0.1);
                transition: all 0.3s;
                border-radius: inherit;
                /* Ensure the background overlay matches rounded corners */
            }

            &:hover::before {
                opacity: 0;
                transform: scale(0.5, 0.5);
                /* Shrink the background effect */
            }

            /* Add border animation */
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
                opacity: 0;
                transition: all 0.3s;
                border: 1px solid rgba(255, 255, 255, 0.5);
                transform: scale(1.2, 1.2);
                border-radius: inherit;
            }

            &:hover::after {
                opacity: 1;
                transform: scale(1, 1);
                /* Reset the scale to normal */
            }

            &:hover {
                z-index: 2;
                /* Bring hovered element on top */
            }
        }

        li.active {
            background: rgba(255, 68, 0, 0.5);
            border-radius: 10px;
        }
    }
}


.experience-details {
    flex: 2;
    height: 400px;
    width: 800px;
    overflow-y: auto;
}

.job-details {
    h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    .date {
        font-size: 1rem;
        color: #eeff00;
        margin-bottom: 1rem;
    }

    .job-description {
        font-size: 20px;
        margin-bottom: 1rem;
    }

    /* Style for the company name */
    .company-name {
        color: rgba(89, 230, 199, 255);
        font-style: italic;
        text-decoration: underline;
        transition: color 0.3s ease;
    }

    /* Add hover effect for the company name link */
    .company-name:hover {
        color: #1eff00;
    }
}

/* Custom Transition */
.custom-slide-enter-active {
    animation: slide-in-elliptic-right-fwd 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.custom-slide-leave-active {
    animation: slide-out-elliptic-right-bck 0.5s ease-in both;
}


/* Cross-Fade animations */
@-webkit-keyframes slide-in-elliptic-right-fwd {
    0% {
        -webkit-transform: translateX(800px) rotateY(-30deg) scale(0);
        transform: translateX(800px) rotateY(-30deg) scale(0);
        -webkit-transform-origin: -100% 50%;
        transform-origin: -100% 50%;
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0) rotateY(0) scale(1);
        transform: translateX(0) rotateY(0) scale(1);
        -webkit-transform-origin: -1800px 50%;
        transform-origin: -1800px 50%;
        opacity: 1;
    }
}

@keyframes slide-in-elliptic-right-fwd {
    0% {
        -webkit-transform: translateX(800px) rotateY(-30deg) scale(0);
        transform: translateX(800px) rotateY(-30deg) scale(0);
        -webkit-transform-origin: -100% 50%;
        transform-origin: -100% 50%;
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0) rotateY(0) scale(1);
        transform: translateX(0) rotateY(0) scale(1);
        -webkit-transform-origin: -1800px 50%;
        transform-origin: -1800px 50%;
        opacity: 1;
    }
}

@-webkit-keyframes slide-out-elliptic-right-bck {
    0% {
        -webkit-transform: translateX(0) rotateY(0) scale(1);
        transform: translateX(0) rotateY(0) scale(1);
        -webkit-transform-origin: -1800px 50%;
        transform-origin: -1800px 50%;
        opacity: 1;
    }

    100% {
        -webkit-transform: translateX(1000px) rotateY(-30deg) scale(0);
        transform: translateX(1000px) rotateY(-30deg) scale(0);
        -webkit-transform-origin: -100% 50%;
        transform-origin: -100% 50%;
        opacity: 1;
    }
}

@keyframes slide-out-elliptic-right-bck {
    0% {
        -webkit-transform: translateX(0) rotateY(0) scale(1);
        transform: translateX(0) rotateY(0) scale(1);
        -webkit-transform-origin: -1800px 50%;
        transform-origin: -1800px 50%;
        opacity: 1;
    }

    100% {
        -webkit-transform: translateX(1000px) rotateY(-30deg) scale(0);
        transform: translateX(1000px) rotateY(-30deg) scale(0);
        -webkit-transform-origin: -100% 50%;
        transform-origin: -100% 50%;
        opacity: 1;
    }
}
</style>
