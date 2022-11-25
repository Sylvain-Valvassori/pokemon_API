const API_URL = 'https://pokeapi.co/api/v2/pokemon/'; 
let MAX = 151;
let ID_POKEMON = 1;
// --------------------------------------------------

function fetch_API() { 
   

    while(ID_POKEMON <= MAX){
        fetch(API_URL + ID_POKEMON)
            .then( response => response.json())
            .then(( data) => { 
                
    
                console.log('======== Data fetch ========')
                console.log(data)
                loadPokemon(data);
    
            })
            .catch( error => console.error(error))
        ;
        ID_POKEMON +=1;
    }
        
    }

        
    
async function chargementDatas() {
    
    try { 
        const promiseOne = await fetch_API();
        
    } catch (error) { 
        console.warn(error); 
    }  
    
}


function loadPokemon(data){
        
    const sectionPokemon = document.querySelector('.containerCardsPokemon');
    // const imgPokemon =  data.sprites.other.home.front_default;
    const imgPokemon =  data.sprites.other.home.front_shiny;
    const namePokemon =  data.name;



    
    sectionPokemon.innerHTML += `
        <div class="card-pokemon">
            <img src="${imgPokemon}" alt="${namePokemon}">
        </div>
    `;  
       
}


// --------------------------------------------------


chargementDatas();
    
