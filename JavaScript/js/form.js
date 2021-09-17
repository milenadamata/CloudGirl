var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    if(erro.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
        return;
    }

    // adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(paciente.nome,"info-nome");
    pacienteTr.appendChild(paciente.peso,"info-peso");
    pacienteTr.appendChild(paciente.altura,"info-altura");
    pacienteTr.appendChild(paciente.gordura,"info-gordura");
    pacienteTr.appendChild(paciente.imc,"info-imc");

    return pacienteTr;
}


function montaTd (dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}


function validaPaciente (paciente){

    var erros = [];

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

    return erros;
}