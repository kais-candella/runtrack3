function Afficherjoursemaines() {
  let jourssemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  let resultat = [];
  for (let i = 0; i < jourssemaines.length; i++) {
    resultat.push(jourssemaines[i]);
  }
  return resultat;
}

// Utilisation de la fonction pour récupérer les noms des jours de la semaine dans un tableau

let jours = Afficherjoursemaines();
console.log(jours); // affiche ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
