<template lang="html">
  <div class="header-text">
      <p>{{ data.name }} {{ data.surname }}</p>
      <p style="font-size: 18px;">{{ data.profession }}</p>
  </div>
  <img alt="Dmitriy Shreyder Foto 2019" class="introduction__photo" src="../../img/CV_Photo_2018_10.jpg" />
</template>

<script>
import getInfo from '../composables/getInfo.js'

export default {
  name: 'Header',
  setup() {
    const { load, data, error } = getInfo()

    load('http://localhost:3000/personal_info')

    return { data, error }
  }
}



</script>

<style lang="css" scoped>
</style>
