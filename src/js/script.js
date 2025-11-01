//FUNÇÃO TROCAR
function trocar(cor){
  document.body.style.background=cor;  
}

//FUNÇÃO SLIDESHOW

// DECLARANDO UM ARRAY DE IMAGENS

let imagens=[
    "src/assets/garro1.jpg",
];

//DECLARANDO AS VARIAVEIS

let i=0;
let tempo =5000; // milisegundos

//função 

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout(slideShow,tempo)
}
slideShow();