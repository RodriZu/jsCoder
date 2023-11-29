

let kcebolla=0;
let klechuga= 0;
let ktomate= 0;
let kpapa= 0;

/*
precios
cebolla= 5
lechuga= 10
tomate= 15
papa= 20

*/

let gasto= 0;

let compra= prompt("Ingrese la verdura que quiere comprar, eliminar para borrar algun producto o salir para finalizar la compra").toLowerCase();
    
do{
    switch(compra){
        case "lechuga":
            klechuga= klechuga +1;
            gasto= gasto + 10;
            console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
            compra= prompt("Ingrese la verdura que quiere comprar, eliminar para borrar algun producto o salir para finalizar la compra").toLowerCase();
            break;
        case "tomate":
            ktomate= ktomate +1;
            gasto= gasto + 15;
            console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
            compra= prompt("Ingrese la verdura que quiere comprar, eliminar para borrar algun producto o salir para finalizar la compra").toLowerCase();
            break;
        case "papa":
            kpapa= kpapa +1;
            gasto= gasto + 20;
            console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
            compra= prompt("Ingrese la verdura que quiere comprar, eliminar para borrar algun producto o salir para finalizar la compra").toLowerCase();
            break;
        case "cebolla":
            kcebolla= kcebolla +1;
            gasto= gasto + 5;
            console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
            compra= prompt("Ingrese la verdura que quiere comprar, eliminar para borrar algun producto o salir para finalizar la compra").toLowerCase();
            break;        
        case "eliminar":
            let eliminar = prompt("Ingrese la verdura que quiere eliminar o seguir para comprar");
            do{
                switch(eliminar){
                    case "cebolla":
                        kcebolla= kcebolla - 1;
                        gasto= gasto - 5;
                        console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
                        eliminar = prompt("Ingrese la verdura que quiere eliminar o seguir para finalizar de eliminar").toLowerCase();
                        break;
                    case "lechuga":
                        klechuga= klechuga - 1;
                        gasto= gasto - 10;
                        console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
                        eliminar = prompt("Ingrese la verdura que quiere eliminar o seguir para finalizar de eliminar").toLowerCase();
                        break;
                    case "tomate":
                        ktomate= ktomate - 1;
                        gasto= gasto - 15;
                        console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
                        eliminar = prompt("Ingrese la verdura que quiere eliminar o seguir para finalizar de eliminar").toLowerCase();
                        break;
                    case "papa":
                        kpapa= kpapa - 1;
                        gasto= gasto - 20;
                        console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
                        eliminar = prompt("Ingrese la verdura que quiere eliminar o seguir para finalizar de eliminar").toLowerCase();
                        break;
                    case "seguir":
                        console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
                        break;
                    default:
                        console.log("no ingresaste una verdura disponible");
                        console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
                        eliminar= prompt("Ingrese la verdura que quiere eliminar o seguir para finalizar de eliminar").toLowerCase();
                        break;
                }
            }while(eliminar!== "seguir");
            break;
        case "salir":
            console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
            break;
        default:
            console.log("no ingresaste una verdura disponible");
            console.log(`Cantidad de verdura comprar lechuga= ${klechuga}, tomate= ${ktomate}, papa= ${kpapa}, gastos= ${gasto}`);
            compra= prompt("Ingrese la verdura que quiere comprar, eliminar para borrar algun producto o salir para finalizar la compra").toLowerCase();
            break;

    }
}while(compra !== "salir");