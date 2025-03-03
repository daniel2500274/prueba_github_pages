const contenido = document.getElementById('contenido');
const ventasBtn = document.getElementById('ventas');
const divisasBtn = document.getElementById('divisas');
const interesesBtn = document.getElementById('intereses');

let cambioDolar = 7.80; // Tipo de cambio inicial
let cambioEuro = 8.50;

ventasBtn.addEventListener('click', mostrarRegistroVentas);
divisasBtn.addEventListener('click', mostrarConversionDivisas);
interesesBtn.addEventListener('click', mostrarCalculoIntereses);

function mostrarRegistroVentas() {
    contenido.innerHTML = `
        <h2>Registro de Ventas</h2>
        <input type="number" id="precio" placeholder="Precio del producto">
        <input type="number" id="cantidad" placeholder="Cantidad">
        <button id="calcularVenta">Calcular Total</button>
        <p id="resultadoVenta"></p>
    `;

    document.getElementById('calcularVenta').addEventListener('click', calcularTotalVenta);
}

function calcularTotalVenta() {
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const total = precio * cantidad;
    document.getElementById('resultadoVenta').textContent = `Total: Q${total.toFixed(2)}`;
}

function mostrarConversionDivisas() {
    contenido.innerHTML = `
        <h2>Conversión de Divisas</h2>
        <select id="monedaInicial">
            <option value="USD">Dólares</option>
            <option value="EUR">Euros</option>
        </select>
        <input type="number" id="monto" placeholder="Monto a convertir">
        <button id="convertir">Convertir</button>
        <p id="resultadoConversion"></p>
    `;

    document.getElementById('convertir').addEventListener('click', realizarConversion);
}

function realizarConversion() {
    const moneda = document.getElementById('monedaInicial').value;
    const monto = parseFloat(document.getElementById('monto').value);
    let resultado;

    if (moneda === 'USD') {
        resultado = monto * cambioDolar;
    } else if (moneda === 'EUR') {
        resultado = monto * cambioEuro;
    }

    document.getElementById('resultadoConversion').textContent = `Resultado: Q${resultado.toFixed(2)}`;
}

function mostrarCalculoIntereses() {
    contenido.innerHTML = `
        <h2>Cálculo de Intereses</h2>
        <input type="number" id="stands" placeholder="Cantidad de stands">
        <input type="number" id="diasRetraso" placeholder="Días de retraso">
        <button id="calcularInteres">Calcular Monto</button>
        <p id="resultadoInteres"></p>
    `;

    document.getElementById('calcularInteres').addEventListener('click', calcularMontoInteres);
}

function calcularMontoInteres() {
    const stands = parseInt(document.getElementById('stands').value);
    const diasRetraso = parseInt(document.getElementById('diasRetraso').value);
    let monto = stands * 300;

    if (diasRetraso > 2) {
        for (let i = 3; i <= diasRetraso; i++) {
            monto *= 1.02; // Incremento del 2% diario
        }
    }

    document.getElementById('resultadoInteres').textContent = `Monto a pagar: Q${monto.toFixed(2)}`;
}