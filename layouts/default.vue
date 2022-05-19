<template>
    <div class="nuxt-layout">
        <UiNavbar />
        <Nuxt />
        <UiCta />
        <UiNewsletter />
        <UiFooter />
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
        
    }
}
</script>