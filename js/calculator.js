function setNewPrice() {
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    let quantity = Number(document.getElementById('Clothes_Count').value);
    let shirt_options_Div = document.querySelectorAll('#shirt_options input');
    shirt_options_Div.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {price += propPrice;}
        }
    });
    let shoes_s = document.getElementsByName('shoes_s');
    shoes_s.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let cou = document.getElementById('Clothes_Count');
    cou.addEventListener('input',function (){setNewPrice();});
    let s = document.getElementsByName('type');
    s[0].addEventListener('change', function (event) {
        let select = event.target;
        let shoes_r = document.getElementById('shoes_r');
        let shirt_options = document.getElementById('shirt_options');
        if (select.value === '1') {
            shoes_r.style.display = 'none';
            shirt_options.style.display = 'none';
            shoes_sets();
            shirt_options_hide();
            document.getElementById('price').innerHTML =
                'Стоимость товаров составляет: ' + prices.prodTypes[0]*quantity + ' руб.';
        }
        else if (select.value === '2') {
            shirt_options_hide();
            shoes_r.style.display = 'block';
            shirt_options.style.display = 'none';
            document.getElementById('price').innerHTML =
                'Стоимость товаров составляет: ' + prices.prodTypes[1]*quantity + ' руб.';
        }
        else if (select.value === '3') {
            shoes_r.style.display = 'none';
            shirt_options.style.display = 'block';
            shoes_sets();
            document.getElementById('price').innerHTML =
                'Стоимость товаров составляет: ' + prices.prodTypes[2]*quantity + ' руб.';
        } else {
        }
    });
    let price_pr = document.getElementById('price');
    price_pr.innerHTML = 'Стоимость товаров составляет: ' + price * quantity + ' руб.';
}
function getPrices() {
    return {
        prodTypes: [100, 400, 900],
        prodOptions: {
            business: 100,
            football: 70,
            running: 50,
        },
        prodProperties: {
            tie: 133,
            cufflinks: 75,
        },
    };
}
let elm = document.getElementById('shoes_sets');
elm.style.display = 'none';
function shoes_sets() {
    elm.checked = !elm.checked;
}
function shirt_options_hide() {
    document.getElementById('tie').checked = false;
    document.getElementById('cufflinks').checked = false;
}
window.addEventListener('DOMContentLoaded', function () {
    let radioDiv = document.getElementById('shoes_r');
    radioDiv.style.display = 'none';
    let shirt_options = document.getElementById('shirt_options');
    shirt_options.style.display = 'none';
    let s = document.getElementsByName('type');
    let select = s[0];
    select.addEventListener('change', function () {setNewPrice();});
    let shoes_s = document.getElementsByName('shoes_s');
    shoes_s.forEach(function (radio) {
        radio.addEventListener('change', function () {setNewPrice();});
    });
    let sniper_option = document.querySelectorAll('#shirt_options input');
    sniper_option.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {setNewPrice();});
    });
    setNewPrice();
});