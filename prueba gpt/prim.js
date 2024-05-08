document.getElementById('scroll-izquierda').addEventListener('click', function() {
    document.querySelector('.contenedor').scrollBy({
      left: -100, // Cambia este valor según la cantidad de scroll que deseas
      behavior: 'smooth'
    });
  });
  
  document.getElementById('scroll-derecha').addEventListener('click', function() {
    document.querySelector('.contenedor').scrollBy({
      left: 100, // Cambia este valor según la cantidad de scroll que deseas
      behavior: 'smooth'
    });
  });
  