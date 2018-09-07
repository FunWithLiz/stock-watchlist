const BASE_URL = process.env.REACT_APP_API_URL


function getAllStocks(){
    return fetch(BASE_URL + '/stocks')
    .then(res => res.json())
}

function saveName(name){
    const opts = {
        method: 'POST',
        body: JSON.stringify(name),
        headers:{
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/personal_watchlists`, opts)
    .then(res => res.json())
}


function fetchWatchlist(){
    return fetch(BASE_URL + '/personal_watchlists')
    .then(res => res.json())
}

function fetchStockList(id){
    return fetch(`${BASE_URL}/personal_watchlists/${id}`)
    .then(res => res.json())
}

function deleteTheWatchList(id) {
    const opts = {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/personal_watchlists/${id}`, opts)
    .then(res => res.json())
}


function updateWatchList(watch, watchId){
    const opts = {
        method: 'PUT',
        body: JSON.stringify(watch),
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    return fetch(`${BASE_URL}/personal_watchlists/${watchId}`, opts)
    .then(res => res.json())
}

function addToWatchList(stockId, watchId){
    const opts = {
        method: 'POST',
        body: JSON.stringify({stockId: stockId}),
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    return fetch(`${BASE_URL}/personal_watchlists/${watchId}/stocks`, opts)
    .then(res => res.json())
}


export {
    getAllStocks,
    saveName,
    fetchWatchlist,
    fetchStockList,
    deleteTheWatchList,
    updateWatchList,
    addToWatchList
}