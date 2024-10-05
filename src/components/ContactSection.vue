<template>
    <section class="contact" data-aos="fade-up">
        <div class="contact-container">
            <h2 class="contact-header">Want to know more?</h2>
            <p class="contact-description">
                Whether you'd like to debate which Final Fantasy reigns supreme, have questions about FFXIV, or are
                interested in working together, I'd love to hear from you! Feel free to reach out to me via email or
                LinkedIn.
            </p>
            <div class="contact-button-container">
                <a href="mailto:y1chu@ucsd.edu" class="contact-btn">
                    <font-awesome-icon icon="envelope" class="icon" />
                    <span class="t">Contact Me!</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ContactSection",
};
</script>

<style scoped lang="scss">
.contact {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    color: white;
    text-align: center;
    font-family: 'Fira Sans', sans-serif;
}

.contact-container {
    max-width: 800px;
    margin: auto;
}

.contact-header {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
}

.contact-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
}

.contact-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Button Styles */
.contact-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 220px;
    height: 50px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    border: 2px solid #ffffff;
    text-align: center;
    overflow: hidden;
    transition: all 0.35s;
    z-index: 1;
    border-radius: 10px;
}

.contact-btn span {
    position: relative;
    z-index: 2; /* Keep text on top of background */
}

.contact-btn:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #ff7f00;
    transition: all 0.35s;
    z-index: 1;
}

.contact-btn:hover {
    color: white;
}

.contact-btn:hover:after {
    width: 100%;
}

/* Icon Styling */
.contact-btn .icon {
    font-size: 18px;
    margin-right: 10px;
    z-index: 2; /* Keep the icon on top */
    transition: all 0.35s;
}
</style>
