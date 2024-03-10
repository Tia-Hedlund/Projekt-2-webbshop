
// refererar till element i DOM-trädet
const kundvagnIkon = document.getElementById('kundvagnIkon');
const kundvagnPil = document.getElementById('kundvagn-pil')
const kundvagn = document.getElementById('kundvagn');
let divKundvagn = document.querySelector("#divKundvagn");

// skapar array för produkter i kundvagnen
let arrayProduktKundvagn = [];

// Öppna och stäng kundvagnen
kundvagnIkon.addEventListener('click', function(){
    kundvagn.style.display = 'block'; 
});

kundvagnPil.addEventListener('click', function() {
    kundvagn.style.display = 'none';
});

// Funktion för att lägga till en produkt i kundvagnen
function add(namn, pris){

    let produkt = {
        pris: pris, 
        namn: namn,
    }
    arrayProduktKundvagn.push(produkt);
    console.log(arrayProduktKundvagn);
    addToOl();
    sparaKundvagnILocal();
}

// Funktion för att spara kundvagnen i local storage
function sparaKundvagnILocal() {
    localStorage.setItem('KundvagnLocal', JSON.stringify(arrayProduktKundvagn))
}

// Funktion som ser till att kundvagnen hämtas från local storage när man laddar sidan
function hämtaFrånLocal(){
    const kundvagnFrånLocal = localStorage.getItem('KundvagnLocal');
    if (kundvagnFrånLocal){
        arrayProduktKundvagn = JSON.parse(kundvagnFrånLocal)
        addToOl();
    }
}

// funktion skapar html element för produkter i kundvagnen
function addToOl (){
    divKundvagn.innerHTML = ''; // Rensar befintliga varor

    
    arrayProduktKundvagn.forEach(item => {
        // lägger till en div produkt i DOM-trädet
        let produkt = document.createElement("div");

        // Skapar ett element span för produktens namn och ger dem klassen "produktNamn"
        let namnSpan = document.createElement("span");
        namnSpan.textContent = `${item.namn}`;
        namnSpan.classList.add("produktNamn");

        // Skapar ett element span för produktens pris och ger dem klassen "produktPris"
        let prisSpan = document.createElement("span");
        prisSpan.textContent = `${item.pris} kr`;
        prisSpan.classList.add("produktPris");

        // Adderar span för pris och namn i diven produkt
        produkt.appendChild(namnSpan);
        produkt.appendChild(prisSpan);

        // Diven produkt får egen klass och adderas till diven divKundvagn
        produkt.classList.add("produktIKundvagn");
        divKundvagn.appendChild(produkt);
    })
}

// Funktion för att tömma kundvagnen och local storage
function tömKundvagn(){
    arrayProduktKundvagn = [];
    localStorage.clear();
    
    var kundvagnElement = document.getElementById("divKundvagn");
    kundvagnElement.innerHTML = "";
}

// Kallar funktionen att hämta kundvagn från local storage
hämtaFrånLocal();



