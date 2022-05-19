<template>
    <section class="home-blog section-m-top">
        <div class="container">
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
                v-for="(blog, i) in blogPosts"
                :key="'blog' + i"
                :blog="blog"
                class="home-blog__card"
            />
        </div>
    </section>
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
                    }
                ]
            }
        }
    }
</script>