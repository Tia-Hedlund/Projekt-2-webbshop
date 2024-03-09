const kundvagnIkon = document.getElementById('cart');
const kundvagnPil = document.getElementById('kundvagn-pil')
const kundvagn = document.getElementById('kundvagn');
let divKundvagn = document.querySelector("#divKundvagn");

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
    addToOl();
    sparaKundvagnILocal();
}

let jsonLi;

function sparaKundvagnILocal() {
    localStorage.setItem('KundvagnLocal', JSON.stringify(arrayProduktKundvagn))
}

function hämtaFrånLocal(){
    const kundvagnFrånLocal = localStorage.getItem('KundvagnLocal');
    if (kundvagnFrånLocal){
        arrayProduktKundvagn = JSON.parse(kundvagnFrånLocal)
        addToOl();
    }
}

/*skapa en array för artiklarna*/
function addToOl (){
    divKundvagn.innerHTML = ''; // Rensar befintliga varor

    /*lägg till lista grej index*/ 
    arrayProduktKundvagn.forEach(item => {
        let liProdukt = document.createElement("div");
        liProdukt.textContent = `${item.namn} ${item.pris}kr`;

        liProdukt.classList.add("produktIKundvagn");
        divKundvagn.appendChild(liProdukt);

    })
}

window.onload = hämtaFrånLocal();


