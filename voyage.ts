class Sejour {

    constructor (private _nom:string, private _prix:number){
    }

    get nom(){
        return this._nom;
    }

    get prix() {
        return this._prix;
    }
}

class SejourService {
    constructor (private _sejour:Sejour[]){
this._sejour.push(new Sejour ('Cuba', 500));
this._sejour.push(new Sejour ('Italie', 150));

        
        }

        findSejourbyName(nom:string):Sejour | undefined {
        const sejour = this._sejour.find(s => s.nom == nom);
        return sejour;
    }
}

const sejourService = new SejourService([]);
console.log(sejourService.findSejourbyName('Cuba'));
