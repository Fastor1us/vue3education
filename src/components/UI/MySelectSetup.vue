<template>
  <select v-bind:value="modelValue" v-on:change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>


<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  options: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue']);

const changeOption = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>


<script>
export default {
  name: 'MySelectSetup',
}
</script>


<style scoped>
</style>
