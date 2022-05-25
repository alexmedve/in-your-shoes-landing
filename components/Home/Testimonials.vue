<template>
    <section class="home-testimonials section-m-top">
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
                    :class="['home-testimonials__dot', {'home-testimonials__dot--active': i == currentTestimonial}]"
                    @click="currentTestimonial = i"
                >
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
                        title: 'InYourShoes’s team seamlessly integrated with ours from the first day of our partnership.',
                        content: 'They helped us focus our efforts on high-intent audiences; as a result, we managed to successfully reach customers who are truly interested in data privacy and seek tools like ours that help them take ownership of their information.',
                        imageUrl: 'ghostery.png'

                    },
                    {
                        title: 'The squad feels like an extension of my own marketing team.',
                        content: 'We run as fast as possible to hit our goals — and the squad’s response time and agility have been really impressive.',
                        imageUrl: 'invisibly.png'
                    },
                    {
                        title: 'We’ve found the InYourShoes team to be a passionate partner',
                        content: 'The US market has been a major challenge for us, but we’ve found the InYourShoes team to be a passionate partner that really understands the digital funnel from top to bottom. Our acquisition and retention numbers are continuing to improve every month.',
                        imageUrl: 'carli.svg'
                    },
                    {
                        title: 'The InYourShoes team is fast, savvy, and truly ahead of the curve',
                        content: 'The growth squad model helped us stay agile yet laser-focused in achieving key metrics and growth objectives. InYourShoes is quick and consistent in delivering top and middle funnel growth.',
                        imageUrl: 'steer.svg'
                    }
                ]
            }
        }
    }
</script>