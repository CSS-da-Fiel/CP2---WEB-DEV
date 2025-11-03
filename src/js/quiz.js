alert("Saibam mais sobre o Quiz")


const perguntas= [
 {
    pergunta:"Pergunta numero 1.Em que ano o Sport Club Corinthians Paulista foi fundado?\n Opcao A) 1908\n Opcao B) 1910\n Opcao C) 1912\n",
    resposta:"B"
 },
 {
    pergunta:"Pergunta numero 2.Qual é o apelido mais conhecido do Corinthians?\n Opcao A) Tricolor\n Opcao B) Alvinegro\n Opcao C) Timão\n",
    resposta:"C"
 },
 {
    pergunta:"Pergunta numero 3.Em qual cidade o Corinthians foi fundado?\n Opcao A) São Paulo\n Opcao B) Santos\n Opcao C) Campinas\n",
    resposta:"A"
 },

];

//declarando a variavel de acertos que recebe 0
let acertos = 0;

// criar um laço de repetição para verificar as perguntas

for(let i=0; i<perguntas.length;i++){
    const respostaUsuario=prompt(perguntas[i].pergunta);

    //verifica se o que o usuario digitou for minusculo e se não for converte para ser
    if(respostaUsuario.toLowerCase() === perguntas[i].resposta.toLocaleLowerCase()){
        acertos++;
    }
}
document.getElementById("msg").innerHTML=(`Você acertou ${acertos} de ${perguntas.length} perguntas, agora você já sabe um pouco mais sobre o Corinthians!`);