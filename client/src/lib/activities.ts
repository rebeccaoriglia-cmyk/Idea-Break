export interface Activity {
  text: string;
  category: string;
}

const personaggi = [
  "uno stanco ma determinato",
  "una persona che ha appena scoperto una verità",
  "qualcuno che vuole dire qualcosa ma non trova il coraggio",
  "un ottimista incallito",
  "un tipo sarcastico che non crede a niente"
];

const luoghi = [
  "una fermata dell'autobus vuota",
  "una stanza illuminata solo da una candela",
  "la cima di una montagna",
  "la riva del mare al tramonto",
  "un corridoio troppo silenzioso"
];

const oggetti = [
  "un elastico",
  "un vecchio biglietto stropicciato",
  "una conchiglia",
  "una matita consumata",
  "una chiave senza serratura"
];

function generaElemento(lista: string[]): string {
  return lista[Math.floor(Math.random() * lista.length)];
}

function generaScena(): string {
  const p = generaElemento(personaggi);
  const l = generaElemento(luoghi);
  const o = generaElemento(oggetti);
  return `Personaggio: ${p}\nLuogo: ${l}\nOggetto: ${o}\n\nScrivi una micro-scena usando tutti e tre gli elementi.`;
}

export const activities: Activity[] = [
  {
    category: "creativo",
    text: "Descrivi il rumore del mare come se fossi un ingegnere che lo deve misurare.",
  },
  {
    category: "creativo",
    text: "Scrivi tre parole che profumano di montagna.",
  },
  {
    category: "creativo",
    text: "Inventati un micro-oggetto meccanico che risolve un problema stupido.",
  },
  {
    category: "creativo",
    text: "Scrivi una riga che inizi con: 'Se il mare fosse un codice…'",
  },
  {
    category: "creativo",
    text: "Racconta un tramonto in 8 parole.",
  },
  {
    category: "creativo",
    text: "Inventa una costellazione tutta tua.",
  },
  {
    category: "creativo",
    text: "Scrivi una frase che potresti trovare in un bar marittimo.",
  },
  {
    category: "creativo",
    text: "Inventa un motto per una squadra di arrampicata immaginaria.",
  },
  {
    category: "teatrale",
    text: "Scrivi la prima battuta dell'ingegnere solitario che scopre di essere in scena.",
  },
  {
    category: "teatrale",
    text: "Completa: 'Non avrei mai pensato di tornare su questo palco…'",
  },
  {
    category: "teatrale",
    text: "Inventa un personaggio che parla in monologhi di tre parole.",
  },
  {
    category: "teatrale",
    text: "Scrivi un micro-dialogo tra un attore e la tua versione futura.",
  },
  {
    category: "teatrale",
    text: "Scrivi una riga che direbbe un personaggio appena arrivato dal mare.",
  },
  {
    category: "teatrale",
    text: "Completa un monologo che inizi con: 'Io, qui, oggi…'",
  },
  {
    category: "teatrale",
    text: "Scrivi un momento teatrale senza usare verbi di movimento.",
  },
  {
    category: "teatrale",
    text: "Scrivi l'ultima frase di uno spettacolo chiamato 'Lo Stato delle Cose'.",
  },
  {
    category: "sketch",
    text: "Disegna un'onda usando solo forme geometriche.",
  },
  {
    category: "sketch",
    text: "Disegna una montagna come se fosse un circuito meccanico.",
  },
  {
    category: "sketch",
    text: "Disegna la tua stanza come scenografia teatrale.",
  },
  {
    category: "sketch",
    text: "Disegna un attrezzo che ancora non esiste.",
  },
  {
    category: "sketch",
    text: "Disegna il mare senza staccare la penna.",
  },
  {
    category: "sketch",
    text: "Disegna una creatura immaginaria che arrampica.",
  },
  {
    category: "sketch",
    text: "Disegna un oggetto che rappresenti la concentrazione.",
  },
  {
    category: "sketch",
    text: "Disegna la tua giornata come fosse un grafico tecnico.",
  },
  {
    category: "voce",
    text: "Scrivi una cosa che oggi ti ha fatto sentire vivo.",
  },
  {
    category: "voce",
    text: "Completa: 'Sarebbe più facile se…'",
  },
  {
    category: "voce",
    text: "Scrivi un pensiero che butteresti fuori scena.",
  },
  {
    category: "voce",
    text: "Scrivi un desiderio per le prossime 2 ore.",
  },
  {
    category: "voce",
    text: "La cosa più semplice che puoi fare ora per respirare meglio.",
  },
  {
    category: "voce",
    text: "Descrivi un posto in cui ti sentiresti tranquillo adesso.",
  },
  {
    category: "voce",
    text: "Scrivi una frase che ti direbbe un vecchio amico saggio.",
  },
  {
    category: "voce",
    text: "Completa: 'In questo momento, il mio ritmo è…'",
  },
];

export function getRandomActivity(category: string): Activity {
  if (category === "stanza") {
    return {
      category: "stanza",
      text: generaScena()
    };
  }
  const categoryActivities = activities.filter(a => a.category === category);
  return categoryActivities[Math.floor(Math.random() * categoryActivities.length)];
}
