function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var sehir = deger2("ankara");
console.log(sehir);
function deger3(x) {
    return x;
}
var sayi3 = deger3(2);
var sehir3 = deger3("izmir");
console.log(sayi3);
var GerericClass = /** @class */ (function () {
    function GerericClass() {
    }
    GerericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GerericClass;
}());
var sinif = new GerericClass();
sinif.fonksiyon("ankara");
