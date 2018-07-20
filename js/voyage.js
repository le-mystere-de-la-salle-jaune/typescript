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
    function SejourService(_sejour) {
        this._sejour = _sejour;
        this._sejour.push(new Sejour('Cuba', 500));
        this._sejour.push(new Sejour('Italie', 150));
    }
    SejourService.prototype.findSejourbyName = function (nom) {
        var sejour = this._sejour.find(function (s) { return s.nom == nom; });
        return sejour;
    };
    return SejourService;
}());
var sejourService = new SejourService([]);
console.log(sejourService.findSejourbyName('Cuba'));
