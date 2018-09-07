import React from 'react';
import Restoflist from './Restoflist';
import EditForm from './EditForm';

function AllWatchList(props) {
    const obj = props.stocks.stock

    return (
        <div>
            <h2 className="watchlistTitle">List of all Watch List</h2>
        <h2 className="watchlistParagraph">Please click on one of the list! Edit one of your list by selecting one stock from the drop down 
            and click on "Add stock on the watch list" or edit the name list by clicking on the "Update the Watch List name".
            If you don't want the list any more, simply click on the "Delete the Watch List" and watch it disappear!
        </h2>
        
        <div className="container has-text-centered">
            <select
                onChange={props.handleSelectionChange}
                value={props.value}
            >

                {obj.map((stock) => (
                    <option
                        key={stock.id}
                        value={stock.id}
                    >
                        {stock.dataset_code}
                    </option>
                ))}
            </select>

            {props.name.map(name => (

                <div key={name.id}>
                    <h4 onClick={() => {
                        props.callingFetchStockList(name.id)
                    }} >
                        {name.name_list}
                    </h4>

                    <button onClick={(e) => {
                        e.preventDefault();
                        props.setIdToEdit(name.id);

                        // props.updateWatchList(name.id);
                    }}>Update the Watch List name</button>


                    <button onClick={(e) => {
                        e.preventDefault();
                        props.deleteTheWatchList(name.id)
                    }}>Delete the Watch List</button>

                    <label>

                    </label>
                    <button
                        type="submit"
                        value="Add a stock to your watch list"
                        onClick={() => props.addToWatchList(props.value, props.list.list.id)}
                    >Add stock to the Watch List</button>

                </div>
            ))
            }
            {props.list ? <Restoflist list={props.list} /> : null}
        </div>
        </div>
    )
}

export default AllWatchList

