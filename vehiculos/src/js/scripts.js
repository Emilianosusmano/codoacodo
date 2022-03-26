class Vehiculo {
  constructor(
    cantRuedas,
    cantPuertas,
    tipoCarroceria,
    modelo,
    marcaDestino,
    costoFabricacion
  ) {
    this.cantRuedas = cantRuedas;
    this.cantPuertas = cantPuertas;
    this.tipoCarroceria = tipoCarroceria;
    this.modelo = modelo;
    this.marcaDestino = marcaDestino;
    this.costoFabricacion = costoFabricacion;
    this.acondicionado = false;
  }

  set setVehiculoAcondicionado(acondicionado) {
    this.acondicionado = acondicionado;
  }

  get getVehiculoAcondicionado() {
    return this.acondicionado;
  }

  encenderMotor() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} ha encendido el motor.`;
  }

  apagarMotor() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} ha apagado el motor.`;
  }

  moverse() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} se ha movido.`;
  }

  frenar() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} ha frenado.`;
  }

  cambiarVelocidad() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} ha cambiado su velocidad de 0 a 50.`;
  }

  prenderLuces() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} ha prendido sus luces.`;
  }

  apagarLuces() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} ha apagado sus luces.`;
  }

  tocarBocinaCorrectamente() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} ha tocado bocina correctamente.`;
  }

  tocarBocinaIncorrectamente() {
    return `El vehiculo ${this.marcaDestino} - ${this.modelo} ha tocado bocina incorrectamente.`;
  }

  mostrarInfo() {
    return `
      <h5><strong>Vehiculo</strong></h5>
      <ul>
        <li>Marca: <strong>${this.marcaDestino}</strong></li>
        <li>Modelo: <strong>${this.modelo}</strong></li>
        <li>Cantidad de ruedas: <strong>${this.cantRuedas}</strong></li>
        <li>Cantidad de puertas: <strong>${this.cantPuertas}</strong></li>
        <li>Tipo de carroceria: <strong>${this.tipoCarroceria}</strong></li>
        <li>Costo de fabricacion: <strong>$${this.costoFabricacion}</strong></li>
      </ul>
    `;
  }
}

class VechiculoAltaGama extends Vehiculo {
  constructor(
    cantRuedas,
    cantPuertas,
    tipoCarroceria,
    modelo,
    marcaDestino,
    costoFabricacion,
    techoCorredizo,
    asientosCuero
  ) {
    super(
      cantRuedas,
      cantPuertas,
      tipoCarroceria,
      modelo,
      marcaDestino,
      costoFabricacion
    );
    this.techoCorredizo = techoCorredizo;
    this.asientosCuero = asientosCuero;
  }

  mostrarInfo() {
    return `
      <h5><strong>Vehiculo Alta Gama</strong></h5>
      <ul>
        <li>Marca: <strong>${this.marcaDestino}</strong></li>
        <li>Modelo: <strong>${this.modelo}</strong></li>
        <li>Cantidad de ruedas: <strong>${this.cantRuedas}</strong></li>
        <li>Cantidad de puertas: <strong>${this.cantPuertas}</strong></li>
        <li>Tipo de carroceria: <strong>${this.tipoCarroceria}</strong></li>
        <li>Costo de fabricacion: <strong>$${this.costoFabricacion}</strong></li>
        <li>Techo corredizo: <strong>${this.techoCorredizo}</strong></li>
        <li>Asientos de cuero reforzado: <strong>${this.asientosCuero}</strong></li>
      </ul>
    `;
  }
}

var listadoVehiculos = [];
if (listadoVehiculos.length === 0) {
  document.getElementById("boton-listar-vehiculos").style.display = "none";
  document.getElementById("seccion-listado").style.display = "none";
} else {
  listarVehiculos();
}

function listarVehiculos() {
  var seccionListado = document.getElementById("seccion-listado");
  document.getElementById("seccion-crear").style.display = "none";
  document.getElementById("presupuesto").innerHTML = "";
  seccionListado.style.display = "";
  seccionListado.innerHTML = listadoVehiculos
    .map(
      (vehiculo, index) =>
        `<div class="card-vehiculo">
        ${vehiculo.mostrarInfo()}
        <div id="testing${index}">
        ${
          vehiculo.getVehiculoAcondicionado
            ? `<span style="color: green;"><strong>Vehiculo Acondicionado</strong></span>`
            : `<button type="button" class="btn btn-outline-danger" onclick="realizarTesteo(${index})">Realizar Tests</button>`
        }
  </div></div>`
    )
    .join("");
}

function crearVehiculo() {
  document.getElementById("seccion-listado").style.display = "none";
  document.getElementById("seccion-crear").style.display = "";
  document.getElementById("presupuesto").innerHTML = "";
}

function realizarTesteo(testIndex) {
  var vehiculo = listadoVehiculos[testIndex];
  document.getElementById(
    "testing" + testIndex
  ).innerHTML = `<div id="botoneraTesting${testIndex}" class="row botoneraTesting">
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.encenderMotor()}', ${testIndex}, this)">Encender Motor</button>
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.apagarMotor()}', ${testIndex}, this)">Apagar Motor</button>
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.moverse()}', ${testIndex}, this)">Moverse</button>
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.frenar()}', ${testIndex}, this)">Frenar</button>
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.cambiarVelocidad()}', ${testIndex}, this)">Cambiar velocidad</button>
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.prenderLuces()}', ${testIndex}, this)">Prender luces</button>
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.apagarLuces()}', ${testIndex}, this)">Apagar luces</button>
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.tocarBocinaCorrectamente()}', ${testIndex}, this)">Bocina correctamente</button>
  <button type="button" class="btn btn-outline-dark col-md-4 btn-test" onclick="testearComponente('${vehiculo.tocarBocinaIncorrectamente()}', ${testIndex}, this)">Bocina incorrectamente</button>
  </div>
  <div id="resultadoTesting${testIndex}"></div>`;
}

function testearComponente(textoAMostrar, testIndex, boton) {
  document.getElementById("resultadoTesting" + testIndex).innerHTML =
    textoAMostrar;
  boton.disabled = true;
  var botoneraTesting = document.getElementById("botoneraTesting" + testIndex);
  for (let node of botoneraTesting.childNodes) {
    if (node.nodeName === "BUTTON" && !node.disabled) {
      return;
    }
  }
  listadoVehiculos[testIndex].setVehiculoAcondicionado = true;
  botoneraTesting.style.display = "none";
  document.getElementById("resultadoTesting" + testIndex).innerHTML =
    "<div class='alert alert-success' role='alert'>El vehiculo esta acondicionado.</div>";
}

document
  .getElementById("form-vehiculo")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var cantRuedas = document.getElementById("selected-option-ruedas").value;
    var cantPuertas = document.getElementById("selected-option-puertas").value;
    var tipoCarroceria = document.getElementById(
      "selected-option-carroceria"
    ).value;
    var modelo = document.getElementById("selected-option-modelo").value;
    var marcaDestino = document.getElementById("selected-option-marca").value;
    var altaGama = document.getElementById("checkbox-altagama").checked;

    var presupuesto = document.getElementById("presupuesto");

    if (
      cantRuedas === "" ||
      tipoCarroceria === "" ||
      cantPuertas === "" ||
      modelo === "" ||
      marcaDestino === ""
    ) {
      presupuesto.innerHTML =
        "<div class='alert alert-danger' role='alert'>Por favor, completar todos los datos.</div>";
    } else if (modelo === "Moto" && altaGama) {
      presupuesto.innerHTML =
        "<div class='alert alert-warning' role='alert'>La motos no pueden ser de alta gama, corrija la seleccion realizada.</div>";
    } else if (modelo === "Moto" && cantPuertas !== "0") {
      presupuesto.innerHTML =
        "<div class='alert alert-warning' role='alert'>La motos no tienen puertas, corrija la seleccion realizada.</div>";
    } else if (modelo !== "Moto" && cantPuertas === "0") {
      presupuesto.innerHTML =
        "<div class='alert alert-warning' role='alert'>Los autos y camionetas deben tener al menos una puerta, corrija la seleccion realizada.</div>";
    } else {
      presupuesto.innerHTML = `<div>
        <div class='alert alert-success' role='alert'>El presupuesto es de $${calcularCostoFabricacion(
          tipoCarroceria,
          altaGama
        )}.</div>
        <button type="button" class="btn btn-success" onclick="agregarVehiculoAListado()">Agregar vehiculo</button>
        </div>`;
    }
  });

function agregarVehiculoAListado() {
  var cantRuedas = document.getElementById("selected-option-ruedas").value;
  var cantPuertas = document.getElementById("selected-option-puertas").value;
  var tipoCarroceria = document.getElementById(
    "selected-option-carroceria"
  ).value;
  var modelo = document.getElementById("selected-option-modelo").value;
  var marcaDestino = document.getElementById("selected-option-marca").value;
  var altaGama = document.getElementById("checkbox-altagama").checked;
  var costoFabricacion = calcularCostoFabricacion(tipoCarroceria, altaGama);

  var vehiculo = !altaGama
    ? new Vehiculo(
        cantRuedas,
        cantPuertas,
        tipoCarroceria,
        modelo,
        marcaDestino,
        costoFabricacion
      )
    : new VechiculoAltaGama(
        cantRuedas,
        cantPuertas,
        tipoCarroceria,
        modelo,
        marcaDestino,
        costoFabricacion,
        "Si",
        "Si"
      );

  listadoVehiculos.push(vehiculo);
  document.getElementById("form-vehiculo").reset();
  document.getElementById("boton-listar-vehiculos").style.display = "";
  document.getElementById("presupuesto").innerHTML = "";
}

function calcularCostoFabricacion(tipoCarroceria, altaGama) {
  var costoBase = 50000;
  var costoTotal = 0;
  if (tipoCarroceria === "Chica") {
    costoTotal = costoBase * 2 + 5000;
  } else if (tipoCarroceria === "Mediana") {
    costoTotal = costoBase * costoBase + 85000;
  } else {
    costoTotal = (costoBase * costoBase + 85000) * 5 + 180000;
  }
  if (altaGama) {
    costoTotal = (costoBase * costoBase + 85000) * 5 + 250000;
  }
  return costoTotal;
}
