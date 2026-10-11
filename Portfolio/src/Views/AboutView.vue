<script setup lang="ts">
import PageHeading from '../Components/PageHeading.vue'
import { aboutParagraph, interestText, activities } from '../data/portfolio'
</script>

<template>
  <div class="page">
    <PageHeading title="About me" subtitle="A little about who I am and what I enjoy." />

    <section class="block">
      <p v-for="text in aboutParagraph" :key="text">{{ text }}</p>
    </section>

    <section class="block">
      <h2>Interests</h2>
      <p>{{ interestText }}</p>
    </section>

    <section class="panel">
      <h2>Societies and activities</h2>
      <ul>
        <li v-for="activity in activities" :key="activity">{{ activity }}</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.block {
  max-width: 70ch;
  margin-bottom: 32px;
}

.block p + p {
  margin-top: 12px;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

ul {
  padding-left: 20px;
}
</style>