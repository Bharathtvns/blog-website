import { useState,useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading,setisLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

          fetch('http://localhost:8000/blogs',{signal: abortCont.signal})
        .then(res =>{
          if(!res.ok){
            throw Error('Can not fetch the data');
          }
          console.log(res);
          return res.json()
        })
        .then(data =>{
          console.log(data);
          setData(data);
          setisLoading(false);
          setError(null);
        })
        .catch(err=>{
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            }
            else{
          setError(err.message);
          setisLoading(false);
            }
      
        })
        return()=> abortCont.abort();

      },[]);
    return {data,isLoading,error}
     
}
 
export default useFetch;