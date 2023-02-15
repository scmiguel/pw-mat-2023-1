function calcular_area(base, altura, forma) {
    switch (forma) {
        case 'R': //retangulo
            return base*altura
        case 'T': //triangulo
            return base*altura/2
        case 'E': //Elipse/Circulo
            return (base/2)*(altura/2)*Math.PI
        default:
            return null
            break;
    }
}
console.log(`Área retangulo de 12x16 : ${calcular_area(12,16,'R')}`)