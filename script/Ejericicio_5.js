x = prompt('Selecione una opcion: n\ 1.convertir euros a dolares n\ 2. convertir dolares a euros')

euro = 0.91 //euros
dolar = 1.10 //dolares


switch(true){
    case x == 1:
        d = prompt('ingrese monto a convertir')
        console.log(d * euro)
        break;
    case x == 2:
        e = prompt('ingrese monto a convertir')
        console.log(e * dolar)
        break;
     default:
        console.log('valor invalido')
    }