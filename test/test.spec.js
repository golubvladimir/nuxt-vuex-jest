import {actions, getters, mutations, state} from './../store/index';
import axios from 'axios';
import { Server } from "miragejs";
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'

axios.$get = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

let action;
let server;

const storeConfig = {
  state,
  getters,
  mutations,
  actions
};

beforeEach(() => {
  server = new Server({
    routes() {
      this.get("/langs", () => ({
        langs: ['en', 'ru']
      }))
    },
  })
});

afterEach(() => {
  server.shutdown();
});

const testedAction = (context = {}, payload = {}) => {
  return actions[action].bind({$axios: axios})(context, payload);
};

describe(`store`, () => {
  describe(`actions`, () => {
    describe(action = 'getLangs', () => {
      it(`returns an empty array if axios returns an empty array`, async (done) => {
        const localVue = createLocalVue();
        localVue.use(Vuex);

        const store = new Vuex.Store(storeConfig);

        expect(await testedAction(store));
        expect(store.getters.langs).toEqual(['en', 'ru']);

        done();
      });
    });
  });
});
