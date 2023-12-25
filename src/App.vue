<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <MyButton v-on:click="showDialog" style="margin: 15px 0">
      Создать пост
    </MyButton>
    <MyDialog v-model:show="dialogVisible">
      <PostForm v-on:create="createPost" />
    </MyDialog>
    <PostList v-bind:posts="posts" v-on:remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
export default {
  name: 'App',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
      } catch (e) {
        console.log('Ошибка получения данных от сервера');
      } finally {
        this.isPostsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
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
