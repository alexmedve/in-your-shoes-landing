<template>
    <div class="container">
        <section class="blog-post section-m-top" v-if="article">
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
                {{article.title}}
            </h2>
            <div class="blog-post__category heading-4">
                Category: <span class="u-text-secondary">{{articleCategories}}</span>
            </div>
            <div class="blog-post__image">
                <img :src="article.cover_url" alt="Who we are" class="u-image-cover">
            </div>
            <div class="blog-post__meta">
                <div class="blog-post__avatar">
                    <img :src="article.author.avatar_url" :alt="article.author.name" class="u-image-cover">
                </div>
                <div class="blog-post__meta-info">
                    <div class="small-copy">
                        {{article.updated_at.slice(0, 10)}}, by <strong>{{article.author.name}}</strong>
                    </div>
                </div>
            </div>
            <p class="body-copy" v-html="article.content">
            </p>
            <div class="blog-post__share">
                <h4 class="heading-4">
                    Share:
                </h4>
                <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=`" target="_blank" class="blog-post__share-icon">
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
        <section class="blog-post section-m-top" v-else-if="isLoadingArticle">
            <UiLoader text="Loading blog post...">
            </UiLoader>
        </section>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'blog-post',
        data() {
            return {
                articleId: this.$route.params.id
            }
        },
        methods: {
            ...mapActions({
                sessionArticles: 'sessionArticles',
                fetchArticle: 'fetchArticle'
            })
        },
        computed: {
            ...mapGetters({
                article: 'article',
                isLoadingArticle: 'isLoadingArticle'
            }),
            articleCategories() {
                let result = "";
                if(this.article.categories) {
                    this.article.categories.forEach(tag => {
                        result += tag.name;
                        result += ", ";
                    });
                    result = result.slice(0, -2);
                }
                return result;
            }
        },
        mounted() {
            this.sessionArticles(this.articleId);
            this.fetchArticle(this.articleId);
            console.log(window.location.href);
        }
    }
</script>