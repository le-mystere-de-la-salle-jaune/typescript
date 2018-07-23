"use strict";
console.log("Meteo App");
var Meteo = /** @class */ (function () {
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
var nantesCeMatin = new Meteo('Nantes', 12);
console.log(nantesCeMatin.toString());
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "Nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "Prix", {
        get: function () {
            return this._prix;
        },
        set: function (prix) {
            this._prix = prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejours = [];
        this.sejours.push(new Sejour("Nantes", 0));
        this.sejours.push(new Sejour("Paris", 800));
    }
    SejourService.prototype.getSejourByName = function (name) {
        return this.sejours.filter(function (sejour) { return sejour.Nom == name; });
    };
    return SejourService;
}());
var fds = new SejourService();
console.log(fds.getSejourByName("Paris"));
