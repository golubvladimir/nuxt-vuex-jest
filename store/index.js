export const state  = () => ({
  langs: []
});

export const mutations = {
  setLangs(state, langs) {
    state.langs = langs;
  }
};

export const actions = {
  async getLangs({commit}) {
    const result = await this.$axios.get('/langs');

    commit('setLangs', result)
  }
};
