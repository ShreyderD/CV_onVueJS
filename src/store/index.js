import { createStore } from 'vuex'

export default createStore({
  state: {
    activeLang: 'EN'
  },
  mutations: {
    chooseLanguage(state, e) {
      // this.activeLang = langID
      state.activeLang = e.target.innerText
      console.log(e.target.innerText)
    }
  },
  actions: {
  },
  getters: {

  },
  modules: {
  }
})
