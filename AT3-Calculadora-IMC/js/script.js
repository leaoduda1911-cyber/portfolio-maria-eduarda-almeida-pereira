function calcularIMC() {
  const pesoInput = document.getElementById('peso');
  const alturaInput = document.getElementById('altura');
  const resultadoDiv = document.getElementById('resultado');

  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  resultadoDiv.className = '';

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultadoDiv.classList.add('visible', 'erro');
    resultadoDiv.innerHTML = 'Por favor, informe valores válidos de peso e altura.';
    return;
  }

  const imc = peso / (altura * altura);
  const imcFormatado = imc.toFixed(2).replace('.', ',');

  let categoria = '';
  let classe = '';

  if (imc < 18.5) {
    categoria = 'Baixo peso';
    classe = 'baixo-peso';
  } else if (imc < 25) {
    categoria = 'Peso normal';
    classe = 'normal';
  } else if (imc < 30) {
    categoria = 'Sobrepeso';
    classe = 'sobrepeso';
  } else if (imc < 35) {
    categoria = 'Obesidade grau I';
    classe = 'obesidade-1';
  } else if (imc < 40) {
    categoria = 'Obesidade grau II';
    classe = 'obesidade-2';
  } else {
    categoria = 'Obesidade grau III (mórbida)';
    classe = 'obesidade-3';
  }

  resultadoDiv.classList.add('visible', classe);
  resultadoDiv.innerHTML = `
    <span class="valor">${imcFormatado} kg/m²</span>
    <span class="categoria">${categoria}</span>
  `;
}