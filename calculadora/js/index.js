// variables
const resultado = document.querySelector('#resultado');
const reset = document.querySelector('#reset');
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const multiplicacion = document.querySelector('#multiplicacion');
const division = document.querySelector('#division');
const igual = document.querySelector('#igual');
const punto = document.querySelector("#punto");
const porcentaje = document.querySelector("#porcentaje");
const numeros = document.querySelectorAll(".numero");
let operacion1;
let operacion2;
let operacion;

// Evento para mostrar los numeros
numeros.forEach( numero => {
    numero.addEventListener( 'click', ( e )=>{
        resultado.textContent += e.target.textContent;
    })
});

// Eventos de operación
reset.onclick =()=> resetear();

punto.onclick =()=> resultado.textContent += ".";

suma.onclick =()=>{ operacion1 = resultado.textContent;  
    operacion = "+";  limpiar() }

resta.onclick =()=>{ operacion1 = resultado.textContent;
    operacion = "-";  limpiar() }

multiplicacion.onclick =()=>{ operacion1 = resultado.textContent;
    operacion = "*";  limpiar() 
}

division.onclick =()=>{ operacion1 = resultado.textContent;
    operacion = "/";  limpiar() 
}

porcentaje.onclick =()=>{ operacion1 = resultado.textContent;
    operacion = "%";  resolverOperacion() 
}

igual.onclick =()=>{ operacion2 = resultado.textContent;
    resolverOperacion() 
}

// Resolver la operación
function resolverOperacion(){
    let respuesta = 0;

    switch( operacion ){
        case "+": respuesta = parseFloat( operacion1 ) + parseFloat( operacion2 );
            break;
        case "-": respuesta = parseFloat( operacion1 ) - parseFloat( operacion2 );
            break;
        case "*": respuesta = parseFloat( operacion1 ) * parseFloat( operacion2 );
            break;
        case "/": respuesta = parseFloat( operacion1 ) / parseFloat( operacion2 );
            break;
        case "%": respuesta = resultado.textContent / 100;
            break;  
    }

    resetear();
    // Limite de caracteres numericos
    if( respuesta.toString().length > 13 ){
        resultado.textContent = respuesta.toFixed( 13 );
        resultado.style.fontSize = "30px";
    }
    else{
        resultado.textContent = respuesta;
        resultado.style.fontSize = "40px";
    }
}

// Funciones de limpieza
function limpiar(){ resultado.textContent = "" }

function resetear(){
    resultado.textContent = "";
    operacion1 = 0;
    operacion2 = 0;
    operacion = "";
    resultado.style.fontSize = "40px";
}