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
                        title: 'Testimonial title lorem ipsum lorelm  ipsum lorems sip',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
                    },
                    {
                        title: 'Testimonial title lorem ipsum lorelm  ipsum lorems sip',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
                    }
                ]
            }
        }
    }
</script>