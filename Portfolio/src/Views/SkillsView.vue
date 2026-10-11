<script setup lang="ts">
import PageHeading from '../Components/PageHeading.vue'
import SkillList from '../Components/SkillList.vue'
import { hardSkills, softSkills, languages } from '../data/portfolio'
</script>

<template>
  <div class="page">
    <PageHeading title="Skills" subtitle="What I can do and what I am learning." />

    <div class="grid">
      <SkillList title="Hard skills" :items="hardSkills" />
      <SkillList title="Soft skills" :items="softSkills" />
      <SkillList title="Languages" :items="languages" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
</style>