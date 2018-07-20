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
    function SejourService() {
        this._sejours = [];
        this._sejours[0] = new Sejour('Paris', 200);
        this._sejours[1] = new Sejour('Rio', 800);
        this._sejours[2] = new Sejour('Tokyo', 1200);
    }
    SejourService.prototype.findSejourByName = function (name) {
        return this._sejours.filter(function (sejour) { return sejour.nom == name; })[0];
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findSejourByName('Tokyo'));
