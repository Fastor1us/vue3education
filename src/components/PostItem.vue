<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div> <strong>Название:</strong> {{ post.title }} </div>
      <div> <strong>Описание:</strong> {{ post.body }} </div>
    </div>
    <MyButton v-on:click="$emit('remove', post)">
      Удалить
    </MyButton>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
