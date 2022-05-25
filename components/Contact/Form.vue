<template>
    <header class="contact-form container">
        <div class="contact-form__content">
            <h2 class="heading-2">
                <span class="text-highlight">
                    Let's get to work
                </span>
            </h2>
            <p class="body-copy">
                You are one step away from your new online marketing strategy. We'll contact you as soon as possible to organize a brief call.
            </p>
        </div>
        <form @submit.prevent="sendForm" class="contact-form__form">
            <UiInput
                name="contact-name"
                placeholder="name"
                @input="contactForm.name = $event, validateName()"
                @blur="validateName"
                :value="contactForm.name"
                :error="errors.name"
            />
            <UiInput
                name="contact-company"
                placeholder="Company name"
                @input="contactForm.company = $event"
                :value="contactForm.company"
            />
            <UiInput
                name="contact-email"
                placeholder="Email"
                @input="contactForm.email = $event, validateEmail()"
                @blur="validateEmail"
                :value="contactForm.email"
                :error="errors.email"
            />
            <UiInput
                name="contact-phone"
                placeholder="Phone number"
                @input="contactForm.phone = $event"
                :value="contactForm.phone"
            />
            <UiTextarea
                name="contact-message"
                placeholder="Message"
                @input="contactForm.message = $event"
                :value="contactForm.message"
            />
            <div class="checkbox">
                <input
                    type="checkbox"
                    id="newsletter-checkbox"
                    v-model="contactForm.newsletter"
                >
                <label for="newsletter-checkbox" class="body-copy">
                    Subscribe to our newsletter? We'll only send you relevant content.
                </label>
            </div>
            <div class="small-copy u-text-danger u-text-semibold" v-if="errors.form">
                {{errors.form}}
            </div>
            <UiButton
                placeholder="Send message"
                type="submit"
            />
        </form>
    </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    data() {
        return {
            contactForm: {
                name: null,
                email: null,
                company: null,
                phone: null,
                message: null,
                newsletter: false
            },
            errors: {
                name: null,
                email: null,
                phone: null,
                company: null,
                message: null,
                newsletter: null,
                form: null
            }
        }
    },
    computed: {
        ...mapGetters({
            isLoadingContact: 'isLoadingContact',
            isContactSent: 'isContactSent',
            contactError: 'contactError'
        }),
        validateForm() {
            if(
                this.contactForm.name &&
                this.contactForm.email &&
                this.contactForm.phone &&
                !this.errors.name &&
                !this.errors.email &&
                !this.errors.phone &&
                !this.errors.company &&
                !this.errors.newsletter &&
                !this.errors.message
            )
                return true;
            return false;
        }
    },
    methods: {
        ...mapActions({
            sendContactForm: 'sendContactForm'
        }),
        async sendForm(e) {
            if(this.validateForm)
            {
                this.sendContactForm(this.contactForm);
            }
            else
                this.errors.form = 'Please fill in the form';
        },
        validateEmail() {
            if(this.$validate.email(this.contactForm.email))
                this.errors.email = null;
            else
                this.errors.email = 'The email adress is invalid. It should be example@domain.com';
        },
        validateName() {
            if(this.$validate.nameformat(this.contactForm.name))
                this.errors.name = null;
            else
                this.errors.name = 'The name can only contain letters and spaces'
        },
        resetForm() {
            this.contactForm.name = null;
            this.contactForm.email = null;
            this.contactForm.phone = null;
            this.contactForm.newsletter = false;
            this.contactForm.message = null;
            this.errors.name = null;
            this.errors.email = null;
            this.errors.phone = null;
            this.errors.message = null;
            this.errors.form = null;
        },
    }
}
</script>