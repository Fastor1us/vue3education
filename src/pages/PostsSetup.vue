<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInputSetup v-model="searchQuery" placeholder="Поиск..." style="width: 100%" />
    <div class="app__btns">
      <MyButton v-on:click="showDialog">
        Создать пост
      </MyButton>
      <MySelectSetup v-model="selectedSort" v-bind:options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostFormSetup v-on:create="createPost" />
    </MyDialog>
    <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идёт загрузка...</div>
    <PageSelector :totalPages="totalPages" v-model:page="page" />
  </div>
</template>


<script>
import axios from 'axios';
import PostFormSetup from '@/components/PostFormSetup.vue';
import PostList from '@/components/PostList.vue';
export default {
  name: 'PostsSetup',
  components: {
    PostFormSetup,
    PostList
  },
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
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' }
      ],
      isFirstFetchDone: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post)
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
  },
  mounted() {
    this.fetchPosts()
      .then(() => {
        this.isFirstFetchDone = true
      })
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
  },
  watch: {
    page() {
      this.fetchPosts()
    }
  }
}
</script>


<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.observer {
  height: 30px;
  background: green;
}
</style>
