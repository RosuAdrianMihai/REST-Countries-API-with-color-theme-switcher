import React from "react";

function Header( { theme, setTheme } ){

    function onThemeChange(){
        const htmlElement = document.querySelector("html");
        if(theme!=="Dark"){
            htmlElement.classList.add("dark")
            localStorage.setItem("theme", "Dark");
            setTheme("Dark")
        } else {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "Light");
            setTheme("Light")
        }
    }

    return(
       <div className="flex justify-between items-center px-[5%] lg:px-[10%] h-[13vh] bg-white shadow-md mb-[7.5%] dark:text-dark-mode-text dark:bg-dark-mode-elements">
           <h2 className="text-lg font-semibold">Where in the world?</h2>

           <div className="flex items-center">
               <ion-icon onClick={onThemeChange} name="moon-outline" class="hover:cursor-pointer"></ion-icon>
               <span className="pl-3">{theme} Mode</span>
           </div>
       </div>
    )
}

export default Header;
