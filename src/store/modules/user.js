export default {
  state: {
    user: {
      default: null
    },
  },
  actions: {
    async getUser(ctx, id = 1) {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
      const user = await res.json();
      ctx.commit('updateUser', user);
    }
  },
  mutations: {
    updateUser(state, user) {
      return state.user = user;
    }
  },
  getters: {
    userData(state) {
      return state.user;
    }
  }
};


