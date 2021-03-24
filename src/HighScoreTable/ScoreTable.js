import React from 'react';

const ScoreTable = (props) => {
    
    const {country} = props;
    
    return (

        <div className="test">

            <h2>High scores: {country.name}</h2>

            <table className="table">
               
                <tbody>
                    {country.scores.map((score, index) => {
                        
                        return (<tr key={index}><td>{score.n}</td>
                            <td>{score.s}</td>
                        </tr>)
                    }
                    )} 
                </tbody>
            </table>
        </div>
    );
};

export default ScoreTable;