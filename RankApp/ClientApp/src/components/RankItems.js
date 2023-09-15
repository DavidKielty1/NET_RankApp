import React, { useState, useEffect } from 'react';
import MovieImageArr from './MovieImages.js'

const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }, [])


    return (
        <main>
            <div className="items-not-ranked">
             {
                    (items.length) ? items.map((item, idx) =>
                        <div className="unranked-cell">
                            <img key={idx} id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.imageId)?.image} alt="Movie posters" />
                        </div>
                    
                ) :  <h3>Loading...</h3>
            }
            </div>
          
        </main>)
}

export default RankItems;