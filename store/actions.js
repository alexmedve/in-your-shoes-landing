const actions = {
    //newsletter subscribe
    async subscribeToNewsletter({commit}, payload) {
        commit('IS_LOADING_NEWSLETTER', true);
        console.log(payload);
        await this.$axios.post('/newsletter/subscribe', payload, {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response);
            if(response.status == 200) {
                commit('IS_LOADING_NEWSLETTER', false);
                commit('IS_NEWSLETTER_SUBSCRIBED', true);
            } else {
                commit('NEWSLETTER_ERRORS', "You are already subscribed");
                commit('IS_LOADING_NEWSLETTER', false);
            }
        })
        .catch(function (error) {
            commit('NEWSLETTER_ERRORS', "You are already subscribed");
            commit('IS_LOADING_NEWSLETTER', false);
        });
    },
    async updateNewsletter({commit}, payload) {
        commit('IS_LOADING_NEWSLETTER', true);
        console.log(payload);
        await this.$axios.post('/newsletter/update', payload, {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response);
            if(response.status == 200) {
                commit('IS_LOADING_NEWSLETTER', false);
                commit('IS_NEWSLETTER_UPDATED', true);
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
        await this.$axios.post('/contact', payload, {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response);
            if(response.status == 200) {
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
        await this.$axios.get('/session/start')
        .then(function (response) {
            console.log(response);
            if(response.status == 200) {
                commit('SESSION_KEY', response.data.session_key);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    async updateSessionData({commit}, payload) {
        await this.$axios.post('/session/update', payload, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
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
        await this.$axios.get('/blog')
        .then(function (response) {
            console.log(response);
            if(response.status == 200) {
                commit('IS_LOADING_ARTILCES', false);
                commit('ARTICLES', response.data);
            } else {
                commit('ARTICLES_ERRORS', error);
            }
        })
        .catch(function (error) {
            commit('ARTICLES_ERRORS', error);
        });
    },
    async fetchArticle({commit}, id) {
        commit('IS_LOADING_ARTILCE', true);
        await this.$axios.get(`/blog/${id}`)
        .then(function (response) {
            console.log(response);
            if(response.status == 200) {
                commit('IS_LOADING_ARTILCE', false);
                commit('ARTICLE', response.data.article);
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