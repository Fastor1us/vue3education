<template>
  <form class="form" v-on:submit.prevent>
    <h3>Создание поста</h3>
    <MyInputSetup v-focus v-model="post.title" placeholder="Название" />
    <MyInputSetup v-model="post.body" placeholder="Описание" />
    <MyButton style="align-self: end; margin-top: 15px" v-on:click="createPost">
      Создать
    </MyButton>
  </form>
</template>


<script setup>
import { ref } from 'vue';

const post = ref({
  title: '',
  body: ''
});

const emit = defineEmits(['create']);

const createPost = () => {
  post.value.id = Date.now();
  emit('create', post.value);
  post.value = {
    title: '',
    body: ''
  };
};
</script>


<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
