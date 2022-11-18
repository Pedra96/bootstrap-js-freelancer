/*A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
CONSIDERAZIONI FINALI e BONUS:
Mentre come bonus javascript dovete far diventare il codice sconto inserito di colore rosso, qualora quello inserito non sia valido.
Inoltre se il codice fornito è valido, eliminare quel codice dall’elenco dei codici sconto disponibili, il codice sconto non sarà più usabile.
Avete tutta la giornata a disposizione, fino alle 18: quello che viene committato dopo le 18 non verrà valutato. Ricordatevi di pushare frequentemente per consegnare il lavoro in modo incrementale. Se vi trovate in difficoltà potete aprire ticket: fino alle 13 a dalle 15 alle 18 avete il supporto degli insegnanti.
Buon lavoro!
Super Bonus: Creare una struttura dati adeguata per contenere tutte le informazioni relative ai progetti presenti nella sezione “Portfolio”. Rimuovere quindi le card dal markup nel file html e stamparle in pagina dinamicamente tramite l’utilizzo di JavaScript*/


let arraySconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let sitesPortfolio = [
    {
        nome: "Cabin Website",
        image: "img/portfolio/cabin.png"
    },
    {
        nome: "Cake Website",
        image: "img/portfolio/cake.png"
    },
    {
        nome: "Circus Website",
        image: "img/portfolio/circus.png"
    },
    {
        nome: "Game Website",
        image: "img/portfolio/game.png"
    },
    {
        nome: "Safe Website",
        image: "img/portfolio/safe.png"
    },
    {
        nome: "Submarine Website",
        image: "img/portfolio/submarine.png"
    }
]
website_Init_()

//----------------------------------------------Funzioni---------------------------------------
function website_Init_(){
    for (let site of sitesPortfolio) {
    document.getElementById("portfolioContainer").innerHTML += `
    <div class="col col-md-6 col-lg-4">
    <div class="card mb-5">
    <img src=${site.image} alt="Cake picture">
    <div class="card-body">
    <p class="fs-3">Cake Website</p>
    <p class="card-text">${site.nome}</p>
    <a href="#" class="btn btn-primary me-3">Preview</a>
    <a href="#" class="btn border-info text-info">Visit site</a>
    `
}
}

function submitFunction(event) {
    event.preventDefault();
    calcoloPrezzo();

}

function calcoloPrezzo() {
    let prezzoBackend = 20.50;
    let prezzoFrontEnd = 15.30;
    let prezzoProjectAnalysis = 33.60;
    let valoreLavoro = document.getElementById("sceltaLavoro").value;
    let hours = document.getElementById("hours").value;
    let prezzofinale = 0;
    document.getElementById("sceltaLavoro").classList.remove("bg-danger", "text-white");
    if (valoreLavoro == 1) {
        (prezzofinale = prezzoBackend * hours).toFixed(2);
    } else if (valoreLavoro == 2) {
        prezzofinale = (prezzoFrontEnd * hours).toFixed(2);
    } else if (valoreLavoro == 3) {
        prezzofinale = (prezzoProjectAnalysis * hours).toFixed(2);
    } else {
        document.getElementById("sceltaLavoro").classList.add("bg-danger", "text-white");
    }
    document.getElementById("prezzoFinale").innerHTML = `<b>${calcoloSconto(prezzofinale)}€</b>`;
}


function calcoloSconto(value) {
    let sconto = 0.75;
    let scontoInput = document.getElementById("sconto").value;
    console.log(scontoInput);
    for (let scontoUtente of arraySconti) {
        if (scontoUtente == scontoInput) {
            document.getElementById("sconto").classList.remove("bg-danger", "text-white");
            console.log(arraySconti);
            arraySconti.splice(arraySconti.indexOf(scontoInput), 1);
            console.log(arraySconti)
            return value = (value * sconto).toFixed(2);
        }
    } document.getElementById("sconto").classList.add("bg-danger", "text-white");
    return value;
}