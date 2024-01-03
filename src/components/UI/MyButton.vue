<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>


<script>
export default {
  name: 'MyButton'
}
</script>


<style scoped>
.btn {
  color: teal;
  border: 1px solid teal;
  padding: 10px 15px;
  background: none;
}
</style>
