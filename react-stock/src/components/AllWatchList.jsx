import React from 'react';

function AllWatchList(props) {
    return (
        <div className="allStocks">
            {props.name.map(name => (
                
                <div key={name.id}>
                    <h4>
                        {name.name_list}
                    
                    </h4>

                
                </div>
            ))
            }
        </div>

    )
}

export default AllWatchList