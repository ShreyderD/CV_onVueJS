<template lang="html">
  <header>
    <div v-if="data" class="header-text">
        <p>{{ data.name }} {{ data.surname }}</p>
        <p style="font-size: 18px;">{{ data.profession }}</p>
    </div>
    <div class="my-notify-error" v-else>
      <p class="warning">{{ error }}</p>
    </div>
    <img alt="Dmitriy Shreyder Foto 2019" class="introduction__photo" src="@/../img/CV_Photo_2018_10.jpg" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: [ 'data',' error' ]
}



</script>

<style lang="css" scoped>
/* .a0 {
    text-decoration: none;
}
header {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 20px;
    min-height: 240px;
    /* background: url("<%= BASE_URL %>/../img/forest_fog.jpg");
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgb(0, 0, 0, 0.7) 100%), url("../../img/forest_fog.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%50%;
}

.header-text {
    margin: auto 20px;
    font-size: 40px;
    color: #fff;
    font-variant: all-small-caps;
    text-align: end;
    text-align: right;
}

.introduction__photo {
    margin: auto 0;
    border-radius: 20px;
    max-width: 150px;
    height: 150px;
} */
</style>
