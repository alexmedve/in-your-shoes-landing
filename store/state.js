const state = () => ({
    //newsletter
    isLoadingNewsletter: false,
    isNewsletterSubscribed: false,
    isNewsletterUpdated: false,
    newsletterError: null,
    //contact form
    isLoadingContact: false,
    isContactSent: false,
    contactError: null,
    //articles
    isLoadingArticles: false,
    articles: [],
    articlesErrors: null,
    isLoadingArticle: false,
    article: null,
    articleErrors: null,
    //categories
    categories: [],
    //user tracking
    session: {
        key: null,
        pages: [],
        articles: []
    }
});

export default state;