//Ouvinte de evento para "Achar"
document.getElementById("encontrar").addEventListener("click", function(){
    const inputNum = document.getElementById("inputNum").value;
    const inputSeparador = document.getElementById("inputSeparador").value;

    //converter os numeros para um vetor/array
    const arrayNum = inputNum.split(inputSeparador).map(Number);
    //verificando os numeros
    if(arrayNum.length > 0){
        const maxNum = Math.max(...arrayNum);
        const minNum = Math.min(...arrayNum);
        //exibindo o resulado
        document.getElementById("resultado").innerHTML = `Menor número: ${minNum}, Maior número: ${maxNum}`;
    }
    else{
        document.getElementById("resultado").innerHTML = "Por favor, Informe números válidos.";
    }
});