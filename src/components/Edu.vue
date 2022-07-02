<template lang="html">
  <div v-if="$store.state.db">
    <p class="section-title_2" id="study">{{ $store.state.db.education.title }}</p>
    <div v-for="course in $store.state.db.education.courses" :key="course.id" class="position">
      <div class="period">
        <div class="center">{{ course.from }} - {{ course.to }}</div>
      </div>
      <div class="position_title" :class="{ active: course.id === activeID }" @click="showList(course.id)"><strong>{{ course.title }}</strong> ({{ course.desctiption }})</div>
      <transition name="slide-fade" mode="out-in">
        <div v-if="course.id === activeID" class="position__description">
          <span>{{ course.desctiption }} (<a :href="course.link" target="_blank" rel="nofollow noreferrer noopener">course link</a>)</span>
          <div v-if="course.topics[0].title">
            <p style="font-weight: 700; margin-top: 10px;">{{ $store.state.db.education.txt1 }}:</p>
            <ul>
              <li v-for="topic in course.topics" :key="topic.title"><b>{{ topic.title }}</b>
                <ul>
                  <li v-for="item in topic.list" :key="item">{{ item }}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
  <Error />
</template>

<script>
import Error from '@/components/Error'

export default {
  name: "Edu",
  components: { Error },
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
