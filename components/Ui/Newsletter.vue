<template>
    <section class="newsletter-section section-m-top">
        <div class="newsletter-section__container" v-if="!isSent && !isLoading">
            <h2 class="heading-2">
                Subscribe to our newsletter
            </h2>
            <h3 class="heading-3">
                We’ll only send relevant content. We promise :)
            </h3>
            <div class="input-group">
                <UiInput
                    name="newsletter-input"
                    placeholder="Your email adress"
                />
                <UiButton
                    placeholder="Subscribe"
                    type="button"
                    class="button--secondary"
                />
            </div>
        </div>
        <div class="newsletter-section__container" v-if="isSent && !isLoading">
            <h2 class="heading-2">
                Thank you for subscribing!
            </h2>
            <h3 class="heading-3">
                You can personalize your newsletter preferences
            </h3>
            <h4 class="heading-4">
                Email frequency:
            </h4>
            <div class="newsletter-section__frequency">
                <div class="newsletter-section__frequency-item newsletter-section__frequency-item--active heading-4">
                    Daily
                </div>
                <div class="newsletter-section__frequency-item heading-4">
                    Weekly
                </div>
                <div class="newsletter-section__frequency-item heading-4">
                    Monthly
                </div>
            </div>
            <h4 class="heading-4">
                Preferred content:
            </h4>
            <div class="newsletter-section__content-row">
                <div class="newsletter-section__content-pill heading-4 newsletter-section__content-pill--active">
                    All content
                </div>
            </div>
            <div class="newsletter-section__content-row">
                <div
                    v-for="(category, i) in categories"
                    :key="'category' + i"
                    class="newsletter-section__content-pill heading-4"
                >
                    {{category.name}}
                </div>
            </div>
            <UiButton
                placeholder="Save preferences"
                type="button"
            />
        </div>
        <UiLoader
            text="We are subscribing you..."
            v-else
        />
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: false,
                isSent: true,
                categories: [
                    {
                        name: 'Email nurturing',
                        id: 1
                    },
                    {
                        name: 'Marketing',
                        id: 2
                    },
                    {
                        name: 'UI/UX',
                        id: 3
                    },
                    {
                        name: 'Google Ads',
                        id: 4
                    },
                    {
                        name: 'Project management',
                        id: 5
                    },
                    {
                        name: 'Webinars',
                        id: 6
                    },
                    {
                        name: 'Case Studies',
                        id: 7
                    }
                ]
            }
        }
    }
</script>