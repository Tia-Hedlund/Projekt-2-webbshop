const kundvagnIkon = document.getElementById('cart');

const kundvagnPil = document.getElementById('kundvagn-pil')

const kundvagn = document.getElementById('kundvagn');


kundvagnIkon.addEventListener('click', function(){
    kundvagn.style.display = 'block';
});

kundvagnPil.addEventListener('click', function() {
    kundvagn.style.display = 'none';
});


