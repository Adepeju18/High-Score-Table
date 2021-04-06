import React, { useState } from 'react';
import ScoreTable from './ScoreTable';
import allCountryScores from "./Scores";




const HighScoreTable = () => {
    const[asc, setAsc] = useState(true);
    const sortedCountry = allCountryScores.sort((countryA, countryB) =>{
        return (asc) ?
        
        (countryA.name < countryB.name ? -1:1):
            
            
         (countryA.name < countryB.name ? 1:-1); 
            

        
    });
    
    
         
            
        
    
    return (
        
        <div>
            <button onClick={()=>{ setAsc((asc)=>!asc)}}>toggle order  {asc ? "descending" : "ascending"}</button>
            <h1>High scores per country</h1>
            
            {sortedCountry.map((country, index) => {
                
                return <ScoreTable key={index} country={country} />
                


            }
            )
            }


        </div>
        
    );
};

export default HighScoreTable;
