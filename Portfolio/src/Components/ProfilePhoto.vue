<script setup lang="ts">
import { ref } from 'vue'

// If /public/profile.jpg is missing, we show the initials instead.
const showPhoto = ref(true)
</script>

<template>
  <div class="photo">
    <img v-if="showPhoto" src="/photo.jpg" alt="Photo of Andrei Mangabang" @error="showPhoto = false" />
    <span v-else class="initials" aria-hidden="true">AM</span>
  </div>
</template>

<style scoped>
.photo {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 6px solid var(--copper);
  overflow: hidden;
  background: var(--mask);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.initials {
  color: #fff;
  font-family: Georgia, serif;
  font-size: 3.5rem;
}
</style>