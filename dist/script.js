function buscaCEP(){
  var cep = document.getElementById("cep").value;
  var output = document.getElementById("output");
  
  $.getJSON("https://viacep.com.br/ws/"+document.getElementById("cep").value+"/json/", function(result){
    if(!result.erro){
      output.innerHTML = '<li class="w3-deep-purple">Resultados do CEP: <b>'+ cep +'</b></li><li><b>Cidade:</b> '+ result.localidade +'</li>\n<li><b>Estado:</b> '+ result.uf +'</li>\n<li><b>DDD:</b> '+result.ddd+'</li>\n<li><b>Logradouro:</b> '+ result.logradouro +'</li><li><b>Bairro:</b> '+ result.bairro +'</li>';
    }else{
      output.innerHTML = '<li class="w3-red">CEP inválido.</li>';
      setTimeout(function(){
        output.innerHTML = "<li>Faça uma busca.</li>";
      }, 3000);
    }
  });
}

$("#cep").inputmask({
  mask: "99999-999"
});