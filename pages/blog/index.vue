<template>
    <div class="blog-page container">
        <header class="blog-page__header">
            <h2 class="heading-2">
                Blog posts
            </h2>
        </header>
        <BlogCard
            v-for="(blog, i) in blogPosts"
            :key="'blog' + i"
            :blog="blog"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                blogPosts: [
                    {
                        slug: '/blog/inbound-marketing-and-its-benefits',
                        title: 'Inbound marketing and it’s benefits',
                        imageUrl: '',
                        tags: ['Marketing', 'Strategy']
                    },
                    {
                        slug: '/blog/inbound-marketing-and-its-benefits',
                        title: 'Inbound marketing and it’s benefits',
                        imageUrl: '',
                        tags: ['Marketing', 'Strategy']
                    },
                    {
                        slug: '/blog/inbound-marketing-and-its-benefits',
                        title: 'Inbound marketing and it’s benefits',
                        imageUrl: '',
                        tags: ['Marketing', 'Strategy']
                    },
                    {
                        slug: '/blog/inbound-marketing-and-its-benefits',
                        title: 'Inbound marketing and it’s benefits',
                        imageUrl: '',
                        tags: ['Marketing', 'Strategy']
                    },
                    {
                        slug: '/blog/inbound-marketing-and-its-benefits',
                        title: 'Inbound marketing and it’s benefits',
                        imageUrl: '',
                        tags: ['Marketing', 'Strategy']
                    },
                    {
                        slug: '/blog/inbound-marketing-and-its-benefits',
                        title: 'Inbound marketing and it’s benefits',
                        imageUrl: '',
                        tags: ['Marketing', 'Strategy']
                    },
                ]
            }
        }
    }
</script>