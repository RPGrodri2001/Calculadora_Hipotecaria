
function calcualMortgage(e) {

    e.preventDefault();

    let cuota = document.forms["fmortgage"]["fcuota"].value;
    let costoTotal = document.forms["fmortgage"]["fvalortotal"].value
    let interes = document.forms["fmortgage"]["ftinteres"].value
    let plazoanio = document.forms["fmortgage"]["fplazo"].value
    const MONTHS_ON_YEAR = 12;

    const hipoteca = {      //Variable
       costoTotalInmueble: 0,
        totalPrestamo: 0, //Propiedades
        totalInteres: 0,
        cuotaMensual: 0
    };
    hipoteca.costoTotalInmueble = costoTotal;
    hipoteca.totalPrestamo = costoTotal - cuota;
    hipoteca.totalInteres = hipoteca.totalPrestamo * interes / 100;
    hipoteca.cuotaMensual = (hipoteca.totalPrestamo + hipoteca.totalInteres) / (plazoanio * MONTHS_ON_YEAR);

    outputMortgage(hipoteca);
}

function outputMortgage(finalMortgage) {    //"outputMortage" es un nombre cualquiera q se le agg

    document.getElementById("omontoprestamo").innerHTML = ValorDolar(finalMortgage.totalPrestamo) ;
    document.getElementById("ocuota").innerHTML = ValorDolar(finalMortgage.cuotaMensual);
    var totalPrestamoPorcentaje = 0;
    totalPrestamoPorcentaje = finalMortgage.totalPrestamo * 100 / finalMortgage.costoTotalInmueble;
    alert(totalPrestamoPorcentaje);
    //<output class="form-control" id="omontoprestamo">0</output>
    if(totalPrestamoPorcentaje > 90){
        document.getElementById("omontoprestamo").className += " alertaPorcentaje"; //se cambie atributo de color rojo
    }else{
        document.getElementById("omontoprestamo").className = "form-control"; //Regresa a su color normal
    }
}

function resetearform() {   //Funcion que va al boton de resetear para realizar una nueva operacion para calcular
    document.forms["fmortgage"].reset(); //Se reinicia todo, o se limpia
}

function ValorDolar(value){
    const dollarformatter = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2});
    return dollarformatter.format(value);
}


