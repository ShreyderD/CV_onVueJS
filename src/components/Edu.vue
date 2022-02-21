<template lang="html">
  <div v-if="data">
    <p class="section-title_2" id="study">{{ data.title }}</p>
    <div v-for="course in data.courses" :key="course.id" class="position">
      <div class="period">
          <div class="center">{{ course.from }} - {{ course.to }}</div>
      </div>
      <div class="position_title" @click="showList(course.id)"><strong>{{ course.title }}</strong> ({{ course.desctiption }})</div>
      <transition name="slide-fade" mode="out-in">
        <div v-if="course.id === activeID" class="position__description">
          <span>{{ course.desctiption }} (<a :href="course.link" target="_blank" rel="nofollow noreferrer noopener">course link</a>)</span>
          <div v-if="course.topics[0].title">
            <p style="font-weight: 700; margin-top: 10px;">{{ data.txt1 }}:</p>
            <ul>
              <li v-for="topic in course.topics" :key="topic.title"><b>{{ topic.title }}</b>
                <ul>
                    <li v-for="item in topic.list" :key="item"><b>{{ item }}</b></li>
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

export default {
  name: "Edu",
  components: { Error },
  data() {
    return {
      activeID: 0
    }
  },
  setup() {
    const { loadData, data, error } = getDB()

    loadData('http://localhost:3000/education')

    return { data, error }
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
