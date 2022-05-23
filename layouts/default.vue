<template>
    <div class="nuxt-layout">
        <UiNavbar />
        <Nuxt />
        <UiCta v-if="showCtaSection" />
        <UiNewsletter />
        <UiFooter />
        <UiCookieBanner />
    </div>
</template>

<script>
export default {
    mounted() {
        // if (location.protocol !== 'https:') {
        //     location.replace(`https:${location.href.substring(location.protocol.length)}`);
        // }
    },
    methods: {
        
    },
    computed: {
        showCtaSection() {
            return (this.$route.name !== 'contact');
        }
    }
}
</script>