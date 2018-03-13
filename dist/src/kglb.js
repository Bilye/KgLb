"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KgtoLb = KgtoLb;
exports.LbtoKg = LbtoKg;
function KgtoLb(kg) {
    var lb = 2.205;
    var resultado = kg * lb;
    return parseFloat(resultado.toFixed(1));
}

function LbtoKg(lb) {
    var kg = 0.454;
    var resultado = lb * kg;
    return parseFloat(resultado.toFixed(1));
}