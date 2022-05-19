import React from "react";
import { useState } from "react";
import CountryGeneralInfo from "./CountryGeneralInfo";

function GeneralInfo({ countries, setCountries,  searchedTerm, setSearchedTerm, selectedCountry, setSelectedCountry, region, setRegion }){
    const [filter, setFilter] = useState(false);
    

    const listOfCountries = countries.map( (country, index) => {
        return <CountryGeneralInfo key={index} countryInfo={country} region={region} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
    })

    function filterByRegion(){
        if(region === ""){
            return "Filter by Region"
        } else return region;
    }

    return(
       <div>
           <div>
               <div className="relative md:flex md:justify-between md:items-center dark:text-dark-mode-text lg:gap-x-[7.5vw]">
               <ion-icon name="search-sharp" class="absolute left-[9%] lg:left-[7%] top-5 h-5 w-5 hover:cursor-pointer"></ion-icon>
               <input value={searchedTerm} onChange={ (event) => setSearchedTerm(event.target.value)} type="text" placeholder="Search for a country..." className="w-[90%] lg:w-[35%] lg:pl-[5%] mx-[5%] py-4 pl-[15%] bg-white focus:outline-0 shadow-md rounded-md dark:bg-dark-mode-elements dark:text-dark-mode-text dark:placeholder:text-dark-mode-text"/>

               <div className="ml-[5%] w-[60%] lg:w-[25%] mt-[6vh] md:mt-0 bg-light-mode-background dark:bg-dark-mode-elements dark:text-dark-mode-text relative md:mr-[10%]">
                       <div onClick={ () => setFilter(!filter)} className="relative flex items-center hover:cursor-pointer pl-[10%] shadow-md py-3 ml-2">
                           {filterByRegion()}
                           <ion-icon name="chevron-down-outline" class="absolute left-[90%]"></ion-icon>
                       </div>

                       <div className={`${filter?"block": "hidden"} pl-[10%] z-[10] shadow-md py-3 absolute bg-light-mode-background mt-1 w-[100%] dark:bg-dark-mode-elements dark:text-dark-mode-text`}>
                       <p> <span onClick={ () => {setFilter(!filter); setRegion("Africa")}} className="hover:cursor-pointer">Africa</span> </p>
                       <p> <span onClick={ () => {setFilter(!filter); setRegion("Americas")}} className="hover:cursor-pointer">Americas</span> </p>
                       <p> <span onClick={ () => {setFilter(!filter); setRegion("Asia")}} className="hover:cursor-pointer">Asia</span> </p>
                       <p> <span onClick={ () => {setFilter(!filter); setRegion("Europe")}} className="hover:cursor-pointer">Europe</span> </p>
                       <p> <span onClick={ () => {setFilter(!filter); setRegion("Oceania")}} className="hover:cursor-pointer">Oceania</span> </p>
                       <p className={`${region === ""? "hidden": "block"}`}> <span onClick={ () => {setFilter(!filter); setRegion("")}} className="text-red-600 hover:cursor-pointer">Remove Filter</span> </p>
                       </div>
                   </div>
               </div>

           </div>

           <div className="px-[10%] mt-[8vh] sm:grid sm:gap-x-[5%] sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {listOfCountries}
           </div>
       </div>
    )
}

export default GeneralInfo;