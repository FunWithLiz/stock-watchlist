import React from 'react';

function Restoflist(props) {
    return (
        <div>
 
            {props.list.stocks.map(list => (
                
                <div key={list.id}>
                    <p>
                        {list.database_code}
                        {list.dataset_code}
                    </p>

                
                </div>
            ))
            }

        </div>

    )
}

export default Restoflist