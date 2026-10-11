<script setup lang="ts">
import PageHeading from '../Components/PageHeading.vue'
import EducationItem from '../Components/EducationItem.vue'
import { education, degree, majorCourses } from '../data/portfolio'
</script>

<template>
  <div class="page">
    <PageHeading title="Education" subtitle="Where I have studied so far." />

    <section class="panel degree">
      <h2>{{ degree.name }}</h2>
      <p>{{ degree.status }}</p>
      <h3>Major courses</h3>
      <ul>
        <li v-for="course in majorCourses" :key="course">{{ course }}</li>
      </ul>
    </section>

    <ul class="timeline">
      <EducationItem
          v-for="item in education"
          :key="item.level"
          :level="item.level"
          :years="item.years"
          :school="item.school"
      />
    </ul>
  </div>
</template>

<style scoped>
.degree {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 4px;
}

h3 {
  margin: 16px 0 6px;
  font-size: 1.1rem;
}

ul {
  padding-left: 20px;
}

.timeline {
  padding-left: 8px;
}
</style>