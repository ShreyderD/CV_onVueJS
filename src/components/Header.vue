<template lang="html">
  <div v-if="$store.state.db" class="header">
      <div class="settings_langs" @click="$store.commit('chooseLanguage', $event), $store.commit('getDB', $event)">
        <a href="#"><span :class="{ activelang: $store.state.activeLang === 'EN' }">EN</span>
        </a>
        / 
        <a href="#"><span :class="{ activelang: $store.state.activeLang === 'DE' }">DE</span>
        </a>
      </div>
      <div class="header-text">
          <p class="header-text--title">{{ $store.state.db.personal.name }} {{ $store.state.db.personal.surname }}</p>
          <p class="header-text--subtitle">{{ $store.state.db.personal.profession }}</p>
      </div>
      <img class="profile_pic" alt="Dmitriy Shreyder Foto 2019" src="@/../img/CV_Photo_2018_10.jpg" />
  </div>
  <Error />
</template>

<script>
import Error from '@/components/Error'

export default {
  name: 'Header',
  components: { Error }
}
</script>

<style lang="css" scoped>
</style>
