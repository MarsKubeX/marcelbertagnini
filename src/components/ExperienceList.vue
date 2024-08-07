<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

const EXPERIENCES_LIST_QUERY = gql`
  query {
    experiences(orderBy: createdAt_DESC) {
      company
      createdAt
      description
      endDate
      id
      publishedAt
      role
      startDate
      updatedAt
      companyImage {
        url
      }
    }
  }
`
const { result } = useQuery(EXPERIENCES_LIST_QUERY)
console.log(result.value)

const experiencesList = computed(() => result.value?.experiences ?? [])
</script>

<template>
  <ul class="experience-list">
    <li v-for="experience in experiencesList" v-bind:key="experience.id">
      <img :src="experience.companyImage.url" :alt="experience.company" />
      <h3>
        {{
          `${experience.role} at ${experience.company} ${experience.startDate} ${experience.endDate ? '-' + experience.endDate : ''}`
        }}
      </h3>
      <p>
        {{ experience.description }}
      </p>
    </li>
  </ul>
</template>

<style>
.experience-list {
  position: relative;
  padding: 0;
  @media (max-width: 1024px) {
    margin: 50px auto;
  }
  @media (min-width: 1024px) {
    list-style: none;
    text-align: center;
    height: 80vh;
    display: block;
    overflow-y: scroll;
  }
}
.experience-list img {
  height: auto;
  max-width: 150px;
}
.experience-list li {
  display: inline-block;
  min-width: 200px;
  padding: 40px 20px 40px;
  position: relative;
  vertical-align: top;
  margin: 10px;
  font-family: 'helvetica', san-serif;
  min-height: 25vh;
  background: #262a2b;
  border: 1px solid #252727;
  text-align: left;
}
.experience-list li h2 {
  font-size: 114px;
  margin: 0;
  position: absolute;
  opacity: 0.2;
  top: 50px;
  right: 10px;
  transition: all 0.3s ease-in-out;
}
.experience-list li h3 {
  font-size: 20px;
  color: #b7b7b7;
  margin-bottom: 5px;
}
.experience-list li p {
  font-size: 16px;
  line-height: 18px;
  color: #b7b7b7;
  margin-top: 5px;
}
.experience-list li button {
  background: transparent;
  border: 1px solid #b7b7b7;
  padding: 10px 20px;
  color: #b7b7b7;
  border-radius: 3px;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform: translateY(-40px);
  opacity: 0;
  cursor: pointer;
  overflow: hidden;
}
.experience-list li:hover button {
  transform: translateY(5px);
  opacity: 1;
}
.experience-list li:hover h2 {
  top: 0px;
  opacity: 0.6;
}

.experience-list li:before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  background: #fff;
  transform: skew(2deg, 2deg);
}
.experience-list li:after {
  content: '';
  position: absolute;
  width: 40%;
  height: 100%;
  left: 0;
  top: 0;
}
.experience-list li:nth-child(even):before {
  background: #c21500;
  background: -webkit-linear-gradient(to right, #ffc500, #c21500);
  background: linear-gradient(to right, #ffc500, #c21500);
}
.experience-list li:nth-child(odd):before {
  background: #fc354c;
  background: -webkit-linear-gradient(to right, #0abfbc, #09c623);
  background: linear-gradient(to right, #0abfbc, #09c623);
}
</style>
