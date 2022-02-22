<template lang="html">
  <div v-if="data">
    <p class="section-title_2" id="experience">{{ data.experience.title }}:</p>
    <div v-for="job in data.experience.jobs" :key="job.id" class="position">
      <div class="period">
          <div class="center">{{ job.from }} <br />{{ job.to }}</div>
      </div>
      <div class="position_title" @click="showList(job.id)"><strong>{{ job.title }}</strong> ({{ job.company }}, {{ job.location }})</div>
      <transition name="slide-fade">
        <div v-if="job.id === activeID" class="position__description">
          <p>{{ job.description }}</p>
          <div v-if="job.aor[0].title" class="responsabilities">
              <p class="position_sub_titles">{{ data.experience.txt1 }}</p>
              <ul v-for="item in job.aor" :key="item.title">
                  <li>{{ item.title }}
                      <ul>
                          <li v-for="item in item.list" :key="item">{{ item }}</li>
                      </ul>
                  </li>
              </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
  <Error :error="error" />
</template>

<script>
import getDB from '@/composables/getDB'
import Error from '@/components/Error'
import { useStore } from 'vuex'


export default {
  name: "Exp",
  components: { Error },
  setup($store) {
    const store = useStore()
    const { loadData, data, error } = getDB()

    let url = `http://localhost:3000/${store.state.activeLang}`
    loadData(url)

    return { data, error }
  },
  data() {
    return {
      activeID: 0
    }
  },
  methods: {
    showList(id) {
      if (this.activeID === id) {
        this.activeID = 0
      } else {
        this.activeID = id
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
