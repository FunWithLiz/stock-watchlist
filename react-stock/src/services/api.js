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

export {
    getAllStocks,
    saveName,
    fetchWatchlist
}