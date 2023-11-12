import React, { useContext } from "react";
import { NoteContext } from "./Project";
import { MdLanguage, MdSearch } from "react-icons/md";
import { useTranslation } from "react-i18next";
function Search()
{
 
    const {search,setsearch}=useContext(NoteContext);
     const {t,i18n}=useTranslation();
    const changeLanguage=()=>i18n.changeLanguage(i18n.language==="en"?"hi":"en");
    return(
      <div className="search-container">
        <div className="search">
    <input
      type="text"
      className="search-input"
      value={search}
      placeholder={t("search here")}
      onChange={(e) => {
        setsearch(e.target.value);
      }}
    ></input>
    
  </div>
  <div className="search-icon">
    <MdSearch size="2.5rem" ></MdSearch>
  </div>
  <div className="language-icon" >
    <MdLanguage size="2rem" onClick={changeLanguage}/>
  </div>
      </div>  
    
   ) }
   export default Search