class Carrito {
    constructor (codArt, tipo, talle, color, stock, costo,precio) {
            this.cdoArt = codArt
            this.tipo = tipo
            this.talle = talle
            this.color = color
            this.cantidad = stock
    }
    

        }


const carrito = []
for (let i = 0; i < carrito.length; i++){
    carrito.push(crearCarrito())}

function crearCarrito() {
    this.codArt = prompt()

}








// catalogo.push(new CatalogoProducto('r001', 'remera', ['xs', 's', 'x', 'm', 'l', 'xl'], 'negra',40,750,1000))
// catalogo.push(new CatalogoProducto('r002', 'remera', ['xs', 's', 'x', 'm', 'l', 'xl'], 'roja',30,750,1000))
// catalogo.push(new CatalogoProducto('r003', 'remera', ['xs', 's', 'x', 'm', 'l', 'xl'], 'azul',30,750,1000))
// catalogo.push(new CatalogoProducto('r004', 'remera', ['xs', 's', 'x', 'm', 'l', 'xl'], 'blanca',35,750,1000))
// catalogo.push(new CatalogoProducto('c001', 'camisa', ['xs', 's', 'x', 'm', 'l', 'xl'], 'blanca',35,1700,2000))
// catalogo.push(new CatalogoProducto('c002', 'camisa', ['xs', 's', 'x', 'm', 'l', 'xl'], 'celeste',30,1700,2000))
// catalogo.push(new CatalogoProducto('c003', 'camisa', ['xs', 's', 'x', 'm', 'l', 'xl'], 'negra',25, 1700,2000))
// catalogo.push(new CatalogoProducto('b001', 'buzo', ['xs', 's', 'x', 'm', 'l', 'xl'],'negro',35,2800,3000))
// catalogo.push(new CatalogoProducto('b002', 'buzo', ['xs', 's', 'x', 'm', 'l', 'xl'],'blanco',30,2800,3000))
// catalogo.push(new CatalogoProducto('b003', 'buzo', ['xs', 's', 'x', 'm', 'l', 'xl'],'rojo',30,2800,3000))
// catalogo.push(new CatalogoProducto('p001', 'pantalon', ['xs', 's', 'x', 'm', 'l', 'xl'],'negro',30,3850,4000))
// catalogo.push(new CatalogoProducto('p002', 'pantalon', ['xs', 's', 'x', 'm', 'l', 'xl'], 'azul', 30, 3850, 4000))



// const catalogo = [r001,r002,r003,c001,b001,p001]

// const r001 = {tipo = `remera`,
//     talle = ['xs','s','m','l','xl'],
//     color ='negro',
//     stock = 10,
//     costo =750
// }
// const c001 = {
//     tipo = `camisa`,
//     talle = ['xs','s','m','l','xl'],
//     color ='negro',
//     stock = 10,
//     costo =750
// }
// const b001 = {
//     tipo = `buzo`,
//     talle = ['xs','s','m','l','xl'],
//     color ='negro',
//     stock = 50,
//     costo =750
// }
// const p001 = {
//     tipo = `pantalon`,
//     talle = ['xs','s','m','l','xl'],
//     color ='negro',
//     stock = 50,
//     costo =750
// }
// const r002 = {
//     tipo = `remera`,
//     talle = ['xs','s','m','l','xl'],
//     color ='roja',
//     stock = 50,
//     costo =750
// }
// const r003 = {
//     tipo = `remera`,
//     talle = ['xs','s','m','l','xl'],
//     color ='azul',
//     stock = 50,
//     costo =750
// }
// console.log(catalogo)

// let elijaProducto = prompt(`elija el producto que desea llevar`)



// function ventas() {
// switch (elijaProducto) {
//     case 'r001':
//     case 'r002':
//     case 'r003':
//         ventaRem1();
//         break;
//     case 'c001':
//         ventaCam1();
//         break;
//     case 'b001':        
//         ventaBuz1();
//         break;  
//     case 'p001':
//         ventaPan1();
//         break;
//     default:
//         alert(" favor consulte nuestro catálogo nuevamente");
//     break;
// }
// }
// console.log(ventas ())

// const ventaRem1=()=> {
//     let numR1 = parseInt(prompt(`cuantas ${this.tipo} desea llevar`))
    
//     precioVentaR1 =this.precio*numR1
//     console.log(`el precio de venta es ${precioVenta}`)

// }


// const ventaCam1=()=> {
//     let numC1 = parseInt(prompt(`cuantas ${this.tipo} desea llevar`))
    
//     precioVentaC1 =this.precio*numC1
//     console.log(`el precio de venta es ${precioVenta}`)
// }

// const ventaBuz1=()=> {
//     let numB1 = parseInt(prompt(`cuantas ${this.tipo} desea llevar`))
    
//     precioVentaB1 =this.precio*numB1
//     console.log(`el precio de venta es ${precioVenta}`)
// }

// const ventaPant1=()=> {
//     let numP1 = parseInt(prompt(`cuantas ${this.tipo} desea llevar`))
    
//     precioVentaP1 =this.precio*numP1
//     console.log(`el precio de venta es ${precioVentaP1}`)
    


// }
