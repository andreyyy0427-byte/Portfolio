<script setup lang="ts">
import { profile } from '../data/portfolio'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="navbar">
    <nav class="navbar-inner" aria-label="Main">
      <RouterLink to="/" class="brand">{{ profile.portfolio }}</RouterLink>
      <ul class="links">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to">{{ link.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--mask);
}

.navbar-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 24px;
}

.brand {
  font-family: Georgia, serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 20px;
  list-style: none;
  padding: 0;
}

.links a {
  color: #dcebe3;
  text-decoration: none;
  padding: 4px 0;
  border-bottom: 3px solid transparent;
}

.links a:hover {
  color: #fff;
}

/* Vue Router adds this class to the link of the page you are on */
</style>