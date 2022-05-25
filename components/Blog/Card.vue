<template>
    <NuxtLink :to="`/blog/${blog.id}`" class="blog-card card-white">
        <h4 class="heading-4">
            {{blog.title}}
        </h4>
        <div class="blog-card__image">
            <img :src="blog.cover_url" :alt="blog.title" class="u-image-cover">
        </div>
        <h4 class="heading-4 u-text-secondary">
            {{articleCategories}}
        </h4>
    </NuxtLink>
</template>

<script>
    export default {
        props: [
            'blog'
        ],
        computed: {
            articleCategories() {
                let result = "";
                if(this.blog.categories) {
                    this.blog.categories.forEach(tag => {
                        result += tag.name;
                        result += ", ";
                    });
                    result = result.slice(0, -2);
                }
                return result;
            }
        }
    }
</script>