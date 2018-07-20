class Sejour{

    constructor(private nom:string, private prix:number){

    }

    public getNom():string {
        return this.nom;
    }

    public getPrix():number{
        return this.prix;
    }

}

class SejourService{

    public sejours:Sejour[];

    constructor(){
        this.sejours = [new Sejour("Nantes",15),new Sejour("Callac",5)];
    }

    public rechercheSejourParNom(leNom:string):Sejour|undefined{
        for(let i in this.sejours){
            if(this.sejours[i].getNom() == leNom){
                return this.sejours[i];
            }
        }
        return undefined;
    }

}

let monService = new SejourService();

console.log(monService.rechercheSejourParNom("Callac"));