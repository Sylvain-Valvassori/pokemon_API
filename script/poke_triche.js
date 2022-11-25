const API_URL = 'https://pokeapi.co/api/v2/pokemon/'; 
let POKEMON = 151;

const search_btn = document.querySelector('.searchForm > svg');
// --------------------------------------------------

function fetch_API() { 
   
        
    fetch(API_URL)
        .then( response => response.json())
        .then(( data) => { 
            

            console.log('======== Data fetch ========')
            // console.log(data.sprites['back_default'])
            console.log(data)

            // displayData(data)
            loadPokemon(data);

        })
        .catch( error => console.error(error))
        ;
    }
    
    
    async function chargementDatas() {
        
        try { 
            const promiseOne = await fetch_API();
            
        } catch (error) { 
            console.warn(error); 
        }  
        
    }
    
    
    
    
    // --------------------------------------------------
    
    
    
    chargementDatas();
    
function loadPokemon(data){
        
    const sectionPokemon = document.querySelector('.containerCardsPokemon');
    // const imgPokemon =  data.sprites.other.home.front_default;
    // const namePokemon =  data.results[max].name;

 
    console.log( data.results.map( ({name,url}) => ({name, url}) )  );


    data.results.map( ({name, url},id) => (

        id +=1,
        sectionPokemon.innerHTML += `
                <div class="card-pokemon">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png" alt="${name}">
                </div>
            `  
        ) 
    ) 
}


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png