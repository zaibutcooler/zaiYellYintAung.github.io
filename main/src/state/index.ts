import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface RootState {
  darkMode: boolean;
  serviceDetail: boolean;
  detail: null | any;
}

export default createStore<RootState>({
  state: {
    darkMode: false,
    serviceDetail: false,
    detail: null,
  },
  mutations: {
    setDark(state) {
      state.darkMode = true;
    },
    setLight(state) {
      state.darkMode = false;
    },
    showServiceDetail(state, payload) {
      state.serviceDetail = true;
      state.detail = payload;
    },
    closeServiceDetail(state) {
      state.serviceDetail = false;
      state.detail = null;
    },
  },
});
