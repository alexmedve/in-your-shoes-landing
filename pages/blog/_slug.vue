<template>
    <div class="container">
        <section class="blog-post section-m-top">
            <NuxtLink
                to="/blog"
                class="heading-4 blog-post__back"
            >
                <div class="blog-post__back-icon">
                    <img src="@/assets/icons/arrow.svg" class="u-image-contain">
                </div>
                Back
            </NuxtLink>
            <h2 class="heading-2">
                Who we are
            </h2>
            <div class="blog-post__category heading-4">
                Category: <span class="u-text-secondary">Marketing</span>
            </div>
            <div class="blog-post__image">
                <img src="@/assets/images/home-about.jpg" alt="Who we are" class="u-image-cover">
            </div>
            <div class="blog-post__meta">
                <div class="blog-post__avatar">
                    <img src="@/assets/images/team/alexandru-medvedeu.jpg" alt="Alexandru Medvedeu" class="u-image-cover">
                </div>
                <div class="blog-post__meta-info">
                    <div class="small-copy">
                        5th of May 2022, by <strong>Alexandru Medvedeu</strong>
                    </div>
                </div>
            </div>
            <p class="body-copy">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy tex
                <br>
                <br>
                t of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply 
                <br>        
                <br>
                ummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and 
                <br>        
                <br>
                typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            </p>
            <div class="blog-post__share">
                <h4 class="heading-4">
                    Share:
                </h4>
                <a href="/" class="blog-post__share-icon">
                    <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" class="u-image-contain">
                </a>
                <a href="/" class="blog-post__share-icon">
                    <img src="@/assets/icons/whatsapp.svg" alt="Whats App" class="u-image-contain">
                </a>
                <a href="/" class="blog-post__share-icon">
                    <img src="@/assets/icons/facebook.svg" alt="Facebook" class="u-image-contain">
                </a>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'blog-post',
        data() {
            return {
                articleId: 3
            }
        },
        methods: {
            ...mapActions({
                sessionArticles: 'sessionArticles'
            })
        },
        mounted() {
            this.sessionArticles(this.articleId);
        }
    }
</script>