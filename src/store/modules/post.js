export default {
  state: {
    posts: [12]
  },
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit);
      const posts = await res.json();
      ctx.commit('updatePost', posts);
    }
  },
  mutations: {
    updatePost(state, posts) {
      state.posts = posts;
    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    postsCount(state) {
      return state.posts.length;
    }
  }
}

    // <div class="post">
    //   <h1>{{postsCount}}</h1>
    //   <div class="item" v-for="post in allPosts" :key="post.id">
    //     <h2>{{post.title}}</h2>
    //     <span>{{post.body}}</span>
    //   </div>
    // </div>



// import {mapGetters, mapActions} from 'vuex'

// export default{
//   data() {
//     return {}
//   },
//   computed: mapGetters(['allPosts', 'postsCount']),
//   methods: mapActions(['fetchPosts']),
//   async mounted() {
//     this.fetchPosts(1);
//   }
// }
