<script setup lang="ts">
import PageHeading from '../Components/PageHeading.vue'
import { profile, socialLinks } from '../data/portfolio'
</script>

<template>
  <div class="page">
    <PageHeading title="Contact" subtitle="Send me a message or give me a call." />

    <dl class="panel details">
      <dt>Email</dt>
      <dd><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd>

      <dt>Phone</dt>
      <dd><a :href="`tel:${profile.phone}`">{{ profile.phone }}</a></dd>

      <dt>Location</dt>
      <dd>{{ profile.location }}</dd>
    </dl>

    <section class="social">
      <h2>Online platforms I'm in: </h2>
      <ul class="social-list">
        <li v-for="link in socialLinks" :key="link.name">
          <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :aria-label="`${link.name}: ${link.handle} (opens in a new tab)`"
          >
            <span class="social-name">{{ link.name }}</span>
            <span class="social-handle">{{ link.handle }}</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.details {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 12px 24px;
  max-width: 560px;
}

dt {
  font-weight: 700;
}

dd {
  margin: 0;
  min-width: 0;               /* lets the column shrink so long text can wrap */
  overflow-wrap: anywhere;    /* breaks long emails instead of overflowing */
}

dd a {
  display: inline-block;
  padding: 4px 0;             /* bigger area to tap with a thumb */
}

/* Social media */
.social {
  margin-top: 40px;
  max-width: 560px;
}

.social h2 {
  font-size: 1.4rem;
  margin-bottom: 12px;
}

.social-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 12px;
}

.social-link {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 16px;
  padding: 14px 20px;
  background: var(--paper);
  border: 2px solid var(--mask);
  border-radius: 6px;
  text-decoration: none;
  color: var(--ink);
}

.social-link:hover {
  background: var(--mask);
  color: #fff;
}

.social-name {
  font-weight: 700;
}

.social-handle {
  overflow-wrap: anywhere;
}

/* Phones: stack each label above its value */
@media (max-width: 480px) {
  .details {
    grid-template-columns: 1fr;
    gap: 2px;
    padding: 16px;
  }

  dt {
    margin-top: 12px;
    color: var(--muted);
    font-size: 0.9rem;
  }

  dt:first-child {
    margin-top: 0;
  }

  dd {
    font-size: 1.05rem;
  }

  .social {
    margin-top: 32px;
  }
}
</style>