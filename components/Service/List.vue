<template>
    <section class="service-list section-m-top section-white">
        <div class="container">
            <h2 class="heading-2">
                We have the services you need to get to your growth destination
            </h2>
            <NuxtLink
                v-for="(service, i) in services"
                :key="'service' + i"
                :to="`/services/${service.route}`"
                class="service-list__card"
            >
                <div class="service-list__card-el">
                    <div class="service-list__card-circle"></div>
                    <div class="service-list__card-line"></div>
                </div>
                <h3 class="heading-3">
                    {{service.name}}
                </h3>
                <h4 class="heading-4">
                    {{service.description}}
                </h4>
            </NuxtLink>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    { 
                        name: 'Consulting',
                        description: '2-3 cuvinte despre serviciu',
                        route: 'consulting'
                    },
                    { 
                        name: 'Digital marketing',
                        description: '2-3 cuvinte despre serviciu',
                        route: 'digital-marketing'
                    },
                    { 
                        name: 'Email campaigns',
                        description: '2-3 cuvinte despre serviciu',
                        route: 'email-campaigns'
                    },
                    { 
                        name: 'UI/UX Design',
                        description: '2-3 cuvinte despre serviciu',
                        route: 'ui-ux-design'
                    },
                    { 
                        name: 'SEO Optimization',
                        description: '2-3 cuvinte despre serviciu',
                        route: 'seo-optimization'
                    },
                    { 
                        name: 'Project management',
                        description: '2-3 cuvinte despre serviciu',
                        route: 'project-management'
                    }
                ]
            }
        }
    }
</script>