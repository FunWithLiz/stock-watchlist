import React from 'react';
import Restoflist from './Restoflist';
import EditForm from './EditForm';

function AllWatchList(props) {
    return (
        <div className="allStocks">
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

                </div>
            ))
            }
            {props.list ? <Restoflist list={props.list} /> : null}
            {/* {props.idToEdit ? <EditForm 
            idToEdit={props.idToEdit} 
            updateWatchList={this.onUpdate}/> : null } */}
        </div>

    )
}

export default AllWatchList