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
        let produkt = document.createElement("div");

        let namnSpan = document.createElement("span");
        namnSpan.textContent = `${item.namn}`;
        namnSpan.classList.add("produktNamn");

        let prisSpan = document.createElement("span");
        prisSpan.textContent = `${item.pris} kr`;
        prisSpan.classList.add("produktPris");

        produkt.appendChild(namnSpan);
        produkt.appendChild(prisSpan);

        produkt.classList.add("produktIKundvagn");
        divKundvagn.appendChild(produkt);
    })
}

window.onload = hämtaFrånLocal();


