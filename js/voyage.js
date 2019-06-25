"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Sejour.prototype.getNom = function () {
        return this.nom;
    };
    Sejour.prototype.getPrix = function () {
        return this.prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejours = [new Sejour("Nantes", 15), new Sejour("Callac", 5)];
    }
    SejourService.prototype.rechercheSejourParNom = function (leNom) {
        for (var i in this.sejours) {
            if (this.sejours[i].getNom() == leNom) {
                return this.sejours[i];
            }
        }
        return undefined;
    };
    return SejourService;
}());
var monService = new SejourService();
console.log(monService.rechercheSejourParNom("Callac"));
