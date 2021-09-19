// Bonjour
var tab = Array ("pierre", "feuille", "ciseaux");


alert("Bonjour et bienvenue sur le jeu du shi-fu-mi")
alert("Amusez-vous bien")

// reponse prompt
do 
{
    var reponse = prompt("Comment t'appelles-tu ?");  
} while (!reponse)
//var reponse = prompt("Comment t'appelles-tu ?", "");
    confirm("Bonjour " + reponse + ", Prêt à commencer la partie ?");


alert("Rappel des consignes du jeu : la pierre bat les ciseaux ; la feuille bat la pierre et les ciseaux battent la feuille.")


/**** Mode utilisateur ****/

var choixUtilisateur = prompt("Choisissez vous: pierre, feuille, ou ciseaux?");


/******Mode ordinateur**** */

var reponse = tab[Math.floor(Math.random()*tab.length)];


var resultat = [

    ["pierre", "pierre", "égalité"],
    ["ciseaux", "ciseaux", "égalité"],
    ["feuille", "feuille", "égalité"],
    ["pierre", "ciseaux","perdu"],
    ["pierre", "feuille", "gagné"],
    ["ciseaux", "pierre", "gagné"],
    ["ciseaux", "feuille", "perdu"],
    ["feuille", "pierre", "perdu"],
    ["feuille", "ciseaux", "gagné"]

];


for (var i = 0; i < resultat.length; i++) {
    if(reponse === resultat[i][0] && choixUtilisateur === resultat[i][1])
    {alert(resultat[i][2])}
}


// /*** Mode Ordi *** */

// function random(){
//     console.log(Math.round(Math.random() * 3));
// }

// const reponsesordi = ["pierre", "feuille", "ciseaux"];

// for (const property in reponsesordi) {
//   alert(`${property}: ${reponsesordi[property]}`);
// }


// var choixOrdi = Math.random();

// if (choixOrdi <= 0.34) {
// 	choixOrdi = 'pierre';
// } else if (choixOrdi <= 0.67) {
// 	choixOrdi = 'feuille';
// } else {
// 	choixOrdi = 'ciseaux';
// }
// var ordiGagne = choixOrdi;

// ordiGagne = "Victiore pour l'ordinnateur";
// var userGagnent = choixUtilisateur;

// userGagnent = "Victiore pour l'utilisateur";
// console.log('L\'ordinnateur a choisi ' + choixOrdi);

// var comparer = function (choix1, choix2) {
// 	if (choix1 === choix2) {
// 		return "Egalité " + choixUtilisateur;
// 	} else if (choix1 === 'pierre') {
// 		if (choix2 === 'ciseaux') {
// 			return 'La pierre gagne ! ' + userGagnent;
// 		} else {
// 			return 'La feuille gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur;
// 		}
// 	} else if (choix1 === 'feuille') {
// 		if (choix2 === 'pierre') {
// 			return 'La feuille gagne ! ' + userGagnent;
// 		} else {
// 			return 'Le ciseaux gagnent ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur;
// 		}
// 	} else if (choix1 === 'ciseaux') {
// 		if (choix2 === 'feuille') {
// 			return 'Le ciseaux gagne ! ' + userGagnent;
// 		} else {
// 			return 'La pierre gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi le ' + choixUtilisateur;
// 		}
// 	}
// };

// alert(comparer(choixUtilisateur, choixOrdi));






// var reponsejeux= prompt("faites votre choix entre Pierre, Feuille ou ciseaux", "<Entrez ici votre reponse>");
// if( reponsejeux === null ){
//     alert("Vous avez cliqué sur Annuler");
// } else {
//     alert("Bonjour " + reponsejeux + ", Prêt à commencer la partie ?");
// }