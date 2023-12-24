<template>
  <div class="app">
    <PostForm v-on:create="createPost" />
    <PostList v-bind:posts="posts" v-on:remove="removePost" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
export default {
  name: 'App',
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'Название 1', body: 'Описание 1' },
        { id: 2, title: 'Название 2', body: 'Описание 2' },
        { id: 3, title: 'Название 3', body: 'Описание 3' },
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
