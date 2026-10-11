<script setup lang="ts">
import ProfilePhoto from '../Components/ProfilePhoto.vue'
import { profile, interestTags } from '../data/portfolio'
</script>[';
<template>
  <div class="page">
    <section class="hero">
      <div class="hero-text">
        <h1>{{ profile.name }}</h1>
        <p class="role">{{ profile.role }}</p>
        <p class="intro">
          A Computer Engineering Student at Cagayan State University who is dreaming big for himself and the success of everyone in his life.

        </p>
<!--        <p class="location">{{ profile.location }}</p>-->
        <div class="actions">
          <RouterLink to="/about" class="button primary">About me</RouterLink>
          <RouterLink to="/contact" class="button secondary">Contact me</RouterLink>
        </div>
      </div>
      <ProfilePhoto />
    </section>

    <section class="interests">
      <h2>What I am interested in</h2>
      <span v-for="tag in interestTags" :key="tag" class="tag">{{ tag }}</span>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 24px 0 48px;
}

.hero-text {
  flex: 1 1 380px;
}

h1 {
  font-size: clamp(2.2rem, 6vw, 3.6rem);
}

.role {
  font-size: 1.4rem;
  color: var(--mask);
  margin: 8px 0 16px;
  font-weight: 600;
}

.intro {
  max-width: 55ch;
  color: var(--muted);
}

.location {
  margin: 12px 0 24px;
  color: var(--muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.interests h2 {
  font-size: 1.4rem;
  margin-bottom: 12px;
}
</style>