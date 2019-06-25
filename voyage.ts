class Sejour {

    constructor(private _nom:string, private _prix:number) {
    }

    get nom():string {
        return this._nom;
    }

    get prix():number {
        return this._prix;
    }

}

class SejourService {
    private _sejours:Sejour[];
    constructor() {
        this._sejours = [];
        this._sejours[0] = new Sejour('Paris', 200);
        this._sejours[1] = new Sejour('Rio', 800);
        this._sejours[2] = new Sejour('Tokyo', 1200);
    }

    findSejourByName(name:string):Sejour {
        return this._sejours.filter( (sejour) => sejour.nom == name)[0];
    }
}

let sejourService:SejourService = new SejourService();
console.log(sejourService.findSejourByName('Tokyo'));