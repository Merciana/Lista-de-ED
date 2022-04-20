class Fracao {
    constructor(...a) { //definindo vários vetores, infinito, se ler como um array
        this.dado = a
    }
    multi() {
        let result_numerador = this.dado[0] * this.dado[2]
        let result_denominador = this.dado[1] * this.dado[3]
        return `${result_numerador} / ${result_denominador}`
            //"" + result_numerador + "/" + "" + result_denominador // apresentar o resultado
    }
    divi() {
        let result_numerador = this.dado[0] * this.dado[3]
        let result_denominador = this.dado[1] * this.dado[2]
        return `${result_numerador} / ${result_denominador}`
    }
}

let f1 = new Fracao(1, 2, 3, 4)
console.log(f1.multi())
console.log(f1.divi())