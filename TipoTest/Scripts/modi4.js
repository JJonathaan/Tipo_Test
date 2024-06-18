


function comprobarRespuestas() {
  const preguntas = ['q1','q2','q3','q4','q5'];
  const repuestasCorrectas = ['c','c','b','c','b'];
  const textoRespuestas = ['París','Pacífico','Mercurio','África','Aluminio'];

  let score = 0;

  const form = document.getElementById('testForm');
  const resultDiv = document.getElementById('result');
  const incorrectDiv = document.getElementById('respuestasIncorrectas');
  
  incorrectDiv.innerHTML = '';

for (let i =0; i < preguntas.length; i++){
  let pregunta = preguntas[i];
  let opcionSeleccionada = form.elements[pregunta].value;
  let preguntaContainer = document.getElementById(pregunta+ '-container');

if (opcionSeleccionada === repuestasCorrectas[i]){;
  score++;
  preguntaContainer.classList.remove('incorrect')
}else {
  let numeroPregunta = i + 1;
  let repuestasCorrectas = textoRespuestas[i]; 

 incorrectDiv.innerHTML += '<p> Pregunta' + numeroPregunta +'incorrecta la respuesta correcta es:' +repuestasCorrectas +'</p>'
  preguntaContainer.classList.add ('incorrect');
  
}
}
resultDiv.textContent = 'Has acertado'+ score+ 'de 5 preguntas';
}

 