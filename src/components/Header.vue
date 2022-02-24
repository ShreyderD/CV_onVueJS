<template lang="html">
<!-- <p>uri:</p>
<p>{{ $route.params.id }}</p>
<p>{{ uri }}</p>
<p>{{ $store.state.activeLang }}</p> -->
  <div class="header">
      <div class="settings_langs" @click="$store.commit('chooseLanguage', $event), switchLanguage()">
        <a href="#"><span :class="{ activelang: $store.state.activeLang === 'EN' }">EN</span>
        </a>
        / 
        <a href="#"><span :class="{ activelang: $store.state.activeLang === 'DE' }">DE</span>
        </a>
      </div>
      
      <div v-if="data" class="header-text">
          <p>{{ data.personal.name }} {{ data.personal.surname }}</p>
          <p style="font-size: 18px;">{{ data.personal.profession }}</p>
      </div>
      <Error :error="error" />
      <img alt="Dmitriy Shreyder Foto 2019" class="introduction__photo" src="@/../img/CV_Photo_2018_10.jpg" />
  </div>
</template>

<script>
import Error from '@/components/Error'

export default {
  name: 'Header',
  props: [ 'data', 'error' ],
  data() {
    return {
      uri: null
    }
  },
  methods: {
    switchLanguage() {
      console.log('switch language!')
      this.$router.push( { name: 'KeySkills' } )
    }
  },
  beforeCreate() {
    // this.$store.state.activeLang = this.$route.params.id
  },
  created(){
        this.uri = this.$route.params.id; //this.$route.query.page; //this.$router.history.current.path //window.location.pathname;
        console.log(this.uri);
      // this.uri = this.$route.query.page
      // console.log(this.$route.query.page)
  },
  components: { Error }
}
</script>

<style lang="css" scoped>
</style>
