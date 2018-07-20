"use strict";
var sejour = /** @class */ (function () {
    function sejour(_name, _prix) {
        this._name = _name;
        this._prix = _prix;
    }
    Object.defineProperty(sejour.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return sejour;
}());
var sejourService = /** @class */ (function () {
    function sejourService(sejour) {
        this.sejour = sejour;
    }
    sejourService.prototype.findbyname = function (name) {
        return this.sejour.filter(function (element) {
            if (element.name == name) {
                return element;
            }
        });
    };
    return sejourService;
}());
var Hello = new sejourService([new sejour("Paris", 10), new sejour("Dallas", 1700), new sejour("Dallas", 1200)]);
console.log(Hello.findbyname("Paris"));
