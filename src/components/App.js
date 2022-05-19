import React from "react";
import { useState } from "react";
import "../index.css";
import { Routes, Route } from "react-router-dom";

import useCountries from "../hooks/useCountries";

import Header from "./Header";
import GeneralInfo from "./GeneralInfo";
import CountryDetailedInfo from "./CountryDetailedInfo";

function App(){
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [searchedTerm, setSearchedTerm] = useState("");
    const [region, setRegion] = useState("");
    const [countries, setCountries] = useCountries(searchedTerm);
    const [selectedCountry, setSelectedCountry] = useState({});

    if(theme === null){
        localStorage.setItem("theme", "Light");
        setTheme("Light");
    } else if(theme === "Dark"){
        if(!document.querySelector("html").classList.contains("dark"))
        document.querySelector("html").classList.add("dark");
    }

    return(
        <div className="min-h-screen text-light-mode-text bg-light-mode-background dark:bg-dark-mode-background">
            <Header theme={theme} setTheme={setTheme}/>

            <Routes>
                <Route path="/" element={<GeneralInfo countries={countries} setCountries={setCountries} searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} region={region} setRegion={setRegion}/>}/>
                <Route path="/country-detail" element={<CountryDetailedInfo selectedCountry={selectedCountry}/>}/>
            </Routes>
        </div>
    )
}

export default App;
