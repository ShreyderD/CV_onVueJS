import { ref } from 'vue'

const getInfo = () => {
  const data = ref(null)
  const error = ref(null)

  const load = async (key) => {
    try{
      let request = await fetch(key)
      if(request.status !== 200 ) { throw new Error( () => error.message = `Couldn't fetch data from source: ${source}` )}
      data.value = await request.json()
      console.log(data.value)

    } catch(err) {
      error.value = err.message
      console.log(error.value)
    }
  }


  return { load, data, error }
}


export default getInfo
