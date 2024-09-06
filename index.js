
import * as Abm from "./AbmT.js";
import prompt from "prompt-sync";
import * as MenuVer from "./MenuVer.js"
import chalk from "./node_modules/chalk/source/index.js"
const Scannf = prompt();
let op = -1;
export let tareas = [];
let aux;
export function pausa() {
    let a = Scannf(chalk.yellowBright(`Presióne la tecla [ENTER] para continuar...`));
}
while (op != `0`) {
    console.log(chalk.blueBright("Hola Olivia\n¿Qué deseas hacer?\n"));
    console.log("[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir");
    op = Scannf(`Opción: `);

    switch (op) {
        case `0`:
            console.log(chalk.blueBright(`Hasta la proxima Olivia...`));
            break;
        case `1`:
            MenuVer.MenuVer();
            break;
        case `2`:
            MenuVer.BuscarPor(tareas, `1`, 0);
            break;
        default:
            console.log(chalk.redBright(`Opción invalida...`));
            op = -1;
            break;
        case `3`:
            aux = Abm.AgregarTarea(`0`, false);
            if (aux == `-1`) {
                console.log(chalk.redBright(`Cancelado...`));
            }
            else {
                tareas.push(aux);
                console.log(chalk.greenBright(`¡Datos guardados!`));
                MenuVer.VerDetalles(tareas.length - 1, tareas);
            }
            break;
    }
    pausa();
    console.clear();
}