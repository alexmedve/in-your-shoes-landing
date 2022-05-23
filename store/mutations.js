const mutations = {
    //newsletter
    IS_LOADING_NEWSLETTER(state, status) {
        state.isLoadingNewsletter = status;
    },
    IS_NEWSLETTER_SUBSCRIBED(state, status) {
        state.isNewsletterSubscribed = status;
    },
    NEWSLETTER_ERRORS(state, error) {
        state.newsletterError = error;
    },
    //contact
    IS_LOADING_CONTACT(state, status) {
        state.isLoadingContact = status;
    },
    IS_CONTACT_SENT(state, status) {
        state.isContactSent = status;
    },
    CONTACT_ERRORS(state, error) {
        state.contactError = error;
    },
};

export default mutations;