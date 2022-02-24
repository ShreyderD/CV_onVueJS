<template>
 <div v-if="$store.state.db">
  <Header :data="$store.state.db.personal" :error="$store.state.error"/>
  <div class="container">
    <PersonalInfo />
    <div class="wrap">
      <div id="nav">
        <div class="ancors-block">
            <div class="ancors-container">
              <div class="ancor-item">
                <div class="item-box">
                  <router-link :to="{ name: 'KeySkills', params: { id: $store.state.activeLang } }">
                    <i class="icon-ios-list-outline"></i>
                    <p class="ancor-text">#Key Skills</p>
                  </router-link>
                </div>
              </div>
                <div class="ancor-item">
                  <div class="item-box">
                    <router-link :to="{ name: 'Experience', params: { id: $store.state.activeLang } }">
                      <i class="icon-settings-streamline-2"></i>
                      <p class="ancor-text">#Experience</p>
                    </router-link>
                  </div>
                </div>
                <div class="ancor-item">
                    <div class="item-box">
                      <router-link :to="{ name: 'Education', params: { id: $store.state.activeLang } }">
                        <i class="icon-earth-globe-streamline"></i>
                        <p class="ancor-text">#Education</p>
                      </router-link>
                    </div>
                </div>
                <div class="ancor-item">
                    <div class="item-box">
                      <router-link :to="{ name: 'Portfolio', params: { id: $store.state.activeLang } }">
                        <i class="icon-picture-streamline-1"></i>
                        <p class="ancor-text">#Portfolio</p>
                      </router-link>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="blockright">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/javascript">
import Header from '@/components/Header.vue'
import PersonalInfo from '@/components/PersonalInfo'

export default {
  name: 'App',
  components: {
    Header,
    PersonalInfo
  },
  beforeCreate() {
    console.log('beforeCreate()')
    this.$store.commit('getDB')
  },
}
</script>
<style>
/* @import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'); */

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

#nav {
  padding: 20px 0 10px;
}

#nav a {

  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');

* {
    transition: all 0.3s;
    clear: both;
}


/* Errors/Wanings Style: Start */
.my-notify-info, .my-notify-success, .my-notify-warning, .my-notify-error {
    padding:10px;
    margin:10px 0;

}
.my-notify-info:before, .my-notify-success:before, .my-notify-warning:before, .my-notify-error:before {
    font-family:FontAwesome;
    font-style:normal;
    font-weight:400;
    display:inline-block;
    text-decoration:inherit;
    width:1em;
    margin-right:.2em;
    text-align:center;
    font-variant:normal;
    text-transform:none;
    line-height:1em;
    margin-left:.2em;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale
}
.my-notify-info:before {
    content:"\f05a";
}
.my-notify-success:before {
    content:'\f00c';
}
.my-notify-warning:before {
    content:'\f071';
}
.my-notify-error:before {
    content:'\f057';
}
.my-notify-info {
    color: #00529B;
    background-color: #BDE5F8;
}
.my-notify-success {
    color: #4F8A10;
    background-color: #DFF2BF;
}
.my-notify-warning {
    color: #9F6000;
    background-color: #FEEFB3;
}
.my-notify-error {
    color: #D8000C;
    background-color: #FFD2D2;
}
/* Errors/Wanings Style: END */
</style>
