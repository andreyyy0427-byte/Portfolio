<script setup lang="ts">
// "props" let the parent page send data into this component.
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="heading">
    <h1>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.heading {
  margin-bottom: 32px;
  padding-bottom: 12px;
  border-bottom: 3px solid var(--copper);
}

h1 {
  font-size: 2.2rem;
}

p {
  color: var(--muted);
  margin-top: 4px;
}
</style>