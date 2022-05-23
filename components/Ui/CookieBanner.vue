<template>
    <div class="cookie-banner" v-if="!consent">
        <div class="container">
            <div class="small-copy u-text-white">
                By navigating on this website you agree with our <NuxtLink to="/terms-and-conditions" class="cookie-banner__link">terms and conditions</NuxtLink>
            </div>
            <div class="cookie-banner__close" @click="setConsent">
                <img src="@/assets/icons/close.svg" alt="Close" class="u-image-contain">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            consent: true
        }
    },
    methods: {
        setConsent() {
            localStorage.setItem('terms-consent', true);
            this.consent = true;
        },
        getConsent() {
            this.consent = localStorage.getItem('terms-consent');
        }
    },
    mounted() {
        this.getConsent();
    }
}
</script>