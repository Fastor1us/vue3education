<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput v-model="searchQuery" placeholder="Поиск..." style="width: 100%" />
    <div class="app__btns">
      <MyButton>
        Создать пост
      </MyButton>
      <MySelect v-model="selectedSort" v-bind:options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm />
    </MyDialog>
    <PostList :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { usePosts } from '@/hooks/usePosts'
import { useSortedPosts } from '@/hooks/useSortedPosts'
import { useSortedAndSearchedPosts } from '@/hooks/useSortedAndSearchedPosts'
export default {
  name: 'Posts',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' }
      ],
      isFirstFetchDone: false
    }
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10)
    const { sortedPosts, selectedSort } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
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
