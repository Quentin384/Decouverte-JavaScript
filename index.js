/* Etape 1 */

const nomUser = "Quentin";
const ageUser = 24;
let villeUser = "Grenoble";

/* Etape 2*/

villeUser = 'Lyon';

/* Etape 3 */

let utilisateur = {
    nom: nomUser,
    age: ageUser,
    ville: villeUser
};

/* Etape 4*/

utilisateur.ville = "Eybens";

console.log(utilisateur.ville);

console.log(villeUser);

/* Etape 5 */

utilisateur.email = "zampieri.quentin38@gmail.com";

console.log(utilisateur.email)

/* Etape 6 */

utilisateur.amis = ["Christopher", "Azriel", "Mathis", "Antoine", "Guy"];

/* Etape 7 */

const tab = ["Christopher", "Azriel", "Mathis", "Antoine", "Guy"];
const index = tab.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}
console.log(tab);

const friend = tab.pop(5)

console.log(friend)
console.log(tab);

/* Etape 7.1 */

tab.push ("Remy")

console.log(tab)

/* Etape 7.2 */

tab.splice (2,1, "Cecile")

console.log(tab)

/* Etape 8 */

for (let i = 0; i < tab.length; i++)
  console.log(tab[i])

/* Etape 9 */

if (ageUser < 18) {
  console.log("Mineur");
} else if (ageUser >= 18 && ageUser <= 25) {
  console.log("Jeune adulte");
} else {
  console.log("Adulte");
}

/* Etape 10 */

//a 
function saluerUtilisateur(nomUser) {
  console.log("Bienvenue",nomUser);
}

saluerUtilisateur(nomUser)


//b 
function calculerAnneeNaissance(ageUser) {
  age = (2025 - ageUser)

  console.log(age);
}

calculerAnneeNaissance(ageUser)

//c
function verifierMajorite(ageUser) {
  if (ageUser >= 18) {
    console.log("True");
  } else {
    console.log("False");
  }
}
verifierMajorite(ageUser)

//d
function afficherProfil(utilisateur) {
  console.log(`Nom: ${utilisateur.nom}, Age: ${utilisateur.age}, Ville: ${utilisateur.ville}, Email: ${utilisateur.email}`);
  console.log(`Amis: ${utilisateur.amis.join(", ")}`);
}
afficherProfil(utilisateur);

//e 
function ajouterAmi(utilisateur, prenom) {
  utilisateur.amis.push(prenom);
}
ajouterAmi(utilisateur, "prenom");
console.log(utilisateur.amis);

function supprimerAmi(utilisateur, prenom) {
  let index = utilisateur.amis.indexOf(prenom);
  if (index !== -1) {
      utilisateur.amis.splice(index, 1);
  }
}
supprimerAmi(utilisateur, "prenom");
console.log(utilisateur.amis);
