class PilhaAbacaxi {

    constructor(size = 10) {
        this.topo = 1;
        this.armazenamento = [];
        this.maxSize = size;
    }

    push(dado) {
        if (!this.isFull()) {
            this.armazenamento[this.topo] = dado;
            this.topo++;
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--;
        }
    }


    top() {
        if (!this.isEmpty()) {
            return this.armazenamento[this.topo - 1]
        }
    }

    quantidade() {
        return this.topo - 1;
    }

    isEmpty() {
        return this.topo - 1 === 0;
    }

    isFull() {
        return this.topo === this.length();
    }

    length() {
        return this.maxSize;
    }

    toString() {
        let word = '';
        for (let i = this.topo - 1; i > 0; i--) {

            if (!this.isEmpty()) {
                word += this.armazenamento[i];
                console.log(`indice ${i}   value: ${this.armazenamento[i]}`);
            }


        }
        return word;
    }
}

let abacaxi = new PilhaAbacaxi();


abacaxi.push("A")
abacaxi.push("B")
abacaxi.push("A")
abacaxi.push("C")
abacaxi.push("A")
abacaxi.push("X")
abacaxi.push("I")
console.log(abacaxi.toString())