abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{

    }
   abstract hesapla():void;
}

class TuketiciKredisi extends KrediBase {
    
    constructor() {
        super();
    }
    
    hesapla(): void {
        console.log("tüketici krdisine göre hesap uyapıldı")
    }
    }
   
class MortgageKredisi extends KrediBase {
    
    constructor() {
        super();
    }
    
    hesapla(): void {
        console.log("konut krdisine göre hesap uyapıldı")
    }
    }
    let tuketiciKredisi = new TuketiciKredisi()
    tuketiciKredisi.hesapla();
    tuketiciKredisi.kaydet();

    let mortgageKredisi = new MortgageKredisi()
    mortgageKredisi.hesapla();
    mortgageKredisi.kaydet();

    let kredi : KrediBase
    kredi = new TuketiciKredisi()
    kredi = new MortgageKredisi()
    
