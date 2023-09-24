//Mudar o tamnho da fonte

const link = document.querySelectorAll('a')
const paragrafo = document.querySelectorAll('p')

const aumentarFonte  = document.getElementById('aumentar-fonte')
const diminuirFonte = document.getElementById('diminuir-fonte')

aumentarFonte.onclick = function(){
    changeFontSize(1)
}

diminuirFonte.onclick = function(){
    changeFontSize(-1)
}

function changeFontSize(step){
    var atualFonte = parseFloat(getComputedStyle(document.body).fontSize);
    var newFont = atualFonte + step;
    document.body.style.fontSize = newFont + "px"

    for (const links of link) {
        links.style.fontSize = newFont + "px";
    }

    for(const p of paragrafo){
        p.style.fontSize = newFont + "px"
    }
}

//modo escuro

const container = document.querySelector('#container')
const modoEscuroBtn = document.getElementById('modo-escuro')

modoEscuroBtn.addEventListener('click', ()=>{
    
    container.classList.toggle('escuro')
   
    if(container.classList.contains('escuro')){
        modoEscuroBtn.innerHTML = '<i class="fa-regular fa-sun"></i>'
    }else{
        modoEscuroBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})

//animação do gift

const animatedGif = document.getElementById('animated-gif');
const pauseButton = document.getElementById('pause-button');
let isPaused = false;
let gifScrc = animatedGif.src;

pauseButton.addEventListener('click', ()=>{
    if(isPaused){
        animatedGif.src = gifScrc;
        pauseButton.textContent = "Pause";

    }else{
        gifScrc = animatedGif.src;
        animatedGif.src = "";
        pauseButton.textContent = "Play"
    }
    isPaused = !isPaused;
})