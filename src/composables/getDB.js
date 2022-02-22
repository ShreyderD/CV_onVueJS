import { ref } from 'vue'

const getDB = () => {
  const data = ref(null)
  const error = ref(null)

  const loadData = async (key) => {
    try{
      let request = await fetch(key)
      if(request.status !== 200 ) { throw new Error(`Couldn't fetch data from source: ${key}`)}
      data.value = await request.json()
      console.log("getDB()")
      console.log(data)
      console.log(data.value)
      console.log(data.value.name)

    } catch(err) {
      error.value = err.message
      // console.log(error.value)
    }
  }

  return { loadData, data, error }
}


export default getDB
