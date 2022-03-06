import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    activeLang: 'EN',
    dburl: null,
    db: null,
    error: null,
    analyticURL: null,
	  ip: null
  },
  mutations: {
    getDB(state) {
      if(state.activeLang === 'EN') {
        state.dburl = `/data/db_en.json`
        // const url = `/data/db.json`
      } else if(state.activeLang === 'DE') {
        state.dburl = `/data/db_de.json`
      }

      //on dev server (via json-server watch ../db.json) -> disable this line on prodVersion
      //***********************************************************************
      state.dburl = `http://localhost:3000/${state.activeLang}` 
      // console.log('STORE URL:', state.dburl)

      // state.analyticURL = "http://localhost:3000/locations"
      state.analyticURL = `/data/webanalytics.json`


      //***********************************************************************



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
    setIP(state, ip) {
      state.ip = ip
    },
    getGeoLocation(state, data ) {
      //POST the data to WebAnalytics JSON
      const res = axios.post(this.state.analyticURL, { 
        country: data.location.data.country_name,
        city: data.location.data.city,
        date: data.date,
        time: data.time
      })

      // getCountry().then((location) => commit('getGeoLocation', { location, date, time }))

    }
  },
  actions: {
    //Get Date, Time & Location and POST
    actConsole({commit}) {
      //Get Date:
      let thedate = (today) => {
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let thedate = dd + '/' + mm + '/' + yyyy;

        return thedate.toString()
      }

      let date = thedate(new Date());

      //Get Time:
      let time = new Date().toTimeString()
      

      //Get Location:
      const getCountry = async () => {
        try{
          const location = await axios.get('https://freegeoip.app/json/')
          // console.log("Location:", location.data.country_name)
          return location
        }catch(err) {
          console.error(err)
        }
      }
      
      //POST the data to WebAnalytics JSON:

      //v-1:  SYNCHRONE POST request
      // const postData = (data) => axios.post("http://localhost:3000/locations", { 
      //   country: data.location.data.country_name,
      //   city: data.location.data.city,
      //   date: data.date,
      //   time: data.time
      // })

      //v-2: ASYNCHRONE POST request:
      const postData = async (data) => {
        try{
          const postLocation = await axios.post("http://localhost:3000/locations", { 
            country: data.location.data.country_name,
            city: data.location.data.city,
            date: data.date,
            time: data.time
          })
        }catch(err) {
          console.error(err)
        }
      }

      getCountry().then((location) => {
        if(this.state.ip === null) {
          commit('setIP', location.data.ip)
          postData({ location, date, time })
        }
      })



      /* ********************************************* */
      //Trash: example of using the Axios get requests
      try {
        // console.log('saying GM from store.actions!')
        //v-1: via try-catch-await
        // const res = await axios.get(`https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new`)
        // console.log(res.data)
        // commit('actConsole', res.data)
      } catch(err) {
        console.error(err)
      }
        //v-2: via .then
        // axios(`https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new`)
        // .then((response) => { console.log(response) })
        // // console.log(res.data)




    }
  },
  getters: {
  },
  modules: {
  }
})