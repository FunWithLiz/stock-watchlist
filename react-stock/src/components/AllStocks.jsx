import React from 'react';

function AllStocks(props) {
    const obj = props.stocks.stock
    return (
        <div>
            <h2 className="stockTitle">List of all Stocks</h2>
            <div className="allStocks">
                {obj.map((stock) => (
                    <div className="hover_img" // able to hover over text to get an image to show
                    key={stock.id}>
                        <h4>
                            <b>
                            {stock.id}
                            <span className="stockimg"><img  src={require("../img/stock_graph.gif")} alt="bgimg"/></span>
                            </b>
                        </h4>
                        <h4 className="stockspace">
                            {stock.database_code}
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
        </div>

    )
}

export default AllStocks