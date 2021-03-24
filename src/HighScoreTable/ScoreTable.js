import React from 'react';

const ScoreTable = (props) => {
    
    const {country} = props;
    
    return (

        <div className="test">

            <h2>High scores: {country.name}</h2>

            <table className="table">
               
                <tbody>
                    {country.scores.sort((scoreA, scoreB) => {

                        if (scoreA.s > scoreB.s) {
                            return -1

                        } else if (scoreA.s< scoreB.s) {
                            return 1

                        }
                        else return 0
                    })
                    .map((score, index) => {
                        
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