import { createStore } from 'vuex'

export default createStore({
  state: {
    activeLang: 'EN',
    db: null,
    error: null,
    n: 'Dima'
  },
  mutations: {
    getDB(state) {
      const url = `http://localhost:3000/${state.activeLang}`
      console.log('STORE URL:', url)

      const loadData = async (url) => {
        try{
          let request = await fetch(url)
          if(request.status !== 200 ) { 
            throw new Error(`Couldn't fetch data from source: ${key}`)
          } else {
            state.db = await request.json()
          }
        } catch(err) {
          state.error = err.message
          console.log(state.error)
        }
      }
      loadData(url).then(() => console.log(state.db.personal.title))
    },
    chooseLanguage(state, e) {
      state.activeLang = e.target.innerText
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
