import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    activeLang: 'EN',
    dburl: null,
    db: null,
    error: null,
    analyticURL: null,
    ipAPI: 'https://jsonip.com/',
	  ip: null,
    geoAPI: 'http://ip-api.com/json/', //https://freegeoip.app/json/
    formData: {
      country: "N/A",
      city: "N/A"
    }
  },
  mutations: {
    getDB(state) {

      //Development Vs. Production URLs ***************************************
      if (window.location.href.includes("local")) {
        console.log(window.location.href)

        //path to main DB Json
        state.dburl = `http://localhost:3000/${state.activeLang}`
        console.log('STORE URL:', state.dburl)

        //path to web analytics
        state.analyticURL = "http://localhost:3000/locations"

      } else {

        //path to main DB Json
        if(state.activeLang === 'EN') {
          state.dburl = `/data/db_en.json`
          // const url = `/data/db.json`
        } else if(state.activeLang === 'DE') {
          state.dburl = `/data/db_de.json`
        }

        //path to web analytics
        state.analyticURL = `/data/webanalytics.json`
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
    setIP(state, ip) {
      state.ip = ip
    },
    // getGeoLocation(state, data ) {
    //   //POST the data to WebAnalytics JSON indirectly from 'ACTIONS'
    //   const res = axios.post(this.state.analyticURL, { 
    //     country: data.location.data.country_name,
    //     city: data.location.data.city,
    //     date: data.date,
    //     time: data.time
    //   })

      // getCountry().then((location) => commit('getGeoLocation', { location, date, time }))

    // }
  },

  actions: {
    //Get Date, Time & Location and POST
    actConsole({commit}) {

      //Get Date using API:
      let thedate = (today) => {
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let thedate = dd + '/' + mm + '/' + yyyy;

        return thedate.toString()
      }

      let date = thedate(new Date())
      
      //Get Time:
      let time = new Date().toTimeString()
      
      //Get Location:
      const getCountry = async () => {
        // try{
        //   const location = await axios.get(this.state.geoAPI);
        //   console.log("Location:", location.data)
        //   return location
        // }catch(err) {
        //   console.error(err)
        // }
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
          const postLocation = await axios.post(this.state.analyticURL, { 
            country: this.state.formData.country,
            city: this.state.formData.city,
            date: data.date,
            time: data.time
          })
        }catch(err) {
          console.error(err)
        }
      }

      getCountry().then((location) => {
        if(this.state.ip === null) {
          commit('setIP', "000.00.00.00")
          console.log("this.state.analyticURL:", this.state.analyticURL)
          console.log("this.state.ip:", this.state.ip)
          // console.log("location.data.ip:", location.data.ip)
          // console.log("location:", location.data.city)
          console.log("date:", date)
          console.log("time:", time)
          try{
            postData({ location, date, time })
          }catch(err) {
            console.error(err)
          }
        }
      })

      /* ********************************************* */
      //Trash: example of using the Axios get requests
      // try {
        // console.log('saying GM from store.actions!')
        //v-1: via try-catch-await
        // const res = await axios.get(`https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new`)
        // console.log(res.data)
        // commit('actConsole', res.data)
      // } catch(err) {
      //   console.error(err)
      // }
        // v-2: via .then
        // axios(`https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new`)
        // .then((response) => { console.log(response) })
        // console.log(res.data)       
      // "proxy": "http://localhost:8080/",   //add this to avoid CORS error using localhost
    }
  },
  getters: {
  },
  modules: {
  }
})


/*
const test = async () => {
  try {
    // let axiosConfig = {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //   }
    // };

    //   const rest = await axios.get(`http://localhost:3000/locations`, {
      //     params: {
        //       "country": "USA"
        //     }
        //   }
        // )
        //   console.log(rest)
        //   console.log(rest.data)
        //   console.log(rest.data.locations)
        //   console.log(rest.data.locations[0])
        
    // const res = axios.post(`/data/webanalytics.json`, { 
    // const res = axios.post(`http://localhost:3000/dev_webanalytics.json`, {  
    // const res = axios.post(`http://localhost:3000/locations`, this.state.formData, axiosConfig)
    // const res = axios.post(`/data/webanalytics.json`, this.state.formData, axiosConfig)
    // const res = await axios.get(`/data/webanalytics.json`)



    const res = await axios({
      method: 'post',
      url: this.state.analyticURL,
      data: this.state.formData       // JSON.stringify(
    })

    console.log("START res.status");

    console.log("res.status:", res.status);
    console.log("res.responseText:", res.responseText);
    console.log("path: ", this.state.analyticURL)
    console.log("Axios Promise Response:")
    console.log(res.data)
    
    console.log("END res.status");
  } catch(err) {
      console.error(err)
  }




  // try {
  //   const res = await axios({
  //     method: 'post',
  //     url: this.state.analyticURL,
  //     data: JSON.stringify({
  //       country: "USA",
  //       city: "New-York",
  //       date: "09.03.2022",
  //       time: "09:45"
  //     })
  //   })
  //   console.log("Axios Promise Response:")
  //   console.log(res)
  //   console.log("Axios Promise Response Data:")
  //   console.log(res.data)
    
  // } catch(err) {
  //   console.error(err)
  // }

// ***********************************************************************
  // var xhr = new XMLHttpRequest();
  // xhr.open("POST", this.state.analyticURL);

  // xhr.setRequestHeader("Content-Type", "application/json");

  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4) {
  //       // console.log(xhr.status);
  //       // console.log(xhr.responseText);
  //   }};

  // var data = `{
  //   "country": 1,
  //   "city": "John Smith",
  //   "data": "10.00",
  //   "time": "10:00"
  // }`;

  // xhr.send(data);
// ***********************************************************************

// // fetch('https://jsonplaceholder.typicode.com/posts', {
// fetch(this.state.analyticURL, {
//   method: 'POST',
//   body: JSON.stringify({
//     country: 'foo',
//     city: 'bar',
//     data: '01.01.2022',
//     time: '10:00'
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// ***********************************************************************
}

// test();

*/