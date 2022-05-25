<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__col">
                <NuxtLink
                    to="/"
                    class="footer__logo"
                >
                    <img src="@/assets/images/logo.svg" alt="InYourShoes Consulting Logo" class="u-image-contain">
                </NuxtLink>
            </div>
            <div class="footer__col">
                <h4 class="heading-4">
                    Menu
                </h4>
                <NuxtLink
                    v-for="(menuItem, i) in menuItems"
                    :key="i"
                    :to="menuItem.route"
                    @click.native="showMobileMenu = false"
                    class="footer__link body-copy"
                >
                    {{menuItem.name}}
                </NuxtLink>
            </div>
            <div class="footer__col">
                <h4 class="heading-4">
                    Services
                </h4>
                <NuxtLink
                    v-for="(service, i) in services"
                    :key="i"
                    :to="service.route"
                    @click.native="showMobileMenu = false"
                    class="footer__link body-copy"
                >
                    {{service.name}}
                </NuxtLink>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="body-copy">
                © InYourShoes Consulting SRL | <NuxtLink to="/terms-and-conditions" class="footer__terms-link">Terms and conditions</NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
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
                ],
                services: [
                    { 
                        name: 'Consulting',
                        route: 'consulting'
                    },
                    { 
                        name: 'Digital marketing',
                        route: 'digital-marketing'
                    },
                    { 
                        name: 'Emai Marketing',
                        route: 'email-marketing'
                    },
                    { 
                        name: 'UI/UX Design',
                        route: 'ui-ux-design'
                    },
                    { 
                        name: 'SEO Optimization',
                        route: 'seo-optimization'
                    },
                    { 
                        name: 'Project management',
                        route: 'project-management'
                    }
                ]
            }
        }
    }
</script>