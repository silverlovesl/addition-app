import { App, InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export interface RootState {}

// define injection key
export const rootStoreKey: InjectionKey<Store<RootState>> = Symbol();

export const rootStore = createStore<RootState>({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

const storeBootstrap = (app: App<Element>) => {
  app.use(rootStore, rootStoreKey);
};

export default storeBootstrap;
