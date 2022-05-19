import { useState, useEffect } from "react";
import axios from "axios";

function useCountries(searchedTerm){
    const [countries, setCountries] = useState([]);

    const resultedCountries = async (term) => {
        let response;
        let dataIn;
    
            if(term === ""){
              response = await axios.get(`https://restcountries.com/v3.1/all`)
              dataIn = response.data;
              setCountries(dataIn);
            } else {
              response = await axios.get(`https://restcountries.com/v3.1/name/${term}`)
              dataIn = response.data;
              setCountries(dataIn);
            } 
     }

     useEffect(()=>{
        if(searchedTerm === ""){
            resultedCountries(searchedTerm);
        } else {
            const timeoutId = setTimeout( () => {
                resultedCountries(searchedTerm)
            }, 1000)

            return () => {
                clearTimeout(timeoutId);
            }
        }
    }, [searchedTerm])

    return [countries, resultedCountries];
}

export default useCountries;