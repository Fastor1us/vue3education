<template>
  <div class="navbar">
    <div @click="$router.push('/')">vue3education</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')">Посты</MyButton>
      <MyButton @click="$router.push('/about')" style="margin-left: 20px;">О сайте</MyButton>
    </div>
    <!-- <RouterLink to="/posts">Посты</RouterLink>
    <RouterLink to="/about">О сайте</RouterLink> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
