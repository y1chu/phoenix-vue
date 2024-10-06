<template>
    <section class="hero">
        <div class="hero-content">
            <p class="small-intro">{{ $t('hero.smallIntro') }}</p>
            <h1 class="big-name" :class="{ 'japanese-font-size': isJapanese }">
                {{ $t('hero.bigName') }}
            </h1>
            <p class="middle-intro">{{ $t('hero.middleIntro') }}</p>
            <p class="small-description">
                {{ $t('hero.smallDescription') }}
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
    computed: {
        isJapanese() {
            return this.$i18n.locale === 'ja';
        }
    }
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

        .japanese-font-size {
            font-size: 3.5rem;
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
