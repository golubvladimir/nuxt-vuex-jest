import {actions} from './../store/index';
import axios from 'axios';
import { Server } from "miragejs"

let action;
let server;

beforeEach(() => {
  server = new Server({
    routes() {
      this.get("/langs", () => ({
        locales: ['en', 'ru']
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
        expect(await testedAction()).toEqual({locales: ['en', 'ru']});
        done();
      });
    });
  });
});
