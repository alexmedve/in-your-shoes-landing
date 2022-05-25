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
    //user tracking
    SESSION_KEY(state, key) {
        state.session.key = key;
        localStorage.setItem('sessionKey', key);
    },
    SESSION_PAGES(state, page) {
        state.session.pages.push(page);
    },
    SESSION_ARTICLES(state, article) {
        state.session.articles.push(article);
    },
    //articles
    IS_LOADING_ARTILCES(state, status) {
        state.isLoadingArticles = status
    },
    ARTICLES(state, payload) {
        state.articles = payload;
    },
    ARTICLES_ERRORS(state, payload) {
        state.articlesErrors = payload;
    },
    IS_LOADING_ARTILCE(state, status) {
        state.isLoadingArticle = status;
    },
    ARTICLE(state, payload) {
        state.article = payload;
    },
    ARTICLES_ERROR(state, payload) {
        state.articleErrors = payload;
    }
};

export default mutations;