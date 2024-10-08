<template>
    <section class="experience" data-aos="fade-up">
        <div class="experience-container">
            <div class="experience-list">
                <h2 class="experience-title">{{ $t('experience.title') }}</h2>
                <ul>
                    <li v-for="(job, index) in jobs" :key="job.company" :class="{ active: selectedJobIndex === index }"
                        @click="selectJob(index)">
                        {{ $t(`experience.jobs.${job.company}.company`) }}
                    </li>
                </ul>
            </div>

            <div class="experience-details">
                <transition name="custom-slide" mode="out-in">
                    <div v-if="selectedJob" :key="selectedJob.company" class="job-details">
                        <h3>{{ $t(`experience.jobs.${selectedJob.company}.title`) }}
                            <a :href="selectedJob.url" target="_blank" class="company-name">@ {{
                                $t(`experience.jobs.${selectedJob.company}.company`) }}</a>
                        </h3>
                        <p class="date">{{ $t(`experience.jobs.${selectedJob.company}.dates`) }}</p>
                        <p v-for="i in 3" :key="i" class="job-description">
                            {{ $t(`experience.jobs.${selectedJob.company}.description.${i - 1}`) }}
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
            selectedJobIndex: 0,
            jobs: [
                {
                    company: "playmeow",
                    url: "https://acgcreator.com"
                },
                {
                    company: "ucsd",
                    url: "https://jacobsschool.ucsd.edu"
                },
                {
                    company: "cosmos",
                    url: "https://jacobsschool.ucsd.edu/cosmos"
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
            cursor: pointer;
            padding: 1rem;
            background: rgba(255, 69, 0, 0.1);
            margin-bottom: 1rem;
            border-radius: 10px;
            transition: all 0.5s ease;
            color: #ffffff;

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
            }

            &:hover::before {
                opacity: 0;
                transform: scale(0.5, 0.5);
            }

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
            }

            &:hover {
                z-index: 2;
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

    .company-name {
        color: rgba(89, 230, 199, 255);
        font-style: italic;
        text-decoration: underline;
        transition: color 0.3s ease;
    }

    .company-name:hover {
        color: #1eff00;
    }
}

.custom-slide-enter-active {
    animation: slide-in-elliptic-right-fwd 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.custom-slide-leave-active {
    animation: slide-out-elliptic-right-bck 0.5s ease-in both;
}


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
