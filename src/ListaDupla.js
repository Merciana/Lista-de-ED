class Node {
    constructor() {
        this.dado = dado
        this.head = null
        this.tail = null
    }
}

class listaDuplmenteLigada {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(dado) { //instacioando um novo nó
        let novo_no = new Node(dado)

        if (this.isEmpty()) {
            this.head = novo_no
            this.tail = novo_no
        } else {
            novo_no.proximo = this.head
            this.head.anterior = novo_no
            novo_no.anterior = null
            this.head = novo_no
        }
    }

    append(dado) { //instacioando um novo nó no fim da fila
        let novo_no = new Node(dado) //novo_no -> variável , this -> dado da classe inteira

        if (this.isEmpty()) {
            this.head = novo_no
            this.tail = novo_no
        } else {
            novo_no.anterior = this.tail
            this.head.proximo = novo_no
            novo_no.proximo = null
            this.tail = novo_no
        }
    }

    isEmpty() { //verificando se está vazia
        return this.head === null
    }

    removeFirst() {
        if (this.isEmpty()) {
            this.head = novo_no
            this.tail = novo_no
        } else {
            this.head = this.head.proximo //indica que a cabeça é o próximo elemento
            this.head.anterior = null
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            this.head = novo_no
            this.tail = novo_no
        } else {
            this.tail = this.tail.anterior
            yhis.tail.anterior = null
        }
    }

    legth() { // verifica o tamanho atual da lista
        let cont = 0
        let aux = this.head

        while (aux != null) { //se a cabeça for diferente de nulo
            cont++ //conte
            aux = aux.proximo
        }
        return cont
    }

    /*
    let cont = 0 ->conta o tamanho da lista a partir do final da lista
    aux = this.tail
    while(aux != null){
        cont ++
        aux = aux.anterior
    }
    return cont
    */
}
export default listaDuplmenteLigada