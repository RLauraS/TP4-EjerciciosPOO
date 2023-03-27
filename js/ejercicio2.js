/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */
let cuenta = {
titular: 'Alex',
saldo: 0,
ingresar :function (dinero) {
    this.saldo= this.saldo+(dinero);
    document.write(`Se ingresaron $ ${this.saldo} a la cuenta <br>`);
},
extraer :function(extraccion){
if (extraccion<=this.saldo) {
    document.write(`Extracción de $ ${extraccion} realizada con éxito<br>`)
    this.saldo= this.saldo-extraccion;
}else{
    document.write(`La cuenta no posee suficiente saldo para realizar la extracción. Usted posee $ ${cuenta.saldo}<br>`)
}
},
informar: function(){
    document.write(`Saldo actual: $ ${cuenta.saldo}`)
}
}
document.write(`<h5>Cuenta en su estado inicial: </h5><br>`);
document.write(`Titular de la cuenta: ${cuenta.titular}<br>`);
document.write(`Saldo inicial: $${cuenta.saldo}<br>`);
document.write(`<hr><h5>Se ingresan $500 de saldo a la cuenta: </h5><br>`);

cuenta.ingresar(500);
document.write(`<hr><h5>Verificando si se actualizó el saldo: </h5><br>`);
cuenta.informar();

document.write(`<hr><h5>Realizando una extracción de $ 300</h5><br>`);
cuenta.extraer(300);
cuenta.informar();

document.write(`<hr><h5>Querer extraer mas dinero del que posee la cuenta ($600):</h5><br>`);
cuenta.extraer(600);

document.write(`<hr><h5>Informar saldo</h5><br>`);
cuenta.informar();

