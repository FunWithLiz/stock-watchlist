const BASE_URL = process.env.REACT_APP_API_URL


function getAllStocks(){
    return fetch(BASE_URL + '/stocks')
    .then(res => res.json())
}

function saveCategoryName(category){
    const opts = {
        method: 'POST',
        body: JSON.stringify(category),
        headers:{
            'Content-Tyoe': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/stocks`, opts)
    .then(res => {
        console.log(res)
        return res.json()
    })
}

export {
    getAllStocks,
    saveCategoryName
}