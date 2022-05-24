const Modal = {
  namespaced: true,
  state: {
    dataModalState: {},
  },
  getters: {
    dataModalGet(state) {
      return state.dataModalState;
    },
  },
  mutations: {
    cargaDataModalMutation(state, payload) {
      state.dataModalState = payload;
    },
  },
  actions: {
    cargaDataModalAction({ commit }, payload) {
      commit("cargaDataModalMutation", payload);
    },
  },
};

export default Modal;
