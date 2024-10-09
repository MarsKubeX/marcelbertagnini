<script setup lang="ts">
import ExperienceList from '../components/ExperienceList.vue'
import ProfileIntroduction from '../components/ProfileIntroduction.vue'
</script>

<template>
  <div class="container">
    <ProfileIntroduction class="container-introduction"></ProfileIntroduction>
    <div class="container-experiences">
      <h1>Experience</h1>
      <ExperienceList />
    </div>
  </div>
</template>
<style>
.container {
  @media (min-width: 1024px) {
    display: flex;
  }
}
.container-introduction {
  padding-bottom: 2rem;
  @media (min-width: 1024px) {
    min-width: 40%;
    padding-right: 5rem;
  }
}
.container-experiences {
  @media (min-width: 1024px) {
    max-width: 60%;
    padding-right: 5rem;
  }
}
</style>
