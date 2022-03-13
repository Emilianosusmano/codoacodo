/* Valido formulario y seteo resultado del area del circulo */
document
  .getElementById("formulario-circulo")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var radio = document.getElementById("radio").value;
    var resultadoCirculo = document.getElementById("resultado-circulo");

    if (isNaN(parseInt(radio))) {
      resultadoCirculo.innerHTML = "<div class='alert alert-danger' role='alert'>Por favor, ingrese un valor valido entre 0 y 100</div>";
    } else if (radio < 0) {
      resultadoCirculo.innerHTML = "<div class='alert alert-danger' role='alert'>El valor es nagativo. Por favor, elija un numero mayor o igual a 0</div>";
    } else if (radio > 100) {
      resultadoCirculo.innerHTML = "<div class='alert alert-danger' role='alert'>El rango supera la capacidad del calculo. Por favor, elija un numero menor o igual 100</div>";
    } else {
      var textoAMostrarCirculo = "El area calculada del circulo es: " + Math.PI * Math.pow(radio, 2);
      resultadoCirculo.innerHTML = "<div class='alert alert-success' role='alert'>" + textoAMostrarCirculo + " </div>";
      actualizarCondator();
    }
  });

  /* Valido formulario y seteo resultado del area del rectangulo */
  document
  .getElementById("formulario-rectangulo")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var resultadoRectangulo = document.getElementById("resultado-rectangulo");

    if (isNaN(parseInt(base)) || isNaN(parseInt(altura))) {
      resultadoRectangulo.innerHTML = "<div class='alert alert-danger' role='alert'>Por favor, ingrese un valores validos entre 0 y 100</div>";
    } else if (base < 0 || altura < 0) {
      resultadoRectangulo.innerHTML = "<div class='alert alert-danger' role='alert'>El valor es nagativo. Por favor, elija un numero mayor o igual a 0</div>";
    } else if (base > 100 || altura > 100) {
      resultadoRectangulo.innerHTML = "<div class='alert alert-danger' role='alert'>El rango supera la capacidad del calculo. Por favor, elija un numero menor o igual 100</div>";
    } else {
      var textoAMostrar = "El area calculada del rectangulo es: " + base * altura;
      resultadoRectangulo.innerHTML = "<div class='alert alert-success' role='alert'>" + textoAMostrar + " </div>";
      actualizarCondator();
    }
  });

  /* Actualizo el contador de ejecuciones */
  function actualizarCondator() {
    document.getElementById("seccion-contador").innerHTML++;
  }