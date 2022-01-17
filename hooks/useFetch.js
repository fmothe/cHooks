import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

  const isMounted  = useRef(true)

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  //Soluciona el error cuando hay delay entre lo que mostras y la request de la api {clase 114 - useRef- caso real}
  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {

    setstate({
      loading:true,
      error:null,
      data:null
    })
      fetch(url)
        .then(res => res.json())
        .then(data => {
            setstate({
                loading:false,
                error:null,
                data
            })
        })    
  }, [url])
  return state;
}


