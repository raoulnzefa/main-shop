export default {
  state: {
    popups: {
      active: false,
      login: {
        active: false,
        params: {
          colActive: 1
        }
      }
    }
  },
  actions: {
    togglePopupStatus(ctx, {popup, params = null}) {
      ctx.commit('changePopupStatus', {popup, params})
    } 
  },
  mutations: {
    changePopupStatus: (state, {popup, params}) => {
      console.log(state.popups.login.params.colActive);
      if (popup in state.popups) {
        if (params != null) {
          state.popups[popup].params = params;
        }
        state.popups.active = !state.popups.active;
        state.popups[popup].active = !state.popups[popup].active;
      } else if (popup == 'all') {
        state.popups.active = !state.popups.active;
        state.popups.login.active = !state.popups.login.active;
      } else {
        console.log('Такого пупапа нет');
      }
    },
  },
  getters: {
    allPopup(state) {
      return state.popups;
    },
    getCurentPopup: (state, popup) => {
      return state[popup];
    }
  }
};


