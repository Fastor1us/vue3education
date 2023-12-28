<template>
  <div>
    <h1>Страница с постами</h1>
    <PostList :posts="posts" v-if="!isPostsLoading" />
    <div v-else>Идёт загрузка...</div>
    {{ isIntersectCondition }}
    <div v-intersection="isIntersectCondition" class="observer"></div>
  </div>
</template>

<script>
import axios from 'axios';
import PostList from '@/components/PostList.vue';
export default {
  name: 'Posts',
  components: { PostList },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOption: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' }
      ],
    }
  },
  methods: {
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      } catch (e) {
        console.log('Ошибка получения данных от сервера');
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        console.log('Ошибка получения данных от сервера');
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    isIntersectCondition() {
      return this.page < this.totalPages;
    },
  },
}
</script>

<style>
</style>
