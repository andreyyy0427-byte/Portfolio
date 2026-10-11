<script setup lang="ts">
defineProps<{
  level: string
  years: string
  school: string
}>()
</script>

<template>
  <li class="item">
    <h3>{{ level }}</h3>
    <p class="years">{{ years }}</p>
    <p>{{ school }}</p>
  </li>
</template>

<style scoped>
.item {
  position: relative;
  list-style: none;
  padding: 0 0 28px 28px;
  border-left: 3px solid var(--mask);
}

/* the round "solder joint" on the line */
.item::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--copper);
  border: 3px solid var(--board);
}

.years {
  color: var(--copper);
  font-weight: 600;
}
</style>