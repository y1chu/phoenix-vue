<template>
    <section class="about" data-aos="fade-up">
        <div class="about-content">
            <div class="about-text">
                <h2>{{ $t('aboutMe.title') }}</h2>
                <p>
                    {{ $t('aboutMe.intro') }}
                </p>
                <p>
                    {{ $t('aboutMe.details') }}
                </p>
                <h3>{{ $t('aboutMe.technologiesTitle') }}</h3>
                <ul class="tech-list">
                    <li>{{ $t('aboutMe.technologies.vue') }}</li>
                    <li>{{ $t('aboutMe.technologies.c') }}</li>
                    <li>{{ $t('aboutMe.technologies.java') }}</li>
                    <li>{{ $t('aboutMe.technologies.html') }}</li>
                    <li>{{ $t('aboutMe.technologies.unity') }}</li>
                </ul>
            </div>
            <div class="about-image">
                <img src="@/assets/Me.jpg" alt="Ingrid Chu" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutSection'
};
</script>

<style scoped lang="scss">
.about {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    color: #fff;
}

.about-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    gap: 3rem;
}

.about-text {
    flex: 1;
    max-width: 60%;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1.2rem;
        line-height: 1.6;
    }

    h3 {
        font-size: 1.8rem;
        margin-top: 1.5rem;
    }

    .tech-list {
        list-style: none;
        padding: 0;
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        li {
            background-color: rgba(255, 68, 0, 0.438);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 1rem;
        }

        li:hover {
            background-color: rgba(255, 68, 0, 0.8);
        }
    }
}

.about-image {
    flex: 1;
    max-width: 40%;

    img {
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
}
</style>
