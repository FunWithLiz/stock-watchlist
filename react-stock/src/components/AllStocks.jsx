import React from 'react';

function AllStocks(props) {
    const obj = props.stocks.stock
    return (
        <div className="allStocks">
            {obj.map((stock) => (
                <div key={stock.id}>
                    <h4>
                        {stock.id}{stock.database_code}
                    </h4>
                    <p>
                        {stock.dataset_code}
                        <br />
                        {stock.frequency}
                        <br />
                        {stock.newest_available_date}
                        <br />
                        {stock.oldest_available_date}
                    </p>
                </div>
            ))
            }
        </div>

    )
}

export default AllStocks