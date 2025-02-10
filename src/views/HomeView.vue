<script setup lang="ts">
import ExperienceList from '../components/ExperienceList.vue'
import ProfileIntroduction from '../components/ProfileIntroduction.vue'
import ContactList from '../components/ContactList.vue'
</script>

<template>
  <div class="container">
    <div>
      <ProfileIntroduction class="container-introduction" />
    </div>
    <div class="container-experiences">
      <h1>Experience</h1>
      <ExperienceList />
    </div>
    <div class="container-experiences">
      <h1>Skills</h1>
    </div>
    <div class="container-contact">
      <h1>Contact</h1>
      <ContactList />
    </div>
  </div>
</template>
<style>
.container {
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
.container-introduction {
  margin: 0 15rem;
  margin-bottom: 5rem;
  justify-items: center;
  text-align: center;
}

.container-experiences {
  margin: 0 10rem;
  h1 {
    margin-bottom: 2rem;
  }
}

.container-contact {
  margin: 2rem 10rem;
  h1 {
    margin-bottom: 2rem;
  }
}
</style>
