import { pausa } from "./index.js"
import prompt from "prompt-sync";
const Scannf = prompt();
//CargarTitulo*************************************************************************************************************************
export function CargarTitulo(titulo, f) {
    console.clear();
    do {
        console.log(`[] Ingresa el titulo o solo [Enter] para cancelar.\n`);
        titulo = Scannf(`>`);
        if (titulo == " " || titulo == "  " || titulo == "   ") {
            console.log("Eltitulo no puede estar vacío.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
        if (titulo.length > 100) {
            console.log("El titulo no puede superar los 100 caracteres.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while (titulo == " " || titulo == "  " || titulo == "   " || titulo.lenght > 100);
    if (titulo == "") {
        return `-1`;
    }
    else {
        console.clear();
        return titulo;
    }
}
//Cargar Descripción*******************************************************************************************************************
export function CargarDescripción(descripción, f) {
    console.clear();
    do {
        console.log(`[] Ingresa la descripción o solo [Enter] para cancelar.\n`);
        descripción = Scannf(`>`);
        if (descripción.length > 500) {
            console.log("La descripción no puede superar los 500 caracteres.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while ((descripción.length > 500) && descripción != "");
    if (descripción == "") {
        return `-1`;
    }
    else {
        console.clear();
        return descripción;
    }
}
//CargarEstado*************************************************************************************************************************
export function CargarEstado(estado, f) {
    console.clear();
    do {
        console.log(`[] Ingresa el estado o solo [Enter] para cancelar:\n([P]endiente) / [E]n curso / [T]erminada / [C]ancelada:`);
        estado = Scannf(`>`);
        if(estado == ` ` && f == `1`){
            return ` `;
        }
        if (estado != "P" && estado != "E" && estado != "T" && estado != "C" && estado != "") {
            console.log("Opción invalida, opciónes validas: P, E, T, C.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while (estado != "P" && estado != "E" && estado != "T" && estado != "C" && estado != "");
    if (estado == "") {
        return `-1`;
    }
    else {
        switch (estado) {
            case `P`:
                estado = `Pendiente`;
                break;
            case `E`:
                estado = `En curso`;
                break;
            case `T`:
                estado = `Terminada`;
                break;
            case `C`:
                estado = `Cancelada`;
                break;
        }
        console.clear();
        return estado;
    }
}
//CargarDificultad*************************************************************************************************************************
export function CargarDificultad(dificultad, f) {
    console.clear();
    do {
        console.log(`[] Ingresa la dificultad o solo [Enter] para cancelar:\nDificultad [F]acil / [M]edio / [D]ificil:`);
        dificultad = Scannf(`>`);
        if(dificultad == ` ` && f == `1`){
            return ` `;
        }
        if (dificultad != "F" && dificultad != "M" && dificultad != "D" && dificultad != "") {
            console.log("Opción invalida, opciónes validas: F, M, D.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while (dificultad != "F" && dificultad != "M" && dificultad != "D" && dificultad != "");
    if (dificultad == "") {
        return `-1`;
    }
    else {
        switch (dificultad) {
            case `F`:
                dificultad = "🌑🌑🌑";
                break;
            case `M`:
                dificultad = "🌕🌕🌑";
                break;
            case `D`:
                dificultad = "🌕🌕🌕";
                break;
        }
        console.clear();
        return dificultad;
    }
}
//CargarVencimiento*************************************************************************************************************************
export function CargarVencimiento(vencimiento, f) {
    let año;
    let mes;
    let dia;
    let diasPorMes;
    let bisiesto;
    (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0))
    console.clear();
    //Pedimos el año**************************************************************************
    do {
        console.log(`[] Ingresa el año de vencimiento o solo [Enter] para cancelar:\n`);
        console.log(`[Ejemplo: 2021]`);
        año = Scannf(`>`);
        if(año == ` ` && f == `1`){
            return ` `;
        }
        if ((año.length != 4 || año == NaN) && año != "") {
            console.log("Año ingresado invalido, solo se admiten numeros de 4 digitos sin espacios.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
        else {
            bisiesto = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0));
        }
    } while ((año.length != 4 || parseInt(año) == NaN) && año != "");
    if (año == "") {
        return `-1`;
    }
    diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Ajustar febrero para años bisiestos
    if (bisiesto) {
        diasPorMes[1] = 29;
    }
    //Pedimos el mes**************************************************************************
    do {
        console.log(`[] Ingresa el mes de vencimiento o solo [Enter] para cancelar:\n`);
        console.log(`[Ejemplo: 03]`);
        mes = Scannf(`>`);
        if ((mes < 1 || mes > 12 || isNaN(mes)) && mes != "") {
            console.log("Mes ingresado invalido, solo se admiten numeros del 1 al 12, de dos digitos y sin espacios.\nVuelva a intentarlo.");
            pausa();
            console.clear();
        }
    } while ((mes < 1 || mes > 12 || isNaN(mes)) && mes != "");
    if (mes == "") {
        return `-1`;
    }
    //Pedimos el día**************************************************************************
    do {
        console.log(`[] Ingresa el día de vencimiento o solo [Enter] para cancelar:\n`);
        console.log(`[Ejemplo: 03]`);
        dia = Scannf(`>`);
        if ((dia < 1 || dia > diasPorMes[mes - 1] || isNaN(dia)) && dia != "") {
            console.log(`Dia ingresado invalido, solo se admiten numeros del 1 al ${diasPorMes[mes - 1]}de dos digitos sin espacios.\nVuelva a intentarlo.`);
            pausa();
            console.clear();
        }
    } while ((dia < 1 || dia > diasPorMes[mes - 1] || isNaN(dia)) && dia != "");
    if (dia == "") {
        return `-1`;
    }
    else {
        vencimiento = [dia + `/` + mes + `/` + año];
        console.clear();
        return vencimiento;
    }
}