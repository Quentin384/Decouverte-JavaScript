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

for 