const actions = {
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
};

export default actions;