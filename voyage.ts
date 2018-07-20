class sejour {

    constructor(private _name:string, private _prix:number){
    }

    get name(){
        return this._name;
    }

    get prix(){
        return this._prix;
    }
}

class sejourService {

    constructor(private sejour:sejour[]){
    }

    findbyname(name:string):any{

        
        return this.sejour.filter(element => {
            if(element.name == name){
                return element;
            }
        });
    }
}

let Hello = new sejourService([new sejour("Paris",10),new sejour("Dallas",1700),new sejour("Dallas",1200)]);

console.log(Hello.findbyname("Dallas"));