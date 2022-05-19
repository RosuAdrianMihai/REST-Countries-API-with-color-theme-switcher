import React from "react";
import { Link } from "react-router-dom";

function CountryDetailedInfo( { selectedCountry } ) {

    const languageKey = Object.keys(selectedCountry.languages);
    const currencyKey = Object.keys(selectedCountry.currencies);

    const displayLanguages = languageKey.map((key) => {
        return `${selectedCountry.languages[key]} `;
    })

    const displayCurrencies = currencyKey.map((key) => {
        return `${selectedCountry.currencies[key].name} `
    })

   let borderSegment;

    if(selectedCountry.hasOwnProperty("borders")){
     borderSegment = selectedCountry.borders.map((element, index) => {
      return <p key={index} className="px-4 py-1 mr-4 shadow-md border-[0.5px] border-gray-300 dark:border-0 dark:bg-dark-mode-elements">{element}</p>
    })
} else {
     borderSegment = "None"
}

    return(
       <div className="dark:text-dark-mode-text px-[7.5%]">
           <Link to="/" className="px-4 py-1 shadow-md 2xl:ml-[3vw] dark:bg-dark-mode-elements">
           <ion-icon name="arrow-back-outline" class="dark:text-dark-mode-text pr-3"></ion-icon>
           Back
           </Link>

           <div className="lg:flex lg:flex-wrap lg:justify-between lg:items-center 2xl:justify-evenly 2xl:gap-x-[10vw] lg:gap-x-[50px] lg:mt-[5vh]">

           <img src={selectedCountry.flags.svg} alt="country-flag" className="my-6 max-h-[350px] min-h-[150] sm:h-[30vh] md:h-[32vh] shadow-md"/>
           
           
           <div>
               
              <div className="lg:flex lg:flex-wrap lg:items-center">

               <div className="mb-8">
               <h1 className="mb-6 text-xl font-semibold">{selectedCountry.name.common}</h1>
               <p>Official name: <span className="dark:text-gray-300">{selectedCountry.name.official}</span> </p>
               <p className="my-1">Population: <span className="dark:text-gray-300">{selectedCountry.population}</span> </p>
               <p className="my-1">Region: <span className="dark:text-gray-300">{selectedCountry.region}</span> </p>
               <p className="my-1">Sub Region: <span className="dark:text-gray-300">{selectedCountry.subregion}</span> </p>
               <p className="my-1">Capital: <span className="dark:text-gray-300">{selectedCountry.capital}</span> </p>
               </div>

               <div className="lg:ml-[5vw]">
               <p className="my-1">Top Level Domain: <span className="dark:text-gray-300">{selectedCountry.tld[0]}</span> </p>
               <p className="my-1">Currencies: <span className="dark:text-gray-300">{displayCurrencies}</span> </p>
               <p className="my-1">Languages: <span className="dark:text-gray-300">{displayLanguages}</span> </p>
               </div>

               </div>

               <div className="mt-6">
                   <h2 className="font-semibold text-[17px] mb-3">Border Countries:</h2>

                   <div className="flex flex-wrap dark:text-gray-300 gap-y-4">
                       {borderSegment} 
                   </div>
               </div>

           </div>

           </div>
       </div>
    )
}

export default CountryDetailedInfo;