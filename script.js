let imagenActual = 1;

function abrirLightbox(indice) {
  imagenActual = indice;
  document.getElementById('img-ampliada').src = `images/imagen${imagenActual}.jpg`;
  document.getElementById('lightbox').style.display = "block";
}

function cerrarLightbox() {
  document.getElementById('lightbox').style.display = "none";
}

function navegar(direccion) {
  imagenActual += direccion;
  if (imagenActual < 1) imagenActual = 36;
  if (imagenActual > 36) imagenActual = 1;
  document.getElementById('img-ampliada').src = `images/imagen${imagenActual}.jpg`;
}
