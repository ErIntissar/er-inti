class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    afficher() {
        console.log(('${this.x}, ${this.y}'));
    }

    additionner(vecteur) {
        return new Vecteur2D(this.x + vecteur.x, this.y + vecteur.y);
    }
}

class Rectangle {  
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }
    afficher() {
        console.log('Rectangle : longueur = ${this.longueur}, largeur = ${this.largeur}');
    }

    surface() {
        return this.longueur * this.largeur;
    }
}
class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}

const vecteur1 = new Vecteur2D(0,0);
console.log("Vecteur par défaut :", vecteur1); 

const vecteur2 = new Vecteur2D(3, 4);
console.log("Vecteur spécifié :", vecteur2);

console.log("Vecteur 1 :");
vecteur1.afficher(); 
console.log("Vecteur 2 :");
vecteur2.afficher(); 

const resultatAddition = vecteur1.additionner(vecteur2);
console.log("Résultat de l'addition des vecteurs :");
resultatAddition.afficher(); 

const rectangle = new Rectangle(4, 6);
console.log("Informations sur le rectangle :");
rectangle.afficher();
console.log("Surface du rectangle :", rectangle.surface());

const carre = new Carre(5);
console.log("Informations sur le carré :");
carre.afficher();
console.log("Surface du carré :", carre.surface());

const point = new Point();
console.log("Point par défaut :", point);

const segment = new Segment(1, 2, 4, 5);
console.log("Segment :", segment);