function jourtravaille(date) {
  // On récupère l'année de la date fournie en entrée
  const year = date.getFullYear();
  
  // On définit les dates des jours fériés de l'année 2020
  const holidays = {
    '01-01': `Jour de l'an`,
    '04-13': `Lundi de Pâques`,
    '05-01': `Fête du travail`,
    '05-08': `Victoire de 1945`,
    '05-21': `Ascension`,
    '06-01': `Lundi de Pentecôte`,
    '07-14': `Fête nationale`,
    '08-15': `Assomption`,
    '11-01': `Toussaint`,
    '11-11': `Armistice de 1918`,
    '12-25': `Noël`,
  };
  
  // On récupère le jour et le mois de la date fournie en entrée
  const day = date.getDate();
  const month = date.getMonth() + 1;
  
  // On formatte la date pour qu'elle corresponde au format des jours fériés
  const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}`;
  
  // Si la date correspond à un jour férié, on affiche un message correspondant
  if (holidays[formattedDate]) {
    console.log(`Le ${formattedDate}-${year} est un jour férié : ${holidays[formattedDate]}`);
  } 
  // Si la date correspond à un samedi ou un dimanche, on affiche un message correspondant
  else if (date.getDay() === 0 || date.getDay() === 6) {
    console.log(`Non, ${day} ${getMonthName(month)} ${year} est un week-end`);
  } 
  // Sinon, on affiche un message indiquant que c'est un jour travaillé
  else {
    console.log(`Oui, ${day} ${getMonthName(month)} ${year} est un jour travaillé`);
  }
}

