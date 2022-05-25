<template>
    <section class="newsletter-section section-m-top">
        <div class="newsletter-section__container" v-if="!isNewsletterSubscribed && !isLoadingNewsletter">
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
                    @click="subscribe"
                />
            </div>
        </div>
        <div class="newsletter-section__container" v-if="isNewsletterSubscribed && !isLoadingNewsletter">
            <h2 class="heading-2" v-if="!isNewsletterUpdated">
                Thank you for subscribing!
            </h2>
            <h2 class="heading-2" v-else>
                Changes saved!
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
                @click="update"
            />
        </div>
        <UiLoader
            text="We are subscribing you..."
            v-else-if="isLoadingNewsletter"
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
                isNewsletterUpdated: 'isNewsletterUpdated',
                newsletterError: 'newsletterError',
                categories: 'categories',
                sessionKey: 'sessionKey'
            })
        },
        methods: {
            ...mapActions({
                subscribeToNewsletter: 'subscribeToNewsletter',
                updateNewsletter: 'updateNewsletter'
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
                if(this.newsletterCategories.includes(categoryId)) {
                    for(let i = 0; i < this.newsletterCategories.length; i++) {
                        if(this.newsletterCategories[i] == categoryId) {
                            this.newsletterCategories.splice(i, 1);
                            return;
                        }
                    }
                } else
                    this.newsletterCategories.push(categoryId);
            },
            subscribe() {
                let formData = this.newsletter;
                formData.session_key = this.sessionKey;
                this.subscribeToNewsletter(JSON.stringify(formData));
            },
            update() {
                let formData = this.newsletter;
                formData.session_key = this.sessionKey;
                formData.frequency = this.newsletterFrequency;
                if(this.newsletterCategories.length == 0)
                    formData.categories = null;
                else    
                    formData.categories = JSON.stringify(this.newsletterCategories);
                this.updateNewsletter(JSON.stringify(formData));
            }
        }
    }
</script>