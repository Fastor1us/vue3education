<template>
  <form class="form" v-on:submit.prevent>
    <h3>Создание поста</h3>
    <MyInput v-model="post.title" placeholder="Название" />
    <MyInput v-model="post.body" placeholder="Описание" />
    <MyButton style="align-self: end; margin-top: 15px" v-on:click="createPost">
      Создать
    </MyButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      // create - название вызываемого события
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      };
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
