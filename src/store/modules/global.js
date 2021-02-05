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
    togglePopupStatus(ctx, {popup, params = null, status}) {
      ctx.commit('changePopupStatus', {popup, params, status})
    } 
  },
  mutations: {
    changePopupStatus: (state, {popup, params, status}) => {
      if (popup in state.popups) {
        if (params != null) {
          state.popups[popup].params = params;
        }
        state.popups.active = status;
        state.popups[popup].active = status;
      } else if (popup == 'all') {
        state.popups.active = status;
        state.popups.login.active = status;
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


