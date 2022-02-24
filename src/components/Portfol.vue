<template lang="html">
  <div v-if="$store.state.db">
    <p class="section-title_2" id="portfolio">{{ $store.state.db.portfolio.title }}:</p>
    <ul>
        <li v-for="project in $store.state.db.portfolio.projects" :key="project.id">
          <b>{{ project.title }}</b>
          <ul v-for="item in project.list" :key="item.description">
            <li><a :href="item.link" target="_blank" rel="noopener">{{ item.description }}</a></li>
          </ul>
        </li>
    </ul>
  </div>
  <Error />
</template>

<script>
import Error from '@/components/Error'

export default {
  name: "Portfol",
  components: { Error }
}
</script>

<style lang="css" scoped>
</style>
