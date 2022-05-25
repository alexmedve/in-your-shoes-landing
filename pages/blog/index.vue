<template>
    <div class="blog-page container">
        <header class="blog-page__header">
            <h2 class="heading-2">
                Blog posts
            </h2>
        </header>
        <BlogCard
            v-for="(blog, i) in articles"
            :key="'blog' + i"
            :blog="blog"
        />
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'blog',
        methods: {
            ...mapActions({
                fetchArticles: 'fetchArticles'
            })
        },
        computed: {
            ...mapGetters({
                articles: 'articles'
            })
        },
        mounted() {
            this.fetchArticles();
        }
    }
</script>