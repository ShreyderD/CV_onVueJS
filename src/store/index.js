import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    activeLang: 'EN',
    dburl: null,
    db: null,
    error: null
  },
  mutations: {
    getDB(state) {
      //const url = `http://localhost:3000/${state.activeLang}` //on dev server (via json-server watch ../db.json)
      if(state.activeLang === 'EN') {
        state.dburl = `/data/db_en.json`
        // const url = `/data/db.json`
      } else if(state.activeLang === 'DE') {
        state.dburl = `/data/db_de.json`
      }
      // console.log('STORE URL:', state.dburl)

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
    actConsole(state, x) {
      console.log('The number:', x)
    }
  },
  actions: {
    async actConsole({commit}) {
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