<template lang="html">
  <div v-if="data">
    <p class="section-title_2" id="portfolio">{{ data.portfolio.title }}</p>
    <ul>
        <li v-for="project in data.portfolio.projects" :key="project.id">
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
import { useStore } from 'vuex'


export default {
  name: "Portfol",
  components: { Error },
  setup($store) {
    const store = useStore()
    const { loadData, data, error } = getDB()

    let url = `http://localhost:3000/${store.state.activeLang}`
    loadData(url)

    return { data, error }
  }
}
</script>

<style lang="css" scoped>
</style>
