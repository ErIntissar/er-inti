function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
}
Etudiant.prototype.étudier = function() {
    console.log(this.nom + " " + this.prenom + " étudie.");
};

function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
}

Professeur.prototype.enseigner = function() {
    console.log(this.nom + " enseigne.");
};

var e1 = new Etudiant("Intissar", "Erhim", 21, "123488789");
var e2 = new Etudiant("Sara", "lebari", 20, "987654321"); 

var professeur1 = new Professeur("Mokhlis", 55, "A123456");
var professeur2 = new Professeur("Omar", 35, "B789012");


console.log("Informations des étudiants :");
console.log("Etudiant 1 :", e1.nom, e1.prenom, ", âge :", e1.age, ", CNE :", e1.cne);
console.log("Etudiant 2 :", e2.nom, e2.prenom, ", âge :", e2.age, ", CNE :", e2.cne);


console.log("\nInformations des professeurs :");
console.log("Professeur 1 :", professeur1.nom, ", âge :", professeur1.age, ", CIN :", professeur1.cin);
console.log("Professeur 2 :", professeur2.nom, ", âge :", professeur2.age, ", CIN :", professeur2.cin);



e1.étudier(); 
professeur1.enseigner();


var listeEtudiants = [ e1,e2];


listeEtudiants.sort(function(a, b) {
    
    var nomA = a.nom.toUpperCase();
    var nomB = b.nom.toUpperCase();
    if (nomA < nomB) return -1;
    if (nomA > nomB) return 1;
    
    var prenomA = a.prenom.toUpperCase();
    var prenomB = b.prenom.toUpperCase();
    if (prenomA < prenomB) return -1;
    if (prenomA > prenomB) return 1;
    return 0;
});

console.log("Liste des étudiants triée par ordre alphabétique du nom et du prénom :");
listeEtudiants.forEach(function(etudiant) {
    console.log("- " + etudiant.nom + " " + etudiant.prenom);
});