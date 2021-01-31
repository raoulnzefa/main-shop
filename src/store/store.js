import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import global from './modules/global'
import user from './modules/user'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    post,
    global,
    user
  }
});

