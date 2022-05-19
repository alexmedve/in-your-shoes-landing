<template>
    <section class="home-testimonials section-m-top section-white">
        <div class="container">
            <div class="heading-2">
                Testimonials
            </div>
            <TestimonialsCard
                v-for="(testimonial, i) in testimonials"
                :key="'testimonial' + i"
                :testimonial="testimonial"
                :class="['home-testimonials__card', {'home-testimonials__card--active': i == currentTestimonial}]"
            />
            <div class="home-testimonials__dots">
                <div
                    v-for="(dot, i) in testimonials.length"
                    :key="'testimonial-dot' + i"
                    :class="['home-testimonials__dot', {'home-testimonials__dot--active': i == currentTestimonial}]">
                </div>
            </div>  
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                currentTestimonial: 0,
                testimonials: [
                    {
                        title: 'Testimonial title lorem ipsum lorelm  ipsum lorems sip',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
                    },
                    {
                        title: 'Testimonial title lorem ipsum lorelm  ipsum lorems sip',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
                    },
                    {
                        title: 'Testimonial title lorem ipsum lorelm  ipsum lorems sip',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '
                    },
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