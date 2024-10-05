<template>
    <section class="contact">
        <h2>Contact Me</h2>
        <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />

            <label for="message">Message:</label>
            <textarea id="message" v-model="formData.message" required></textarea>

            <button type="submit">Send</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log('Form Submitted:', this.formData);
            // Here you can handle form submission (e.g., use EmailJS, API calls, etc.)
            alert('Form submitted successfully!');
            // Clear form
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
        }
    }
};
</script>

<style scoped>
.contact {
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 1rem;
    font-weight: bold;
}

input,
textarea {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: none;   
    border-radius: 4px;
    font-size: 1rem;
}

button {
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: #ff4500;
    /* Orange fire-like color */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #ff6347;
    /* Slightly lighter red for hover effect */
}
</style>