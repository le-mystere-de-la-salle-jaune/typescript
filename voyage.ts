class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }

    get nom(): string {
        return this._nom
    }

    get prix(): number {
        return this._prix
    }
}

class SejourService {
    constructor(private _sejours: Sejour[]) {
        this._sejours.push(
            new Sejour('Jouy-en-Josas', 45),
            new Sejour('Vulvoz', 34),
            new Sejour('Monteton', 22)
        )
    }

    findByNom(nom: string): Sejour | undefined {
        return this._sejours.find(s => s.nom === nom);
    }
}

let sejourService = new SejourService([])

console.log(sejourService.findByNom('Vulvoz'))