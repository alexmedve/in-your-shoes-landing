<template>
    <header class="contact-form container">
        <div class="contact-form__content">
            <h2 class="heading-2">
                <span class="text-highlight">
                    Let's get to work
                </span>
            </h2>
            <p class="body-copy">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
        </div>
        <!-- <form @submit.prevent="sendForm" class="contact-form__form" v-if="!formSent && !isLoading"> -->
        <form class="contact-form__form">
            <UiInput
                name="contact-name"
                placeholder="Fullname"
            />
            <UiInput
                name="contact-company"
                placeholder="Company name"
            />
            <UiInput
                name="contact-email"
                placeholder="Email"
            />
            <UiInput
                name="contact-phone"
                placeholder="Phone number"
            />
            <UiTextarea
                name="contact-message"
                placeholder="Message"
            />
            <UiButton
                placeholder="Send message"
                type="submit"
            />
        </form>
    </header>
</template>

// <script>
// export default {
//     data() {
//         return {
//             contactFormData: {
//                 fullname: null,
//                 email: null,
//                 phone: null,
//                 message: null,
//                 termsCheck: false,
//                 recaptchaToken: null
//             },
//             errors: {
//                 fullname: null,
//                 email: null,
//                 phone: null,
//                 message: null,
//                 termsCheck: null,
//                 form: null,
//                 recaptcha: null
//             },
//             renderRecaptcha: true,
//             formSent: false,
//             isLoading: false
//         }
//     },
//     computed: {
//         validateForm() {
//             if(
//                 this.contactFormData.fullname &&
//                 this.contactFormData.email &&
//                 this.contactFormData.phone &&
//                 this.contactFormData.termsCheck &&
//                 this.contactFormData.message &&
//                 !this.errors.fullname &&
//                 !this.errors.email &&
//                 !this.errors.phone &&
//                 !this.errors.termsCheck &&
//                 !this.errors.message
//             )
//                 return true;
//             return false;
//         }
//     },
//     mounted() {
//         this.initRecaptcha();
//     },
//     methods: {
//         async sendForm(e) {
//             if(this.validateForm)
//             {
//                 try {
//                     this.contactFormData.recaptchaToken = await this.$recaptcha.getResponse()
//                     let apiFormData = {
//                         name: this.contactFormData.fullname,
//                         phone_number: this.contactFormData.phone,
//                         email: this.contactFormData.email,
//                         message: this.contactFormData.message,
//                         "g-recaptcha-response": this.contactFormData.recaptchaToken
//                     };
//                     this.isLoading = true;
//                     this.$axios.post('/contact', apiFormData)
//                     .then(res => {
//                         this.resetForm();
//                         this.resetRecaptcha();
//                         this.formSent = true;
//                         this.isLoading = false;
//                     })
//                     .catch(err => {
//                         this.errors.form = 'Vă rugăm sa mai încercați o dată';
//                         this.isLoading = false;
//                     });
//                 } catch (error) {
//                     this.errors.form = 'Vă rugăm sa mai încercați o dată';
//                     this.isLoading = false;
//                 }
//             }
//             else
//                 this.errors.form = 'Vă rugăm sa completați corect formularul';
//         },
//         validateEmail() {
//             if(this.$validate.email(this.contactFormData.email))
//                 this.errors.email = null;
//             else
//                 this.errors.email = 'Adresa de email introdusă este invalidă';
//         },
//         validatePhoneNumber() {
//             if(this.$validate.phone(this.contactFormData.phone))
//                 this.errors.phone = null;
//             else
//                 this.errors.phone = 'Numărul de telefon este invalid';
//         },
//         validateFullname() {
//             if(this.$validate.fullname(this.contactFormData.fullname))
//                 this.errors.fullname = null;
//             else
//                 this.errors.fullname = 'Numele poate fi format doar din litere și spații'
//         },
//         validateMessage() {
//             if(this.$validate.message(this.contactFormData.message))
//                 this.errors.message = null;
//             else
//                 this.errors.message = 'Mesajul poate contine intre 8 si 256 de caractere';
//         },
//         recaptchaError(type) {
//             if(type == 'error')
//                 this.errors.recaptcha = 'Eroare Recaptcha, incercati din nou'
//             else if(type == 'expired')
//                 this.errors.recaptcha = 'Campul Recaptcha a expirat'
//         },
//         recaptchaSuccess(token) {
//             this.contactFormData.recaptchaToken = token;
//         },
//         resetForm() {
//             this.contactFormData.fullname = null;
//             this.contactFormData.email = null;
//             this.contactFormData.phone = null;
//             this.contactFormData.termsCheck = false;
//             this.contactFormData.message = null;
//             this.contactFormData.recaptchaToken = null;
//             this.errors.fullname = null;
//             this.errors.email = null;
//             this.errors.phone = null;
//             this.errors.message = null;
//             this.errors.termsCheck = null;
//             this.errors.form = null;
//             this.errors.recaptcha = null;

//             this.$recaptcha.reset();
//         },
//         async initRecaptcha() {
//             try {
//                 await this.$recaptcha.init();
//             } catch (e) {
//                 console.error(e);
//             }
//         },
//         resetRecaptcha() {
//             this.renderRecaptcha = false;
//             setTimeout(() => {
//                 this.renderRecaptcha = true;
//             }, 1000)
//         }
//     },
//     beforeDestroy() {
//         this.$recaptcha.destroy()
//     }
// }
// </script>