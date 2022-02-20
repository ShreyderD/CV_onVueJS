<template lang="html">
  <div v-if="data">
    <p class="section-title_2" id="experience">{{ data.title }}</p>
    <div v-for="job in data.jobs" :key="job.id" @click="this.showPosition = !this.showPosition" class="position">
        <div class="period">
            <div class="center">{{ job.from }} <br />{{ job.to }}</div>
        </div>
        <div class="position_title"><strong>{{ job.title }}</strong> ({{ job.company }}, {{ job.location }})</div>
        <div v-show="showPosition" class="position__description">
          <p>{{ job.description }}</p>
          <div v-if="job.aor[0].title" class="responsabilities">
              <p class="position_sub_titles">{{ data.txt1 }}</p>
              <ul v-for="item in job.aor" :key="item.title">
                  <li>{{ item.title }}
                      <ul>
                          <li v-for="item in item.list" :key="item">{{ item }}</li>
                      </ul>
                  </li>
              </ul>
          </div>
        </div>
    </div>
  </div>
  <Error :error="error" />
</template>

<script>
import getDB from '@/composables/getDB'
import Error from '@/components/Error'

export default {
  name: "Exp",
  components: { Error },
  setup() {
    const { loadData, data, error } = getDB()

    loadData('http://localhost:3000/experience')

    return { data, error }
  },
  data() {
    return {
      showPosition: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
