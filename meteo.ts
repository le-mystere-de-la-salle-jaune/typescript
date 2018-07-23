console.log("Meteo App")

class Meteo {
    constructor(private _ville:string, private _temperature:number){

    }

    toString():string {
        return  `${this._ville} - ${this._temperature}°C`
    }
}

let nantesCeMatin = new Meteo('Nantes', 12);

console.log(nantesCeMatin.toString())

class Sejour{
    constructor(private _nom:string, private _prix:number){

    }

    get Nom():string{
        return this._nom
    }

    set Nom(nom:string){
        this._nom = nom
    }

    get Prix():number{
        return this._prix
    }

    set Prix(prix:number){
        this._prix = prix
    }

}

class SejourService {
    private sejours:Sejour[] = [];

    constructor() {
        this.sejours.push(new Sejour("Nantes", 0))
        this.sejours.push(new Sejour("Paris", 800))
    }

    getSejourByName(name:string){
        return this.sejours.filter(sejour => sejour.Nom==name)
    }
}

let fds = new SejourService()
console.log(fds.getSejourByName("Paris"))

