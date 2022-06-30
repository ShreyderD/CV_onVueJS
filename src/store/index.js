import { createStore } from 'vuex'
import axios from 'axios'
import firebase from '../firebase'           // console.log(firebase)
import { 
  getFirestore, collection, 
  getDocs, addDoc 
} from 'firebase/firestore'

export default createStore({
  state: {
    activeLang: 'EN',
    dburl: null,
    db: null,
    error: null,
    analyticURL: null,
    webstat: [],
    ipAPI: 'https://jsonip.com/',
	  ip: null,
    geoAPI: 'http://ip-api.com/json/', //https://freegeoip.app/json/
    formData: {
      country: "N/A",
      city: "N/A"
    },
    currentPage: "null"
  },
  mutations: {
    getDB(state) {
      //Development Vs. Production URLs ***************************************
      if (window.location.href.includes("local")) {
        //console.log(window.location.href)

        //path to main DB Json
        state.dburl = `http://localhost:3000/${state.activeLang}`
        //console.log('STORE URL:', state.dburl)

        //path to web analytics
        //state.analyticURL = "http://localhost:3000/locations"

      } else {

        //path to main DB Json
        if(state.activeLang === 'EN') {
          state.dburl = `/data/db_en.json`
          // const url = `/data/db.json`
        } else if(state.activeLang === 'DE') {
          state.dburl = `/data/db_de.json`
        }

        //path to web analytics
        //state.analyticURL = `/data/webanalytics.json`
      }
      //***********************************************************************

      //loading Json Data from chosen Language: EN/DE
      const loadData = async (url) => {
        try{
          let request = await fetch(url)
          if(request.status !== 200 ) { 
            throw new Error(`Couldn't fetch data from source: ${url}`)
          } else {
            state.db = await request.json()
          }
        } catch(err) {
          state.error = err.message
          console.error(state.error)
          // console.error(err)
        }
      }
      loadData(state.dburl)
      // .then(() => console.log(state.db.personal.title))
    },
    chooseLanguage(state, e) {
      state.activeLang = e.target.innerText
    },
    mutateFB(state, item) {
      this.state.webstat.push({...item.data(), id: item.id}) 
    },
    currentPage(state, currentPage){
      this.state.currentPage = currentPage
    }
  },
  actions: {
    getFB({commit}){
      const db = getFirestore()   //init firebase services
      const colRef = collection(db, 'webstat') //getting the specific "collectiion" from the FB
      getDocs(colRef)
      .then( (snapshot) => {
          snapshot.docs.forEach( (item) => { 
            commit('mutateFB', item)
          })
        //console.log(JSON.parse(JSON.stringify(this.state.webstat)))
        //this.state.webstat.forEach( (item) => console.log(JSON.parse(JSON.stringify(item.date))))
      })
      .catch( (err) => { console.log(err.message) })
    },
    async createEntry(){
      if (window.location.href.includes("local")) {
        const currentDate = new Date()
        const db = getFirestore()   //init firebase services
  
        try {
          //get details
          let apiKey = '1525fa7c23de4fbf8f7afa8b37ffe11d';
          const getIP = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`) // console.log(getIP.data) //https://app.abstractapi.com/api/ip-geolocation/tester
  
          const docRef = await addDoc(collection(db, 'webstat'), {
            data: {
              date: currentDate,
              dateString: currentDate.toString(),
              details: getIP.data
            }
          })
          //console.log("Document has been written with ID: ", docRef.id)
  
          //.then( (i) => console.log("Document has been written with ID: ", i.id))  - if we use no "await"
          //.catch((err) => console.log(err.message));  - if we use no "await"
        } catch(err) {
            console.error(err)
        }
      }
    }
  },
  getters: {
  },
  modules: {
  }
})