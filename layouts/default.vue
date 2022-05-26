<template>
    <div class="nuxt-layout">
        <UiNavbar />
        <Nuxt />
        <UiCta v-if="showCtaSection" />
        <UiNewsletter v-if="showNesletterSection" />
        <UiFooter />
        <UiCookieBanner />
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        mounted() {
            // if (location.protocol !== 'https:') {
            //     location.replace(`https:${location.href.substring(location.protocol.length)}`);
            // }
            this.checkSessionKey();
        },
        methods: {
            ...mapActions({
                getSessionKey: 'getSessionKey',
                sessionKeyFromLocalStorage: 'sessionKeyFromLocalStorage',
                sessionPages: 'sessionPages',
                updateSessionData: 'updateSessionData'
            }),
            checkSessionKey() {
                let sessionKey = localStorage.getItem('sessionKey');
                if(sessionKey) 
                    this.sessionKeyFromLocalStorage(sessionKey);
                else
                    this.getSessionKey();
            }
        },
        watch: {
            async $route(to, from) {
                let pageName = to.name
                if(
                    pageName !== 'blog-id' &&
                    pageName !== 'newsletter-preference' &&
                    pageName !== 'terms-and-conditions'
                ) {
                    if(pageName.startsWith('services-')) {
                        pageName = pageName.slice(9);
                    }
                    this.sessionPages(pageName);
                }
                let formData = {
                    "activity": {
                        "pages": this.sessionData.pages,
                        "articles": this.sessionData.articles,
                        "session_key": this.sessionData.key
                    }
                }
                this.updateSessionData(formData);
            },
        },
        computed: {
            ...mapGetters({
                sessionData: 'sessionData'
            }),
            showCtaSection() {
                return (
                    this.$route.name !== 'contact',
                    this.$route.name !== 'newsletter-preference',
                    this.$route.name !== 'terms'
                );
            },
            showNesletterSection() {
                return (
                    this.$route.name !== 'newsletter-preference',
                    this.$route.name !== 'terms'
                )
            }
        }
    }
</script>