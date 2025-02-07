<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

const BASIC_INFO_QUERY = gql`
  query {
    basicInfos {
      introduction
      subtitle
      title
      profileImage {
        url
      }
    }
  }
`

const { result } = useQuery(BASIC_INFO_QUERY)
const basicInfo = computed(() => result.value?.basicInfos[0] ?? [])
</script>

<template>
  <div v-if="basicInfo && basicInfo.title">
    <img alt="Vue logo" class="logo" :src="basicInfo.profileImage.url" width="125" height="125" />
    <div class="wrapper">
      <div class="profile-description">
        <h1 class="green">{{ basicInfo.title }}</h1>
        <h2>{{ basicInfo.subtitle }}</h2>
        <p>
          {{ basicInfo.introduction }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

.profile-introduction-container {
  text-align: center;
}

.logo {
  width: 20rem;
  height: auto;
  border-radius: 50%;
  display: block;
  margin: 0 auto 2rem;
}

.logo {
  margin: 0 2rem 0 0;
  align-self: center;
}
</style>
