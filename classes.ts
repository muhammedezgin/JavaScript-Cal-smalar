class Ev{
_odaSayisi:number;
_pencereSayisi:number
_kat:number;
constructor(odaSayisi:number,pencereSayisi:number,kat:number){

    this._kat = kat;
    this._odaSayisi = odaSayisi;
    this._pencereSayisi = pencereSayisi;

}

yemekYe(){
console.log(this._kat+"katlı evde"+"yemek yiyildi")

}


}


let ev = new Ev(3,4,5)
ev.yemekYe();
console.log(ev._kat)

class Kisi{
    private _isim:string
    get isim():string
    {
      return "sayın: "+this._isim;

    }
    set isim(ad:string){
        this._isim=ad
    }

    kaydet(){
        console.log("kişi kaydedildi");
    }

}
class Musteri extends Kisi{
    satısYap(){
        console.log("satıs yapıldı");
    }

}
class Personel extends Kisi{
    maasOde(){
        console.log("maaş ödendi");
    }

}
let musteri = new  Musteri()
musteri.isim="muhammed"
console.log(musteri.isim)
musteri.kaydet();
musteri.satısYap();
let personel = new Personel()
personel.kaydet();
personel.maasOde();




