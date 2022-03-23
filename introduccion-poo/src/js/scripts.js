class ListaNumeros {
  constructor(numeros) {
    this.numeros = numeros;
  }

  get obtenerNumeros() {
    return this.numeros;
  }

  set insertarNumeros(numero) {
    this.numeros.push(numero);
  }

  get reiniciarNumeros() {
    this.numeros = [];
  }

  get calcularMaximo() {
    let max_num = Number.NEGATIVE_INFINITY;
    for (let num of this.numeros) {
      if (num > max_num) {
        max_num = num;
      }
    }
    return max_num;
  }
}

var numeros = new ListaNumeros([]);

document
  .getElementById("botonNumerosIngresados")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("numerosIngresados").innerHTML = "";
    var listaNumeros = numeros.obtenerNumeros;
    if (listaNumeros.length === 1) {
      document.getElementById("numerosIngresados").innerHTML = listaNumeros[0];
    } else {
      for (let num of listaNumeros) {
        document.getElementById("numerosIngresados").innerHTML += num + ", ";
      }
    }
  });

function insertarNumero() {
  document.getElementById("resultado").innerHTML = "";
  var num = document.getElementById("inputNumber").value;
  if (num === "") {
    var resultado = document.getElementById("resultado");
  resultado.innerHTML =
    "<div class='alert alert-danger' role='alert'>Ingrese un número.</div>";
  } else {
    numeros.insertarNumeros = num;
  }
}

function calcularMaximo() {
  var resultado = document.getElementById("resultado");
  if(numeros.obtenerNumeros.length < 1) {
    resultado.innerHTML =
    "<div class='alert alert-danger' role='alert'>Debe ingresar por los menos un número.</div>";
  } else {
    var maximo = numeros.calcularMaximo;
  resultado.innerHTML =
    "<div class='alert alert-success' role='alert'>" + maximo + " </div>";
  }
}

function reiniciar() {
  numeros.reiniciarNumeros;
  document.getElementById("numerosIngresados").innerHTML = "";
  document.getElementById("inputNumber").value = "";
  document.getElementById("resultado").innerHTML = "";
}
