import React from "react";
import { Link } from "react-router-dom"

function CountryGeneralInfo( { countryInfo, region, selectedCountry, setSelectedCountry } ){
    return(
        <Link to="/country-detail" className={`${region === countryInfo.region || region === ""? "block": "hidden"}`}>
        <div onClick={ () => setSelectedCountry(countryInfo)} className={`hover:cursor-pointer mb-8 pb-8 shadow-lg dark:text-dark-mode-text dark:bg-dark-mode-elements `}>
             <img src={countryInfo.flags.svg} alt="country-flag" className="rounded-md"/>

             <h3 className="pl-8 my-4 font-extrabold">{countryInfo.name.common}</h3>

             <div className="pl-8">
                 <p className="font-semibold">Population: <span className="font-normal text-gray-800 dark:text-gray-300">{countryInfo.population}</span></p>
                 <p className="font-semibold">Region: <span className="font-normal text-gray-800 dark:text-gray-300">{countryInfo.region}</span></p>
                 <p className="font-semibold">Capital: <span className="font-normal text-gray-800 dark:text-gray-300">{countryInfo.capital}</span></p>
             </div>
        </div>
        </Link>
    )
}

export default CountryGeneralInfo;