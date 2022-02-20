<template lang="html">
  <header>
    <div v-if="data" class="header-text">
        <p>{{ data.name }} {{ data.surname }}</p>
        <p style="font-size: 18px;">{{ data.profession }}</p>
    </div>
    <div v-else class="my-notify-error">
      <p class="warning">{{ error }}</p>
    </div>
    <img alt="Dmitriy Shreyder Foto 2019" class="introduction__photo" src="@/../img/CV_Photo_2018_10.jpg" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: [ 'data', 'error' ]
}
</script>

<style lang="css" scoped>
</style>
