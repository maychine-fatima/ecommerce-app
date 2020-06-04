export class Produit {
    couleur: String;
    designation: String;
    prix: Number;
    departement: String;
    quantite: Number;
    idMagasin: Number;

    constructor($couleur, $designation, $prix, $departement, $quantite, $idMagasin) {
        this.couleur = $couleur
        this.designation = $designation
        this.prix = $prix
        this.departement = $departement
        this.quantite = $quantite
        this.idMagasin = $idMagasin
    }
}