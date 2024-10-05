<template>
    <section class="about" data-aos="fade-up">
        <div class="about-content">
            <!-- Left Side: Text Content -->
            <div class="about-text">
                <h2>About Me</h2>
                <p>
                    Hello! I'm Ingrid Chu. Navigating the world of computer science, I've always been drawn to the
                    intersection of innovation and impactful solutions. My journey took root at UC San Diego, where I
                    not only honed my skills but also engaged in dynamic projects that challenged the boundaries of
                    traditional development.
                </p>
                <p>
                    Over the years, I've had the opportunity to delve into various facets of tech, from robust
                    application development to understanding the nuances of game-inspired programming. With each
                    project, I carry forward my commitment to quality and a vision of merging tech with creativity. As
                    the digital landscape continually evolves, I'm excited about the boundless opportunities that lie
                    ahead.
                </p>
                <h3>Technologies I've been working with recently:</h3>
                <ul class="tech-list">
                    <li>Vue.js, Nuxt 2</li>
                    <li>C, C++, C#</li>
                    <li>Java</li>
                    <li>HTML, CSS, JS</li>
                    <li>Unity</li>
                </ul>
            </div>

            <!-- Right Side: Image -->
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
    /* Gap between text and image */
}

.about-text {
    flex: 1;
    /* Text takes up available space */
    max-width: 60%;
    /* Limit text width to 60% */

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
    /* Image takes up available space */
    max-width: 40%;

    img {
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        /* Subtle shadow */
    }
}
</style>