/*
 * Função AJAX base do tipo assíncrona
 * 'params' é o id do usuário enviado apenas, quando necessário.
 * [Importante!] Você não pode alterar a função xhttpAssincrono.
 */
function xhttpAssincrono(callBackFunction, params) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          // Chama a função em callback e passa a resposta da requisição
          callBackFunction(this.responseText);
      }
    };
    // Path completo para a requisição AJAX.
    var url = "http://jsonplaceholder.typicode.com/users/";
    if(!isNaN(params)){
        url = url + params +"/todos";
    }
    // Requisição do tipo POST
    xhttp.open("GET", url, true);
    // Definindo o tipo de cabeçalho da requisição.
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}


var x  = document.createElement("SELECT");
x.setAttribute("id", "list");
document.body.appendChild(x);

var y = document.createElement("option");
y.setAttribute("value", "person");
var t = document.createTextNode("João");
y.appendChild(t);

