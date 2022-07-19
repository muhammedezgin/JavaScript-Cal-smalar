interface Product {
    id: number;
    name: string;
    unitPrice: number;



}
function save(Product: Product) {

    console.log(Product.name + "kaydedildi")
}
save({ id: 1, name: "laptop", unitPrice: 10 })


interface PersonelService {
save();

}
class CustomerService implements PersonelService {
   save() {
       
   }
    

}