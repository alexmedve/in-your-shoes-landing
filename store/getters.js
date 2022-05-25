import state from "./state";

const getters = {
    //newsletter
    isLoadingNewsletter: state => state.isLoadingNewsletter,
    isNewsletterSubscribed: state => state.isNewsletterSubscribed,
    newsletterError: state => state.newsletterError,
    //contact
    isLoadingContact: state => state.isLoadingContact,
    isContactSent: state => state.isContactSent,
    contactError: state => state.contactError,
    //user tracking
    sessionData: state => state.session,
    sessionKey: state => state.session.key,
    sessionPages: state => state.session.pages,
    sessionArticles: state => state.session.articles
};

export default getters;