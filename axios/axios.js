import axios from 'axios'

const apiKey = 'apikey'


//creo instancia de axios.
const instance = axios.create({
    //aca puedo especificar el base url de la api
    baseURL: 'https://api.themoviedb.org/3',
    //configuro query params
    params:{
        //tiene que estar sintacticamente igual de como lo pide el endpoint
        apiKey: apiKey,
    }
})

//url va lo que varia de la baseurl
instance.get('url').then (resp => {
    const {data} = resp.data
    //desestructuro la data porque la respuesta tiene data dentro de data
})