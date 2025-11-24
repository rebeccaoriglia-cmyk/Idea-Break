export interface Activity {
  text: string;
  category: string;
}

const personaggi = [
  "uno stanco ma determinato",
  "una persona che ha appena scoperto una verità",
  "qualcuno che vuole dire qualcosa ma non trova il coraggio",
  "un ottimista incallito",
  "un tipo sarcastico che non crede a niente",
  "qualcuno che sta mentendo perfettamente",
  "una persona che non sa come andare via",
  "un traduttore di silenzi"
];

const luoghi = [
  "una fermata dell'autobus vuota",
  "una stanza illuminata solo da una candela",
  "la cima di una montagna",
  "la riva del mare al tramonto",
  "un corridoio troppo silenzioso",
  "una stazione ferroviaria abbandonata",
  "un caffè alle 3 del mattino",
  "una casa che non riconosci"
];

const oggetti = [
  "un elastico",
  "un vecchio biglietto stropicciato",
  "una conchiglia",
  "una matita consumata",
  "una chiave senza serratura",
  "una moneta dal valore sconosciuto",
  "un pezzo di carta con una sola parola",
  "una foto senza data"
];

function generaElemento(lista: string[]): string {
  return lista[Math.floor(Math.random() * lista.length)];
}

function generaScena(): string {
  const p = generaElemento(personaggi);
  const l = generaElemento(luoghi);
  const o = generaElemento(oggetti);
  return `Scrivi una scena usando tutti e tre gli elementi\n\nPersonaggio:\n${p}\n\nLuogo:\n${l}\n\nOggetto:\n${o}`;
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
    category: "creativo",
    text: "Descrivi un colore che non esiste usando solo emozioni.",
  },
  {
    category: "creativo",
    text: "Inventa il nome di una stanza che non dovresti visitare.",
  },
  {
    category: "creativo",
    text: "Scrivi un'istruzione per un oggetto che non è mai stato creato.",
  },
  {
    category: "creativo",
    text: "Disegna con le parole il tuo primo ricordo di acqua.",
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
    text: "Scrivi un dialogo tra te e la tua versione futura.",
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
    category: "teatrale",
    text: "Crea una battuta per un personaggio che esiste solo nei martedì.",
  },
  {
    category: "teatrale",
    text: "Scrivi un monologo di 3 righe dove il personaggio non parla di sé.",
  },
  {
    category: "teatrale",
    text: "Completa: 'Se potessi scegliere una sola parola per urlare in scena…'",
  },
  {
    category: "teatrale",
    text: "Scrivi il primo dialogo tra due personaggi che non si incontrano mai.",
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
    category: "sketch",
    text: "Disegna il suono di una risata senza usare una risata.",
  },
  {
    category: "sketch",
    text: "Disegna una mappa del tuo spazio più intimo.",
  },
  {
    category: "sketch",
    text: "Disegna un'architettura dove le mura pensano.",
  },
  {
    category: "sketch",
    text: "Disegna il 'prima' e il 'dopo' di una scelta importante.",
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
  {
    category: "voce",
    text: "Scrivi una lettera a una parte di te che non conosci.",
  },
  {
    category: "voce",
    text: "Descriviti come se raccontassi di un amico a qualcuno che non lo conosce.",
  },
  {
    category: "voce",
    text: "Scrivi il consiglio che avresti voluto ricevere stamattina.",
  },
  {
    category: "voce",
    text: "Completa: 'La cosa che mi rende più fragile è…'",
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
