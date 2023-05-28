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
  