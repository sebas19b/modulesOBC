import * as operations from './controllers/controller.js'

import chalk from 'chalk'

//Imprime suma de color azul
console.log(operations.suma(1, 2))

//Imprime multiplicacion de color blanco
console.log(chalk.green(operations.multiplo(4, 5)))