export interface Activity {
  text: string;
  category: string;
}

export const activities: Activity[] = [
  {
    category: "creativo",
    text: "Scrivi una storia di tre frasi iniziando con 'Era una notte buia e tempestosa...'",
  },
  {
    category: "creativo",
    text: "Inventa un nuovo colore e descrivi come ti fa sentire.",
  },
  {
    category: "creativo",
    text: "Crea un haiku sul tuo stato d'animo attuale.",
  },
  {
    category: "creativo",
    text: "Immagina di essere un oggetto nella stanza. Racconta la tua giornata.",
  },
  {
    category: "creativo",
    text: "Combina due parole casuali e crea una nuova invenzione.",
  },
  {
    category: "teatrale",
    text: "Recita il monologo di Amleto 'Essere o non essere' come se fossi un robot.",
  },
  {
    category: "teatrale",
    text: "Improvvisa una conversazione tra te stesso e il tuo io di 10 anni fa.",
  },
  {
    category: "teatrale",
    text: "Esprimi cinque emozioni diverse usando solo la tua voce, senza parole.",
  },
  {
    category: "teatrale",
    text: "Fai finta di essere un presentatore TV che descrive la tua scrivania.",
  },
  {
    category: "teatrale",
    text: "Crea una storia improvvisata basata sulle prime tre cose che vedi.",
  },
  {
    category: "disegno",
    text: "Disegna tre cerchi perfetti senza usare strumenti. Osserva come la tua mano impara dal movimento.",
  },
  {
    category: "disegno",
    text: "Schizza la tua mano non dominante usando la mano non dominante.",
  },
  {
    category: "disegno",
    text: "Disegna un autoritratto senza guardare il foglio.",
  },
  {
    category: "disegno",
    text: "Crea un pattern ripetitivo usando solo punti e linee.",
  },
  {
    category: "disegno",
    text: "Disegna il suono della tua musica preferita.",
  },
  {
    category: "mentale",
    text: "Chiudi gli occhi. Respira profondamente 5 volte contando fino a 4 in inspirazione e 6 in espirazione.",
  },
  {
    category: "mentale",
    text: "Osserva 5 cose che puoi vedere, 4 che puoi toccare, 3 che puoi sentire, 2 che puoi odorare, 1 che puoi gustare.",
  },
  {
    category: "mentale",
    text: "Immagina un luogo in cui ti senti completamente rilassato. Descrivi tre dettagli sensoriali.",
  },
  {
    category: "mentale",
    text: "Fai stretching dolce del collo e delle spalle per 2 minuti.",
  },
  {
    category: "mentale",
    text: "Scrivi tre cose per cui sei grato in questo momento.",
  },
  {
    category: "sorpresa",
    text: "Inventa una danza segreta per celebrare piccole vittorie quotidiane.",
  },
  {
    category: "sorpresa",
    text: "Se potessi avere una conversazione di 5 minuti con qualsiasi oggetto, quale sceglieresti e perché?",
  },
  {
    category: "sorpresa",
    text: "Crea un superore il cui potere è completamente inutile ma divertente.",
  },
  {
    category: "sorpresa",
    text: "Scrivi una recensione entusiasta di un oggetto noioso sulla tua scrivania.",
  },
  {
    category: "sorpresa",
    text: "Immagina che i tuoi capelli abbiano una personalità. Descrivila.",
  },
];

export function getRandomActivity(category: string): Activity {
  const categoryActivities = activities.filter(a => a.category === category);
  return categoryActivities[Math.floor(Math.random() * categoryActivities.length)];
}
