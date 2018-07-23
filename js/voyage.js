"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(_sejours) {
        this._sejours = _sejours;
        this._sejours.push(new Sejour('Jouy-en-Josas', 45), new Sejour('Vulvoz', 34), new Sejour('Monteton', 22));
    }
    SejourService.prototype.findByNom = function (nom) {
        return this._sejours.find(function (s) { return s.nom === nom; });
    };
    return SejourService;
}());
var sejourService = new SejourService(new Array());
console.log(sejourService.findByNom('Vulvoz'));
