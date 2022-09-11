function Converter() {
  var valorEmDolar = parseFloat(document.getElementById("valor").value);
  var moeda = document.querySelector('input[name="escolhaMoeda"]:checked')
    .value;

  if (moeda == "Real") {
    dolarParaReal(valorEmDolar);
  } else if (moeda == "Euro") {
    dolarParaEuro(valorEmDolar);
  } else if (moeda == "Iene") {
    dolarParaIene(valorEmDolar);
  } else {
    dolarParaBitcoin(valorEmDolar);
  }
}

function dolarParaReal(valorEmDolar) {
  var valorEmReal = valorEmDolar * 5.15;
  var elementoResultado = document.getElementById("valorConvertido");
  elementoResultado.innerHTML = "O resultado é R$" + valorEmReal;
}

function dolarParaEuro(valorEmDolar) {
  var valorEmEuro = valorEmDolar * 0.98;
  var elementoResultado = document.getElementById("valorConvertido");
  elementoResultado.innerHTML = "O resultado é €" + valorEmEuro;
}

function dolarParaIene(valorEmDolar) {
  var valorEmIene = valorEmDolar * 142.5;
  var elementoResultado = document.getElementById("valorConvertido");
  elementoResultado.innerHTML = "O resultado é ¥" + valorEmIene;
}

function dolarParaBitcoin(valorEmDolar) {
  var valorEmBitcoin = valorEmDolar * 0.000046;
  var elementoResultado = document.getElementById("valorConvertido");
  elementoResultado.innerHTML = "O resultado é ₿" + valorEmBitcoin;
}