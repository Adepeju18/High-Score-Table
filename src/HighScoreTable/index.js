import React from 'react';
import ScoreTable from './ScoreTable';
import allCountryScores from "./Scores";
const HighScoreTable = () => {
    const sortedCountry = allCountryScores.sort((countryA, countryB) =>{
        
        if(countryA.name > countryB.name){
            return 1
            
        } else if (countryA.name < countryB.name) {
            return -1

        }
        else return 0
    });
    
    //  const arrDesc = allCountryScores.sort((scoreA, scoreB)=>{
    //      return  scoreB-scoreA});
         
            
        
    
    return (
        
        <div>
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
