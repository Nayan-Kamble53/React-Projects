import { useState } from "react";

function Card({id,image,info,price,name, removeTour, removeallTour}) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,190)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt="city-img"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">
                        {readmore ? `Show less` : `Read More`}
                    </span>
                </div>
            </div> 

            <button onClick={() => removeallTour(id)} className="btn-green"> Interested</button>
            
            <button onClick={() => removeTour(id)} className="btnRed">Not Interested</button>
        </div>
    );
}

export default Card;