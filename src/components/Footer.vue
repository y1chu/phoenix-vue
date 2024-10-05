<template>
    <footer class="footer">
        <!-- Social Media Icons -->
        <div class="footer-icons">
            <button class="icon-btn" @click="openLink('https://www.youtube.com/channel/UCgW0O1BlHVrl1WfIZ6rG0Aw')" aria-label="YouTube">
                <font-awesome-icon :icon="['fab', 'youtube']" />
            </button>
            <button class="icon-btn" @click="openLink('https://www.linkedin.com/in/ying-chen-chu/')" aria-label="LinkedIn">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </button>
            <button class="icon-btn" @click="openLink('https://github.com/y1chu')" aria-label="GitHub">
                <font-awesome-icon :icon="['fab', 'github']" />
            </button>
        </div>

        <!-- Email -->
        <div class="footer-email">
            <a href="mailto:y1chu@ucsd.edu">y1chu@ucsd.edu</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        openLink(url) {
            window.open(url, '_blank'); // Opens the link in a new tab
        }
    }
};
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 2rem;
    z-index: 10;
}

/* Icon Button Styling */
.icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.5rem;
    margin-right: 1.5rem;
    transition: transform 0.3s ease, color 0.3s ease;
}

/* Hover effect for the icon buttons */
.icon-btn:hover {
    transform: scale(1.2); /* Smooth scaling effect */
}

/* Email Link Styling */
.footer-email a {
    position: relative;
    color: #ffffff;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.3s ease;
}

/* Underline animation for email */
.footer-email a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
}

.footer-email a:hover::after {
    transform: scaleX(1);
}
</style>
