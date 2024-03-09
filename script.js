const kundvagnIkon = document.getElementById('cart');
const kundvagnPil = document.getElementById('kundvagn-pil')
const kundvagn = document.getElementById('kundvagn');
let olKundvagn = document.querySelector("#olKundvagn");

let arrayProduktKundvagn = [];

// Öppna och stäng kundvagnen
kundvagnIkon.addEventListener('click', function(){
    kundvagn.style.display = 'block';
});

kundvagnPil.addEventListener('click', function() {
    kundvagn.style.display = 'none';
});

function add(namn, pris){
    let produkt = {
        pris: pris, 
        namn: namn,

    }
    arrayProduktKundvagn.push(produkt);
    console.log(arrayProduktKundvagn);
}

let jsonLi;
let jsonVärde;

/*skapa en array för artiklarna*/

function addToOl (){
    /*lägg till lista grej index*/ 
    let liProdukt = document.createElement("li");
    liProdukt.textContent = namn+pris;

    olKundvagn.appendChild(liProdukt);

    jsonLi = JSON.stringify(arrayProduktKundvagn);
    window.localStorage.setItem(521, jsonLi);
}

function hämtaFrånLocal(){
    jsonVärde = window.localStorage.getItem(521);
    if (jsonVärde){
        arrayProduktKundvagn = JSON.parse(jsonVärde);
        addToOl();
    }
}

hämtaFrånLocal();













function createCartItem(name, price, imgSrc) {
    return `
    <div class="bild">
        <img src="${imgSrc}" alt="">
    </div>
    <div class="vara-text">
        <div class="name">${name}</div>
        <div class="pris">${price}</div>
    </div>
    <button>TA BORT</button>
    `;
}


