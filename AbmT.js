import * as controles from "./controles.js";
import prompt from "prompt-sync";
import { pausa } from "./index.js"
import chalk from "./node_modules/chalk/source/index.js"
const Scannf = prompt();
export function AgregarTarea(f, tareaM) {// Con esta función cargamos una nueva tarea cuando el parametro f(Función) está en 0, y cuando no, la función actua como editor de tarea. el parametro tareaM solo sirve cuando editamos una tarea.
    console.clear();
    let op = `1`;
    let fechaHoy = new Date();
    let fechaActual = fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    let titulo = "----------";
    let estado = "Pendiente";
    let descripción = "----------";
    let vencimiento = "----------";
    let dificultad = "🌑🌑🌑";
    let ultimaEd = fechaActual;
    let creación = fechaActual;
    let Auxtarea;
    let tTituloVacio = true;
    let aux;
    if (f == `0`) {
        Auxtarea = {
            Ttitulo: titulo,
            Tdescripcion: descripción,
            Testado: estado,
            Tdificultad: dificultad,
            Tvencimiento: vencimiento,
            TultimaEd: ultimaEd,
            Tcreacion: creación,
        }
    }
    else {
        tTituloVacio = false;
        Auxtarea = {
            Ttitulo: tareaM.Ttitulo,
            Tdescripcion: tareaM.Tdescripción,
            Testado: tareaM.Testado,
            Tdificultad: tareaM.Tdificultad,
            Tvencimiento: tareaM.Tvencimiento,
            TultimaEd: tareaM.TultimaEd,
            Tcreacion: tareaM.Tcreacion,
        }
    }
    //DEclaraciónes de variables inicializadas
    while (op != `0` && op != `-1`) {
        if (f == `0`) {
            console.log(`\n\n`);
            console.log(chalk.greenBright("Estas creando una tarea\n"));
            console.log(`*************************\n1. Asignar titulo.\n2. Asignar descripción.\n3. Asignar Estado.\n4. Asignar dificultad.\n5. Asignar vencimiento.\n6. Guardar Cambios.\n7. Cancelar.`);
        }
        else {
            console.log(`\n\n`);
            console.log(chalk.greenBright("Estas editando una tarea"));
            console.log(`Si deseas mantener los valores de un atributo simplemente dejalo en blanco.`);
            console.log(`Si deseas dejar en blanco un atributo escribe un espacio.`);
            console.log(`*************************\n1. Editar titulo.\n2. Editar descripción.\n3. Editar Estado.\n4. Editar dificultad.\n5. Editar vencimiento.\n6. Guardar Cambios.\n7. Cancelar.`);
        }
        op = Scannf(`Opción: `);
        console.clear();
        switch (op) {
            case `1`:
                aux = controles.CargarTitulo(titulo, f);
                if (aux == `-1`) {
                    console.clear();
                    console.log(chalk.redBright(`Cancelado...`));
                }
                else {
                    Auxtarea.Ttitulo = aux;
                    tTituloVacio = false;
                    console.log(chalk.greenBright(`Titulo Guardado: ${aux}`));
                }
                break;
            case `2`:
                aux = controles.CargarDescripción(descripción, f);
                if (aux == `-1` ) {
                    console.clear();
                    console.log(chalk.redBright(`Cancelado...`));
                }
                else {
                    if(aux == ` ` && f != `0`){
                        aux = descripción;
                    }
                    Auxtarea.Tdescripcion = aux;
                    console.log(chalk.greenBright(`Descripción guardada: ${aux}`));
                }
                break;
            case `3`:
                aux = controles.CargarEstado(estado, f);
                if (aux == `-1`) {
                    console.clear();
                    console.log(chalk.redBright(`Cancelado...`));
                }
                else {
                    if(aux == ` ` && f != `0`){
                        aux = estado;
                    }
                    Auxtarea.Testado = aux;
                    console.log(chalk.greenBright(`Estado guardado: ${aux}`));
                }
                break;
            case `4`:
                aux = controles.CargarDificultad(dificultad, f);
                if (aux == `-1`) {
                    console.clear();
                    console.log(chalk.redBright(`Cancelado...`));
                }
                else {
                    if(aux == ` ` && f != `0`){
                        aux = dificultad;
                    }
                    Auxtarea.Tdificultad = aux;
                    console.log(chalk.greenBright(`Dificultad guardada: ${aux}`));
                }
                break;
            case `5`:
                aux = controles.CargarVencimiento(vencimiento, f);
                if (aux == `-1`) {
                    console.clear();
                    console.log(chalk.redBright(`Cancelado...`));
                }
                else {
                    if(aux == ` ` && f != `0`){
                        aux = vencimiento;
                    }
                    Auxtarea.Tvencimiento = aux;
                    console.log(chalk.greenBright(`Vencimiento guardado: ${aux}`));
                }
                break;
            case `6`:
                if (tTituloVacio) {
                    console.log(chalk.redBright(`Primero debe ingresar un Titulo de tarea.`));
                    break;
                }
                else {
                    console.log(chalk.greenBright(`Datos guardados!`));
                    op = `0`;
                }
                break;
            case `7`:
                op = `-1`;
                break;
            default:
                console.log(chalk.redBright(`Opción invalida...`));
                break;

        }
        pausa();
        console.clear();
    }
    if (op != `-1`) {
        if(f == `1`){
            Auxtarea.TultimaEd = fechaActual;
        }
        return Auxtarea;
    }
    else {
        return `-1`;
    }
}