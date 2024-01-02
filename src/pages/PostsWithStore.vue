<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput v-bind:modelValue="searchQuery" v-on:update:modelValue="setSearchQuery" placeholder="Поиск..."
      style="width: 100%" />
    <div class="app__btns">
      <MyButton v-on:click="showDialog">
        Создать пост
      </MyButton>
      <MySelect v-bind:modelValue="selectedSort" v-on:update:modelValue="setSelectedSort" v-bind:options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm v-on:create="createPost" />
    </MyDialog>
    <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идёт загрузка...</div>
    <div v-if="isFirstFetchDone && page < totalPages" v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'PostsWithStore',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      isFirstFetchDone: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setPosts: 'post/setPosts',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts'
    }),
    createPost(post) {
      this.posts.unshift(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.setPosts(this.posts.filter(item => item.id !== post.id))
    },
    showDialog() {
      this.dialogVisible = true
    },
  },
  mounted() {
    this.fetchPosts()
      .then(() => {
        this.isFirstFetchDone = true
      })
  },
  computed: {
    ...mapState('post', {
      posts: state => state.posts,
      isPostsLoading: state => state.isPostsLoading,
      selectedSort: state => state.selectedSort,
      searchQuery: state => state.searchQuery,
      page: state => state.page,
      limit: state => state.limit,
      totalPages: state => state.totalPages,
      sortOptions: state => state.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    }),

  },
  watch: {

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
