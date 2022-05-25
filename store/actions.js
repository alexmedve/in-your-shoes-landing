const actions = {
    //newsletter subscribe
    async subscribeToNewsletter({commit}, payload) {
        commit('IS_LOADING_NEWSLETTER', true);
        await this.$axios.post('/newsletter', payload)
        .then(function (response) {
            console.log(response);
            if(response.status == 200 && response.data.errors == false) {
                commit('IS_LOADING_NEWSLETTER', false);
                commit('IS_NEWSLETTER_SUBSCRIBED', true);
            } else {
                commit('NEWSLETTER_ERRORS', response.data.errors);
            }
        })
        .catch(function (error) {
            commit('NEWSLETTER_ERRORS', error);
        });
    },
    //contact form
    async sendContactForm({commit}, payload) {
        commit('IS_LOADING_CONTACT', true);
        await this.$axios.post('/contact', payload)
        .then(function (response) {
            console.log(response);
            if(response.status == 200 && response.data.errors == false) {
                commit('IS_LOADING_CONTACT', false);
                commit('IS_CONTACT_SENT', true);
            } else {
                commit('CONTACT_ERRORS', response.data.errors);
            }
        })
        .catch(function (error) {
            commit('CONTACT_ERRORS', error);
        });
    },
    //user tracking
    async getSessionKey({commit}) {
        await this.$axios.get('/session/get_key')
        .then(function (response) {
            if(response.status == 200 && response.data.errors == false) {
                commit('SESSION_KEY', response.data.data);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    async updateSessionData({commit}, payload) {
        await this.$axios.post('/session/update', payload);
    },
    sessionKeyFromLocalStorage({commit}, payload) {
        commit('SESSION_KEY', payload);
    },
    sessionPages({commit}, payload) {
        commit('SESSION_PAGES', payload);
    },
    sessionArticles({commit}, payload) {
        commit('SESSION_ARTICLES', payload);
    },
    //articles
    async fetchArticles({commit}) {
        commit('IS_LOADING_ARTILCES', true);
        await this.$axios.get('/newsletter')
        .then(function (response) {
            console.log(response);
            if(response.status == 200 && response.data.errors == false) {
                commit('IS_LOADING_ARTILCES', false);
                commit('ARTICLES', response.data.data);
            } else {
                commit('ARTICLES_ERRORS', error);
            }
        })
        .catch(function (error) {
            commit('ARTICLES_ERRORS', error);
        });
    },
    async fetchArticle({commit}, slug) {
        commit('IS_LOADING_ARTILCE', true);
        await this.$axios.get(`/article/${slug}`)
        .then(function (response) {
            console.log(response);
            if(response.status == 200 && response.data.errors == false) {
                commit('IS_LOADING_ARTILCE', false);
                commit('ARTICLE', response.data.data);
            } else {
                commit('ARTICLE_ERRORS', error);
            }
        })
        .catch(function (error) {
            commit('ARTICLE_ERRORS', error);
        });
    }
};

export default actions;