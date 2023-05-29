// Obtén una referencia al elemento de las estrellas
var estrellasElement = document.querySelector('.estrellas');

// Genera las estrellas
for (var i = 0; i < 50; i++) {
  var estrella = document.createElement('span');
  estrella.classList.add('estrella');
  estrella.style.left = Math.random() * 100 + '%';
  estrella.style.animationDelay = Math.random() * 5 + 's';
  estrellasElement.appendChild(estrella);
}


document.getElementById("comentarios-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById("nombre-input").value;
    var comentario = document.getElementById("comentario-input").value;
  
    var nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");
    nuevoComentario.innerHTML = "<p><strong>" + nombre + ":</strong> " + comentario + "</p>";
  
    var comentariosList = document.getElementById("comentarios-list");
    comentariosList.appendChild(nuevoComentario);
  
    document.getElementById("nombre-input").value = "";
    document.getElementById("comentario-input").value = "";
  });

  