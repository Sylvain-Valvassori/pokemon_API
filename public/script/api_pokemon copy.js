const API_URL = 'https://pokeapi.co/api/v2/pokemon/'; 
let POKEMON = 151;

const search_btn = document.querySelector('.searchForm > svg');
// --------------------------------------------------

function fetch_API(pokemon_choised) { 
   
        
    fetch(API_URL + pokemon_choised)
        .then( response => response.json())
        .then(( data) => { 
            

            console.log('======== Data fetch ========')
            // console.log(data.sprites['back_default'])
            console.log(data)

            displayData(data)
        })
        .catch( error => console.error(error))
    ;
}


async function chargementDatas(pokemon_choised) {

    try { 
        const promiseOne = await fetch_API(pokemon_choised);

    } catch (error) { 
        console.warn(error); 
    }  

}


function displayData(data) {

    const cardPokemon = document.getElementsByClassName('card-pokemon');

    // const pokemon_name = cardPokemon[0].children[0];
    const pokemon_img  = cardPokemon[0].children[0];
    
    // pokemon_name.innerHTML = data.name;
    pokemon_img.src = data.sprites['front_default'];
    pokemon_img.src = data.sprites.other.home.front_default




   
}


function searchPokemon(){

    const  input_value =  document.getElementsByTagName('input')[0].value.toLocaleLowerCase();
    chargementDatas(input_value);
}

// --------------------------------------------------



chargementDatas(POKEMON);
loadPokemon();

search_btn.addEventListener('click', () => {
    searchPokemon();
});




const sectionPokemon = document.querySelector('.pokemon');

const loadPokemon = (data) => {

    const imgPokemon =  data.sprites.other.home.front_default;


    for(nbrPokemon = 0; nbrPokemon <= 10; nbrPokemon++){

        sectionPokemon.innerHTML = `
            <div class="card-pokemon">
                <img src="${imgPokemon}" alt="">
            </div>
        `;
    
    }
    

}