import React from 'react';
import Restoflist from './Restoflist';
import EditForm from './EditForm';

function AllWatchList(props) {
    const obj = props.stocks.stock
    return (
        <div className="hero has-text-centered">
            {props.name.map(name => (

                <div key={name.id}>
                    <h4 onClick={() => {
                        props.callingFetchStockList(name.id)
                    }} >
                        {name.name_list}
                    </h4>

                    <button onClick={(e)=>{
                        e.preventDefault();
                        props.setIdToEdit(name.id);
        
                        // props.updateWatchList(name.id);
                    }}>Update the Watch List name</button>


                    <button onClick={(e)=>{
                        e.preventDefault();
                        props.deleteTheWatchList(name.id)
                    }}>Delete the Watch List</button>

                    <label>
                    <select
                    onChange={props.handleSelectionChange}
                    value={props.value}
                    >

                    {obj.map((stock) =>(
                        <option 
                        key ={stock.id}
                        value={stock.dataset_code}
                        >
                        {stock.dataset_code}
                        </option>
                    ))}
                    </select>
                    </label>
                    <input 
                    type="submit" 
                    value="Add a stock to your watch list"
                    onSubmit={props.handleSelectionSubmit} 
                    />

                </div>
            ))
            }
            {props.list ? <Restoflist list={props.list} /> : null}
        </div>

    )
}

export default AllWatchList

