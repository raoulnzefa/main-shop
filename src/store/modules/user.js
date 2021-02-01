export default {
  state: {
    user: {
      default: null
    },
  },
  actions: {
    async getUser(ctx, id = undefined) {
      if (id !== undefined) {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const user = await res.json();
        ctx.commit('updateUser', user);
      } else {
        ctx.commit('updateUser', false);
      }
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


