let electricGuitars = {
    name: 'Электрогитары',
    imagePath: 'img/guitar.jpg',
    id: 'electricGuitars',
    catalog: [
        {
            name: 'Yamaha Pacifica 611',
            price: 100000,
            imagePath: 'img/yamahapacifica611.jpg'
        },
        {
            name: 'Gibson Les Paul Custom',
            price: 300000,
            imagePath: 'img/gibsonlespaulcustom.jpg'
        }
    ]
};

let bassGuitars = {
    name: 'Бас гитары',
    imagePath: 'img/bass.jpg',
    id: 'bassGuitars',
    catalog: [
        {
            name: 'Cort Rithimic-NAT',
            price: 90000,
            imagePath: 'img/CortRithimic-NAT.jpg'
        },
        {
            name: 'SCHECTER SLS ELITE-4 ATQFB',
            price: 127000,
            imagePath: 'img/SCHECTERSLSELITE-4ATQFB.jpg'
        }
    ]
};

let acousticGuitars = {
    name: 'Акустические гитары',
    imagePath: 'img/acoustic.jpg',
    id: 'acousticGuitars',
    catalog: [
        {
            name: 'TERRIS TF-3802A NA',
            price: 4900,
            imagePath: 'img/TERRISTF-3802ANA.jpg'
        },
        {
            name: 'COLOMBO LF-4100 RD',
            price: 6800,
            imagePath: 'img/COLOMBOLF-4100RD.jpg'
        }
    ]
};

let amps = {
    name: 'Усилители',
    imagePath: 'img/marshall.jpg',
    id: 'amps',
    catalog: [
        {
            name: 'ORANGE CR120H',
            price: 64000,
            imagePath: 'img/ORANGECR120H.jpg'
        },
        {
            name: 'YERASOV BLACKSPACE',
            price: 45000,
            imagePath: 'img/YERASOVBLACKSPACE.jpg'
        }
    ]
};

let synthesizers = {
    name: 'Синтезаторы',
    imagePath: 'img/synthesizer.jpg',
    id: 'synthesizers',
    catalog: [
        {
            name: 'BEHRINGER DEEPMIND 12',
            price: 111111,
            imagePath: 'img/BEHRINGERDEEPMIND12.jpg'
        },
        {
            name: 'YAMAHA NP-12B PIAGGERO',
            price: 40000,
            imagePath: 'img/YAMAHANP-12BPIAGGERO.jpg'
        }
    ]
};

let pedals = {
    name: 'Педали',
    imagePath: 'img/pedals.jpg',
    id: 'pedals',
    catalog: [
        {
            name: 'BOSS BD-2W',
            price: 20000,
            imagePath: 'img/BOSSBD-2W.jpg'
        },
        {
            name: 'BLACKSTAR LT-METAL',
            price: 12000,
            imagePath: 'img/BLACKSTARLT-METAL.jpg'
        },
        {
            name: 'BOSS MT-2',
            price: 15000,
            imagePath: 'img/BOSSMT-2.jpg'
        }
    ]
};

let categories = [electricGuitars, bassGuitars, acousticGuitars, amps, synthesizers, pedals];

for(let i=0; i<categories.length; i++) {
    document.write('<a class="products__a" href="#' + categories[i].id + '"> <div class="product"><img src="' + categories[i].imagePath + '" class="product__image"><h3>' + categories[i].name + '</h3></div></a>');
}

elements = document.getElementsByClassName('products__a');

for(let i=0; i<elements.length;i++){
    elements[i].addEventListener('click', handleClickFunction);
}

function handleClickFunction(event) {
    setTimeout(load, 100);
}

function load() {
    switch(window.location.hash){
        case '#electricGuitars':
            for(let i=0; i<elements.length; i++) {
                elements[i].style.display = 'none';
            }
            showCatalog(electricGuitars);
            break;
        case '#bassGuitars':
            for(let i=0; i<elements.length; i++) {
                elements[i].style.display = 'none';
            }
            showCatalog(bassGuitars);
            break;
        case '#acousticGuitars':
            for(let i=0; i<elements.length; i++) {
                elements[i].style.display = 'none';
            }
            showCatalog(acousticGuitars);
            break;
        case '#amps':
            for(let i=0; i<elements.length; i++) {
                elements[i].style.display = 'none';
            }
            showCatalog(amps);
            break;
        case '#synthesizers':
            for(let i=0; i<elements.length; i++) {
                elements[i].style.display = 'none';
            }
            showCatalog(synthesizers);
            break;
        case '#pedals':
            for(let i=0; i<elements.length; i++) {
                elements[i].style.display = 'none';
            }
            showCatalog(pedals);
            break;
    }
}
let kostyl;
function showCatalog(object) {
    kostyl=object;
    list = object.catalog;
    for(let i=0; i<list.length;i++) {
        document.getElementById('products-main').innerHTML += '<a> <div class="product"><img src="' + list[i].imagePath + '" class="product__image"><h3>' + list[i].name + '</h3> <p>' + list[i].price + ' Руб</p> <button onclick="addToCart(' + i + ')">В корзину</button></div></a>';
    }
}
let cart;
if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
}
else {
    cart = [];
}

function addToCart(a) {
    cart.push(kostyl.catalog[a]);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Товар добавлен в корзину');
}