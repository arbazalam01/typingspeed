import React from 'react';
import "./ChallengeCard.css";

const ChallengeCard=({cardname,cardvalue})=>{
    return(
        <div className="card-details-container">
            <div className="card-name">{cardname}</div>
            <div className="card-value"> {cardvalue} </div>
        </div>
    )

}

export default ChallengeCard;