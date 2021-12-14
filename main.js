'use strict'

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-btn');
const player = document.querySelector('.js-player');
const pc = document.querySelector('.js-pc');
const response = document.querySelector('.js-response');
const button2 = document.querySelector('.js-btn2');


//funcion para obtener el numero aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const randomNumber = getRandomNumber(10);



//funcion que tiene la jugada del ordernador

function pcPlay(randomNumber){
    
    if(randomNumber <= 3){
        console.log('Ordenador: Piedra')
    }else if (randomNumber <= 6){
        console.log('Ordenador: Papel')
    } else if (randomNumber <= 10){
        console.log('Ordenador: Tijera')
    }

}





//Eleccion del jugador

function playerPlay(){
    
    const userOption = select.value;
    
    if(userOption === 'piedra'){
        
        console.log('Player: Piedra')
    }else if(userOption === 'papel'){
        console.log('Player: Papel')

    }else {
        console.log('Player: Tijera')
    }
}

// button.addEventListener ('click', playerPlay);



//contadores


let tries = 0;

function counterPlayer (){
    tries += 1;
    player.innerHTML = ` Jugador: ${tries} `;

    
   
}


let triesPc = 0;

function counterPc (){
    triesPc += 1;
    pc.innerHTML = ` Computadora: ${triesPc} `;

   
}



function game (){
    const randomNumber = getRandomNumber(10);

    console.log(randomNumber);

    pcPlay(randomNumber);

    const userOption = select.value;
  
  

    if ( userOption === 'piedra' && randomNumber <= 3){         response.innerHTML = 'Empate.';    

    } else if (userOption === 'papel' && randomNumber <= 3 ){
        response.innerHTML = '¡Has Ganado!'; 
        counterPlayer();

    } else if (userOption === 'tijera' && randomNumber <= 3 ){
        response.innerHTML = '¡Has Perdido!'
        counterPc ();

    } else if(userOption === 'piedra' && randomNumber <= 6){
        response.innerHTML = '¡Has Perdido!'
        counterPc ();

    } else if(userOption === 'papel' && randomNumber <= 6){
        response.innerHTML = 'Empate.'; 

    } else if(userOption === 'tijera' && randomNumber <= 6){
        response.innerHTML = '¡Has Ganado!';
        counterPlayer(); 

    } else if(userOption === 'piedra' && randomNumber <= 10){
        response.innerHTML = '¡Has Ganado!';
        counterPlayer(); 

    } else if(userOption === 'papel' && randomNumber <= 10){
        response.innerHTML = '¡Has Perdido!'
        counterPc ();

    } else if(userOption === 'tijera' && randomNumber <= 10){
        response.innerHTML = 'Empate.'; 
    }


}


// button.addEventListener ('click', game);




//funcion BONUS del boton


function buttonRestart (){
 
    button2.classList.add('hidden');
    pc.innerHTML = ` Computadora: 0 `
    player.innerHTML = ` Jugador: 0`;
    
}

button2.addEventListener('click', buttonRestart)

//funcion recogedora


function handleClickUpdate(event){
  event.preventDefault();
    pcPlay();
    getRandomNumber();
    playerPlay();
    game();
    buttonBonus();
    
    
 }

 button.addEventListener ('click', handleClickUpdate);




