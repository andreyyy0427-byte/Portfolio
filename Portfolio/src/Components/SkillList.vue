<script setup lang="ts">
defineProps<{
  title: string
  items: string[]
}>()
</script>

<template>
  <section class="panel">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<style scoped>
h2 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

ul {
  padding-left: 20px;
}
</style>