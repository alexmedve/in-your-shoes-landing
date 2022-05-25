<template>
    <nav class="navbar">
        <div class="navbar__container">
            <div class="navbar__mask"></div>
            <NuxtLink
                to="/"
                class="navbar__logo"
                @click.native="showMobileMenu = false"
            >
                <img src="@/assets/images/logo.svg" alt="InYourShoes Consulting Logo" class="u-image-contain">
            </NuxtLink>
            <div :class="['navbar__menu', {'navbar__menu--active': showMobileMenu}]">
                <NuxtLink
                    v-for="(menuItem, i) in menuItems"
                    :key="i"
                    :to="menuItem.route"
                    @click.native="showMobileMenu = false"
                    class="navbar__menu-item"
                >
                    {{menuItem.name}}
                </NuxtLink>
                <UiButton
                    placeholder="Let's talk"
                    class="button--small"
                    type="router-link"
                    link="/contact"
                    @click.native="showMobileMenu = false"
                />
            </div>
            <div class="navbar__mobile-toggle" @click="showMobileMenu = !showMobileMenu">
                <span :class="['navbar__mobile-icon', {'navbar__mobile-icon--active': showMobileMenu}]"></span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu: false,
            menuItems: [
                {
                    name: 'Services',
                    route: '/services'
                },
                {
                    name: 'Blog',
                    route: '/blog'
                },
                {
                    name: 'About us',
                    route: '/about-us'
                },
                {
                    name: 'Contact',
                    route: '/contact'
                }
            ]
        }
    },
    methods: {
        closeMobileMenu() {
            this.showMobileMenu = false;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.closeMobileMenu);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.closeMobileMenu);
    }
}
</script>