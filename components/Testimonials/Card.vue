<template>
    <div class="testimonial-card card-white">
        <div class="testimonial-card__header">
            <div class="testimonial-card__logo">
                <!-- <img src="testimonial.imgUrl" alt="" class="u-image-contain"> -->
            </div>
            <h4 class="heading-4">
                {{testimonial.title}}
            </h4>
        </div>
        <p class="body-copy">
            {{testimonial.content}}
        </p>
    </div>
</template>

<script>
export default {    
    props: [
        'testimonial'
    ]  
}
</script>