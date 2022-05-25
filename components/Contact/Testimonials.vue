<template>
    <section class="contact-testimonials container section-m-top">
        <TestimonialsCard
            v-for="(testimonial, i) in testimonials"
            :key="'testimonial' + i"
            :testimonial="testimonial"
        />
    </section>
</template>

<script>
    export default {
        data() {
            return {
                testimonials: [
                    {
                        title: 'InYourShoes’s team seamlessly integrated with ours from the first day of our partnership.',
                        content: 'They helped us focus our efforts on high-intent audiences; as a result, we managed to successfully reach customers who are truly interested in data privacy and seek tools like ours that help them take ownership of their information.',
                        imageUrl: 'ghostery.png'

                    },
                    {
                        title: 'The squad feels like an extension of my own marketing team.',
                        content: 'We run as fast as possible to hit our goals — and the squad’s response time and agility have been really impressive.',
                        imageUrl: 'invisibly.png'
                    }
                ]
            }
        }
    }
</script>