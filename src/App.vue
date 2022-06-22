<template>
	<p>{{$store.state.error}}</p>
 <div v-if="$store.state.db">
  <Header />
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
                    <p class="ancor-text">{{ $store.state.db.routelinks.keyskills }}</p>
                  </router-link>
                </div>
              </div>
                <div class="ancor-item">
                  <div class="item-box">
                    <router-link :to="{ name: 'Experience', params: { id: $store.state.activeLang } }">
                      <i class="icon-settings-streamline-2"></i>
                      <p class="ancor-text">{{ $store.state.db.routelinks.experience }}</p>
                    </router-link>
                  </div>
                </div>
                <div class="ancor-item">
                  <div class="item-box">
                    <router-link :to="{ name: 'Education', params: { id: $store.state.activeLang } }">
                      <i class="icon-earth-globe-streamline"></i>
                      <p class="ancor-text">{{ $store.state.db.routelinks.education }}</p>
                    </router-link>
                  </div>
                </div>
                <div class="ancor-item">
                  <div class="item-box">
                    <router-link :to="{ name: 'Portfolio', params: { id: $store.state.activeLang } }">
                      <i class="icon-picture-streamline-1"></i>
                      <p class="ancor-text">{{ $store.state.db.routelinks.portfolio }}</p>
                    </router-link>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="blockright">
          <!-- <transition name="fade" mode="out-in"> -->
            <router-view />
          <!-- </transition> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
import Header from '@/components/Header.vue'
import PersonalInfo from '@/components/PersonalInfo'
import { 
  getFirestore, collection, getDocs,
  addDoc 
} from 'firebase/firestore'

export default {
  name: 'App',
  data() {
    return {
      webanalytics: []
    }
  },
  components: {
    Header,
    PersonalInfo
  },
  beforeCreate() {
    this.$store.commit('getDB')
    this.$store.dispatch('actConsole')


  },
  mounted() {
    // console.log('HEADER')
    // console.log(this.$store.state.db.personal.name)
    // this.data = this.$store.state.db; // = this.$route.params.id

    this.createEntry()
    this.getFB()
  },
  created(){
      // console.log(this.$router.currentRoute);
      // this.uri = this.$route.params.id; //this.$route.query.page; //this.$router.history.current.path //window.location.pathname;
      // console.log(this.uri);
      // this.uri = this.$route.query.page
      // console.log(this.$route.query.page)
  },
  methods: {
    getFB(){
      console.log('FB is being grabbed')
      const db = getFirestore()   //init firebase services
      const colRef = collection(db, 'webanalytics') //getting the specific "collectiion" from the FB
      getDocs(colRef)
      .then( (snapshot) => {
        //v-1:
          snapshot.docs.forEach( (item) => { 
            this.webanalytics.push({...item.data(), id: item.id}) 
          })
        //v-2: simple waybut not ideal!
        // this.webanalytics = [...snapshot.docs] 
        console.log(JSON.parse(JSON.stringify(this.webanalytics)))
        this.webanalytics.forEach( (item) => console.log(JSON.parse(JSON.stringify(item.date))))
      })
      .catch( (err) => { console.log(err.message) })
    },
    async createEntry(){
      const db = getFirestore()   //init firebase services
      const docRef = await addDoc(collection(db, 'webanalytics'), {
        date: {
          seconds: 1600000000,
          nanoseconds: 0
        }
      })
      .then( (i) => console.log("Document written with ID: ", i.id))
      .catch((err) => console.log(err.message));
    }
  }
}
</script>


<style>
#nav {
  padding: 2rem 0 1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Errors/Wanings Style: Start */
.my-notify-info, .my-notify-success, .my-notify-warning, .my-notify-error {
    padding: 1rem;
    margin: 1rem 0;

}
.my-notify-info:before, .my-notify-success:before, .my-notify-warning:before, .my-notify-error:before {
    font-family:FontAwesome;
    font-style:normal;
    font-weight:400;
    display:inline-block;
    text-decoration:inherit;
    width:1em;
    margin-right: 0.2rem;
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
