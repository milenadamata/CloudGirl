var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input",function(){
   var conteudo = campo.val();

   var qtPalavras = conteudo.split(/\S+/).length-1;
   $("#contador-palavras").text(qtPalavras);

   var qtCaracteres = conteudo.length;
   $("#contador-caracteres").text(qtCaracteres);
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function(){
    var cronometroID = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }
    },1000);
});