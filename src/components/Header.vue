<template lang="html">
  <div class="header">
      <div class="settings_langs" @click="$store.commit('chooseLanguage', $event), switchLanguage()">
        <span :class="{ activelang: $store.state.activeLang === 'EN' }">EN</span>/<span :class="{ activelang: $store.state.activeLang === 'DE' }">DE</span>
      </div>
      <div v-if="data" class="header-text">
          <p>{{ data.personal.name }} {{ data.personal.surname }}</p>
          <p style="font-size: 18px;">{{ data.personal.profession }}</p>
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
  methods: {
    switchLanguage() {
      console.log('switch language!')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
