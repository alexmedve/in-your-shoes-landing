<template>
    <NuxtLink :to="blog.slug" class="blog-card card-white">
        <h4 class="heading-4">
            {{blog.title}}
        </h4>
        <div class="blog-card__image">
            <img src="@/assets/images/home-about.jpg" :alt="blog.title" class="u-image-cover">
        </div>
        <h4 class="heading-4 u-text-secondary">
            {{articleTags}}
        </h4>
    </NuxtLink>
</template>

<script>
    export default {
        props: [
            'blog'
        ],
        computed: {
            articleTags() {
                let result = "";
                if(this.blog.tags) {
                    this.blog.tags.forEach(tag => {
                        result += tag;
                        result += ", ";
                    });
                    result = result.slice(0, -2);
                }
                return result;
            }
        }
    }
</script>