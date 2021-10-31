import { createStore } from "vuex";

export default createStore({
  state: {
    openMenu: true
  },
  mutations: {
    setOpenMenu(state,flag){
      state.openMenu = flag;
    }
  },
  actions: {},
  modules: {},
});
