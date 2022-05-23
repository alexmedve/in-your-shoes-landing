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
                    name="newsletter-name"
                    placeholder="Your name"
                    @input="newsletter.name = $event, validateName()"
                    @blur="validateName"
                    :value="newsletter.name"
                    :error="errors.name"
                />
                <UiInput
                    name="newsletter-input"
                    placeholder="Your email adress"
                    @input="newsletter.email = $event, validateEmail()"
                    @blur="validateEmail"
                    :value="newsletter.email"
                    :error="errors.email"
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
                <div
                    @click="newsletterFrequency = 'daily'"
                    :class="['newsletter-section__frequency-item',
                    'heading-4',
                    {'newsletter-section__frequency-item--active': newsletterFrequency == 'daily'}]"
                >
                    Daily
                </div>
                <div
                    @click="newsletterFrequency = 'weekly'"
                    :class="['newsletter-section__frequency-item',
                    'heading-4',
                    {'newsletter-section__frequency-item--active': newsletterFrequency == 'weekly'}]"
                >
                    Weekly
                </div>
                <div 
                    @click="newsletterFrequency = 'monthly'"
                    :class="['newsletter-section__frequency-item',
                    'heading-4',
                    {'newsletter-section__frequency-item--active': newsletterFrequency == 'monthly'}]"
                >
                    Monthly
                </div>
            </div>
            <h4 class="heading-4">
                Preferred content:
            </h4>
            <div class="newsletter-section__content-row">
                <div
                    @click="newsletterCategories = []"
                    :class="['newsletter-section__content-pill',
                        'heading-4',
                        {'newsletter-section__content-pill--active': newsletterCategories.length == 0}
                    ]"
                >
                    All content
                </div>
            </div>
            <div class="newsletter-section__content-row">
                <div
                    v-for="(category, i) in categories"
                    :key="'category' + i"
                    @click="addNewsletterCategory(category.id)"
                    :class="[
                        'newsletter-section__content-pill',
                        'heading-4',
                        {'newsletter-section__content-pill--active': newsletterCategories.includes(category.id)}
                    ]"
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
            v-else-if="!isSent && isLoading"
        />
    </section>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                newsletter: {
                    name: null,
                    email: null,
                },
                newsletterFrequency: 'daily',
                newsletterCategories: [],
                errors: {
                    name: null,
                    email: null
                },
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
        },
        computed: {
            validateForm() {
                if(
                    this.newsletter.name &&
                    this.newsletter.email &&
                    !this.errors.name &&
                    !this.errors.email
                )
                    return true;
                return false;
            },
            ...mapGetters({
                isLoadingNewsletter: 'isLoadingNewsletter',
                isNewsletterSubscribed: 'isNewsletterSubscribed',
                newsletterError: 'newsletterError'
            })
        },
        methods: {
            ...mapActions({
                subscribeToNewsletter: 'subscribeToNewsletter'
            }),
            validateName() {
                if(this.$validate.nameformat(this.newsletter.name))
                    this.errors.name = null;
                else
                    this.errors.name = 'The name can only contain letters and spaces'
            },
            validateEmail() {
                if(this.$validate.email(this.newsletter.email))
                    this.errors.email = null;
                else
                    this.errors.email = 'The email adress is invalid';
            },
            addNewsletterCategory(categoryId) {
                console.log(33);
                if(this.newsletterCategories.includes(categoryId)) {
                    for(let i = 0; i < this.newsletterCategories.length; i++) {
                        if(this.newsletterCategories[i] == categoryId) {
                            this.newsletterCategories.splice(i, 1);
                            return;
                        }
                    }
                } else
                    this.newsletterCategories.push(categoryId);
            }
        }
    }
</script>