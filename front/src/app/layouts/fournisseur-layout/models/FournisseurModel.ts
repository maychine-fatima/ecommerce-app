export class Fournisseur {
    name: String;
    tel: String;
    email: String;
    adress: String;
    idMagasin: Number;

    constructor($name, $tel, $email, $adress, $idMagasin) {
        this.name = $name
        this.tel = $tel
        this.email = $email
        this.adress = $adress
        this.idMagasin = $idMagasin
    }
}