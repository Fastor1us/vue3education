<template>
  <input v-bind:value="modelValue" v-on:input="updateInput" class="input" type="text">
</template>


<script setup>
defineProps({
  modelValue: {
    type: [String, Number]
  },
})

const emit = defineEmits(['update:modelValue'])

const updateInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>


<script>
export default {
  name: "MyInputSetup"
}
</script>


<style scoped>
.input {
  /* width: 100%; */
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
