function Voiture(model, marque, année, type, carburant) {
    this.model = model; 
    this.marque = marque; 
    this.année = année; 
    this.type = type; 
    this.carburant = carburant; 
}

var listeVoitures = []; 


listeVoitures.push(new Voiture("Panamera", "Porsche", 2023, "Coupee", "Essence"));
listeVoitures.push(new Voiture("GLE", "Mercedes", 2020, "Coupee", "Diesel"));
listeVoitures.push(new Voiture("M3", "BMW", 2024, "SUV", "Électrique"));
listeVoitures.push(new Voiture("Q3", "Audi", 2022, "Hatchback", "Diesel"));



console.log("Liste des voitures :"); 
listeVoitures.forEach(function(voiture) {
    console.log("- " + voiture.marque + " " + voiture.model + " (" + voiture.année + ")");
}); 
function Hyundai(model, marque, année, type, carburant, série, hybride) {
    Voiture.call(this, model, marque, année, type, carburant); 
    this.série = série; 
    this.hybride = hybride; 
}

// Heri
Hyundai.prototype = Object.create(Voiture.prototype);
Hyundai.prototype.constructor = Hyundai;

Hyundai.prototype.alarmer = function() {
    return this.marque + " " + this.model + " de série : " + this.série + " hybride : " + this.hybride;
};

function Ford(model, marque, année, type, carburant, options) {
    Voiture.call(this, model, marque, année, type, carburant); 
    this.options = options; 
}

// Heri
Ford.prototype = Object.create(Voiture.prototype);
Ford.prototype.constructor = Ford;

Ford.prototype.alarmer = function() {
    return this.marque + " " + this.model + " avec les options suivantes : " + this.options.join(", ");
};

var hyundai = new Hyundai("Elantra", "Hyundai", 2023, "Sedan", "Hybride", "Series A", true);
var ford = new Ford("Fusion", "Ford", 2022, "Sedan", "Essence", ["Toit ouvrant", "Cuir"]);
listeVoitures.push(hyundai);
listeVoitures.push(ford);

console.log(hyundai.alarmer()); 
console.log(ford.alarmer()); 

//question 4: 
listeVoitures.sort(function(a, b) {
    return a.année - b.année;
});


console.log("Liste des voitures triée par année croissante :");
listeVoitures.forEach(function(voiture) {
    console.log("- " + voiture.marque + " " + voiture.model + " (" + voiture.année + ")");
});