class User {
    static contador = 0
    constructor (nome){
        this.nome = nome 
        User.contador++
    }
}
let dd = new User("arroz")
console.log(dd.nome)
console.log(User.contador)