<template lang="html">
  <div class="header">
      <div class="settings_langs" @click="chooseLanguage($event)">
        <span :class="{ activelang: activeLang === 'EN' }">EN</span>/<span :class="{ activelang: activeLang === 'DE' }">DE</span>
      </div>
      <div v-if="data" class="header-text">
          <p>{{ data.name }} {{ data.surname }}</p>
          <p style="font-size: 18px;">{{ data.profession }}</p>
      </div>
      <div v-else class="my-notify-error">
        <p class="warning">{{ error }}</p>
      </div>
      <img alt="Dmitriy Shreyder Foto 2019" class="introduction__photo" src="@/../img/CV_Photo_2018_10.jpg" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: [ 'data', 'error' ],
  data() {
    return {
      activeLang: "EN"
    }
  },
  methods: {
    chooseLanguage(e) {
      // this.activeLang = langID
      this.activeLang = e.target.innerText
      console.log(e.target.innerText)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
