"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () { return this._nom; },
        set: function (nom) { this.nom = nom; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () { return this._prix; },
        set: function (prix) { this._prix = prix; },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(_sejour) {
        this._sejour = _sejour;
        this._sejour.push(new Sejour('Valenciennes', 10), new Sejour('lille', 15), new Sejour('paris', 25));
    }
    SejourService.prototype.findByNom = function (nom) {
        return this._sejour.find(function (s) { return s.nom === nom; });
    };
    return SejourService;
}());
var sejour = new SejourService([]);
console.log(sejour.findByNom('Valenciennes'));
