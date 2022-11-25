const API_URL = 'https://pokeapi.co/api/v2/pokemon/'; 




// --------------------------------------------------

function fetch_API(item) { 
   
        
    fetch(API_URL + item)
        .then( response => response.json())
        .then(( data) => { 
            

            console.log('======== Data fetch ========')
            console.log(data)

            displayData(data)
        })
        .catch( error => console.error(error))
    ;
}


async function chargementDatas(item) {

    try { 
        const promise_Fetch_API = await fetch_API(item);

    } catch (error) { 
        console.warn(error); 
    }  

}


function displayData(data) {

}



// --------------------------------------------------



chargementDatas();

