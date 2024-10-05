<template>
    <section class="hero">
        <div class="hero-content">
            <p class="small-intro">Hello there! I'm</p>
            <h1 class="big-name">Ingrid Chu</h1>
            <p class="middle-intro">I play games, and I make them.</p>
            <p class="small-description">
                I'm a software engineer with a B.S. in Mathematics and Computer Science from UC San Diego. 
                Skilled in Unity game development and backed by expertise in C#, C++, I bridge the gap between 
                tech and artistry, inspired by gaming legends like Final Fantasy X.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection'
};
</script>

<style scoped lang="scss">
.hero {
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .hero-content {
        max-width: 600px;
        
        .small-intro {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            font-weight: 300;
        }

        .big-name {
            font-size: 4.5rem;
            font-weight: 700;
            letter-spacing: 3px;
            margin-bottom: 1rem;
            color: #ffe600;
        }

        .middle-intro {
            font-size: 1.8rem;
            font-weight: 400;
            margin-bottom: 1.5rem;
        }

        .small-description {
            font-size: 1.2rem;
            line-height: 1.5;
            margin-top: 1rem;
        }
    }
}
</style>
