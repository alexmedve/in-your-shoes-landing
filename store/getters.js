import state from "./state";

const getters = {
    //newsletter
    isLoadingNewsletter: state => state.isLoadingNewsletter,
    isNewsletterSubscribed: state => state.isNewsletterSubscribed,
    isNewsletterUpdated: state => state.isNewsletterUpdated,
    newsletterError: state => state.newsletterError,
    //contact
    isLoadingContact: state => state.isLoadingContact,
    isContactSent: state => state.isContactSent,
    contactError: state => state.contactError,
    //articles
    isLoadingArticles: state => state.isLoadingArticles,
    articles: state => state.articles,
    articlesShort: state => state.articles.slice(0, 3),
    articlesErrors: state => state.articlesErrors,
    isLoadingArticle: state => state.isLoadingArticle,
    article: state => state.article,
    articleErrors: state => state.articleErrors,
    //categories
    categories: state => state.categories,
    //user tracking
    sessionData: state => state.session,
    sessionKey: state => state.session.key,
    sessionPages: state => state.session.pages,
    sessionArticles: state => state.session.articles
};

export default getters;