<script setup lang="ts">
import { profile } from '../data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>&copy; {{ year }} {{ profile.name }}</p>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: #c9d4cd;
  text-align: center;
  padding: 20px 24px;
  font-size: 0.9rem;
}
</style>