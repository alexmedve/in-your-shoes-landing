<template>
    <section class="home-blog section-m-top">
        <div class="container" v-if="!isLoadingArticles && articlesShort.length > 0">
            <div class="home-blog__text">
                <h2 class="heading-2 home-blog__title">
                    Blog posts
                </h2>
                <NuxtLink
                    class="link"
                    to="blog"
                >
                    View more articles
                </NuxtLink>
            </div>
            <BlogCard
                v-for="(blog, i) in articlesShort"
                :key="'blog' + i"
                :blog="blog"
                class="home-blog__card"
            />
        </div>
        <div class="container" v-if="isLoadingArticles">
            <UiLoader text="Loading latest blog posts...">
            </UiLoader>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        methods: {
            ...mapActions({
                fetchArticles: 'fetchArticles'
            })
        },
        computed: {
            ...mapGetters({
                articlesShort: 'articlesShort',
                isLoadingArticles: 'isLoadingArticles'
            })
        },
        mounted() {
            if(this.articlesShort.length == 0)
                this.fetchArticles();
        }
    }
</script>