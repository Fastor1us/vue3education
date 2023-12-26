<template>
  <div class="page__wrapper">
    <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
      'current-page': page === pageNumber
    }" v-on:click="$emit('changePage', pageNumber)">
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSelector',
  props: {
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid green;
}
</style>
