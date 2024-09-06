import { pausa } from "./index.js"
import prompt from "prompt-sync";
import * as index from "./index.js";
import chalk from "./node_modules/chalk/source/index.js"
import { AgregarTarea } from "./AbmT.js";
const Scannf = prompt();


export function MenuVer() {
    let tareas = index.tareas;
    let op = `-1`;
    while (op != `0`) {
        console.log(chalk.blueBright("¿Que tarea deseas ver?\n"));
        console.log("[1] Todas");
        console.log("[2] Pendientes");
        console.log("[3] En Curso");
        console.log("[4] Terminadas");
        console.log("[0] Volver");
        op = Scannf("Ingrese una opcion: ");
        switch (op) {
            case `1`:
                console.clear();
                console.log(chalk.blueBright(`Estas son todas tus [T]areas:`));
                for (let i = 0; i < tareas.length; i++) {
                    VerTarea(i, tareas);
                }
                break;
            case `2`:
                console.log(chalk.blueBright(`Estas son todas tus tareas [P]endientes:\n`));
                for (let i = 0; i < tareas.length; i++) {
                    if (tareas[i].Testado == `Pendiente`) {
                        VerTarea(i, tareas);
                    }
                }
                break;
            case `3`:
                console.log(chalk.blueBright(`Estas son todas tus tareas [E]n curso:\n`));
                for (let i = 0; i < tareas.length; i++) {
                    if (tareas[i].Testado == `En curso`) {
                        VerTarea(i, tareas);
                    }
                }
                break;
            case `4`:
                console.log(chalk.blueBright(`Estas son todas tus tareas [T]erminadas:\n`));
                for (let i = 0; i < tareas.length; i++) {
                    if (tareas[i].Testado == `Terminada`) {
                        VerTarea(i, tareas);
                    }
                }
                break;
            case `0`:
                break;
            default:
                console.log(chalk.redBright(`Opción invalida...`));
                op = `-1`;
                break;
        }
        if (op != `0` && op != `-1`) {
            console.log(`¿Deseas ver los detalles de alguna?`);
            console.log(`Introduce el numero de tarea para verla o solo [ENTER] para volver...\n`);
            op = Scannf(`>`);
            if (op != ``) {
                let indice = op - 1;
                let existeTarea = BuscarPor(tareas, `0`, op);
                if (existeTarea != `-1`) {
                    VerDetalles((indice), tareas);
                    console.log("Si deseas editarla ingresa [E] o solo [ENTER] para volver\n");
                    op = Scannf();
                    if (op == `E` || op == `e`) {
                        let aux = AgregarTarea(`1`, tareas[indice]);
                        if (aux != `-1`) {
                            tareas[indice] = aux;
                        }
                        else {
                            console.log(chalk.redBright(`Cancelado...`));
                            op = `-1`;
                        }
                    }
                    else {
                        op = `-1`;
                    }
                }
            }
            pausa();
        }
        console.clear();
    }
}
export function VerTarea(i, tareas) {
    console.log(chalk.blueBright(`*************************************************************`));
    console.log(chalk.blueBright(`Tarea N° [${i + 1}]`));
    console.log(chalk.greenBright(`${tareas[i].Ttitulo}`));

}
export function VerDetalles(i, tareas) {
    console.log(chalk.blueBright(`Esta es la tarea.`));
    console.log(chalk.blueBright(`*************************************************************`));
    console.log(chalk.blueBright(`Tarea N° [${i + 1}]`));
    console.log(chalk.greenBright(`Titulo: ${tareas[i].Ttitulo}`));
    console.log(chalk.greenBright(`Descripción: ${tareas[i].Tdescripcion}`));
    console.log(chalk.greenBright(`Estado: ${tareas[i].Testado}`));
    console.log(chalk.greenBright(`Dificultad: ${tareas[i].Tdificultad}`));
    console.log(chalk.greenBright(`Vencimiento: ${tareas[i].Tvencimiento}`));
    console.log(chalk.greenBright(`Fecha de creación: ${tareas[i].Tcreacion}\n`));
    console.log(chalk.greenBright(`Ultima edición: ${tareas[i].TultimaEd}`));
}
//Buscar**************************************************************************************************************************************
export function BuscarPor(tareas, op, i) {
    i = i - 1;
    switch (op) {
        case `0`://Buscamos por indice en el array tareas*****************
            if (i > tareas.length || i < 0 || isNaN(i)) {
                console.log(chalk.redBright(`No se encuentran resultados para el indice ingresado...`));
                return `-1`;
            }
            return i;
        case `1`:
            while (op != ``) {
                console.log(chalk.greenBright(`Escriba el titulo o una palabra clave del titulo de tarea a buscar o [ENTER] para volver\n`));
                let clave = Scannf(`>`);
                if (clave != ``) {
                    let contador = 0;
                    for (let i = 0; i < tareas.length; i++) {
                        if (tareas[i].Ttitulo.includes(clave)) {
                            VerTarea(i, tareas);
                            contador = contador + 1;
                        }
                    }
                    if (contador == 0) {
                        console.log(chalk.redBright(`No se encontraron coincidencias...`));
                    }
                    else {
                        console.log(chalk.greenBright(`${contador} coincidencias encontradas...`));
                        console.log(`¿Deseas ver los detalles de alguna?`);
                        console.log(`Introduce el numero de tarea para verla o solo [ENTER] para volver...\n`);
                        op = Scannf(`>`);
                        if (op != ``) {
                            let indice = op - 1;
                            let existeTarea = BuscarPor(tareas, `0`, op);
                            if (existeTarea != `-1`) {
                                VerDetalles((indice), tareas);
                                console.log("Si deseas editarla ingresa [E] o solo [ENTER] para volver\n");
                                op = Scannf();
                                if (op == `E` || op == `e`) {
                                    let aux = AgregarTarea(`1`, tareas[indice]);
                                    if (aux != `-1`) {
                                        tareas[indice] = aux;
                                    }
                                    else {
                                        console.log(chalk.redBright(`Cancelado...`));
                                    }
                                }
                            }
                        }
                        console.clear();
                    }
                }
                else {
                    break;
                }
            }
            break;
    }
}