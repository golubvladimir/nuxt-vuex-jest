export const state  = () => ({
  langs: []
});

export const mutations = {
  setLangs(state, langs) {
    state.langs = langs;
  }
};

export const getters = {
  langs: state => state.langs
};

export const actions = {
  async getLangs({commit}) {
    const langs = await this.$axios.$get('/langs');
    //const {data} = await this.$axios.get('/langs');

    console.log(langs);
    //console.log(data.langs)

    commit('setLangs', langs);
    //commit('setLangs', data.langs);
  }
};
