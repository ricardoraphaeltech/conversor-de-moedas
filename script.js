/*
    Converter Dólar para Real

    [ ] Saber quando o botão foi clicado
    [ ] Pegar o valor digitado pelo usuário
    [ ] Conversão do Valor
    [ ] Colocar o valor convertido na tela

    document = HTML
    getElementById = pegar alguma coisa procurando pelo ID


*/

function converter(){
    let resultado = document.getElementById("resultado")
    let valorEmDolar = document.getElementById("valor").value
    let dolarDoDia = 6

    let valorReal = valorEmDolar * dolarDoDia

    resultado.innerHTML = `R$ ${valorReal}`
}