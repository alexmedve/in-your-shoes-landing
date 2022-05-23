const getters = {
    //newsletter
    isLoadingNewsletter: state => state.isLoadingNewsletter,
    isNewsletterSubscribed: state => state.isNewsletterSubscribed,
    newsletterError: state => state.newsletterError,
    //contact
    isLoadingContact: state => state.isLoadingContact,
    isContactSent: state => state.isContactSent,
    contactError: state => state.contactError
};

export default getters;