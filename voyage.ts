class Sejour {
    constructor(private _nom: string, private _prix: number) {

    }

    get nom(): string { return this._nom }
    set nom(nom) { this.nom = nom }

    get prix(): number { return this._prix }
    set prix(prix) { this._prix = prix }
}

class SejourService{
    constructor(private _sejour:Sejour[]){
        this._sejour.push(
            new Sejour('Valenciennes', 10),
            new Sejour('lille', 15),
            new Sejour('paris', 25)
        )
    }

    findByNom(nom:string):Sejour | undefined{
        return this._sejour.find( s => s.nom === nom)
    }
}

let sejour = new SejourService([])
console.log(sejour.findByNom('Valenciennes'))
