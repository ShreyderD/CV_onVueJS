<template lang="html">
  <div v-if="data" class="blockright">
    <p class="section-title_2" id="study">{{ data.title }}</p>
    <div v-for="course in data.courses" :key="course.id" class="position">
      <div class="period">
          <div class="center">{{ course.from }} - {{ course.to }}</div>
      </div>
      <div class="position_title"><strong>{{ course.title }}</strong> ({{ course.desctiption }})</div>
      <div v-if="showPosition" class="position__description">
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
      showPosition: false
    }
  },
  setup() {
    const { loadData, data, error } = getDB()

    loadData('http://localhost:3000/education')

    return { data, error }
  }
}
</script>

<style lang="css" scoped>
</style>
