class Retangulo{
  constructor(altura, largura){
    this.altura = altura
    this.largura = largura
  }

calcularArea(){
 return this.altura * this.largura;
}
}



let retangulo = new Retangulo("10", "10")
let retangule = new Retangulo("30", "60")

console.log(retangulo.altura)
console.log(retangulo.largura)
console.log(retangule.altura)
console.log(retangule.largura)
console.log(retangulo.calcularArea())
console.log(retangule.calcularArea())