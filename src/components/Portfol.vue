<template lang="html">
  <div v-if="data" class="blockright">
    <p class="section-title_2" id="portfolio">{{ data.title }}</p>
    <ul>
        <li v-for="project in data.projects" :key="project.id">
          <b>{{ project.title }}</b>
          <ul v-for="item in project.list" :key="item.description">
            <li><a :href="item.link" target="_blank" rel="noopener">{{ item.description }}</a></li>
          </ul>
        </li>
    </ul>
  </div>
  <Error :error="error" />
</template>

<script>
import getDB from '@/composables/getDB'
import Error from '@/components/Error'

export default {
  name: "Portfol",
  components: { Error },
  setup() {
    const { loadData, data,  error } = getDB()

    loadData('http://localhost:3000/portfolio')

    return { data, error }
  }
}
</script>

<style lang="css" scoped>
</style>
