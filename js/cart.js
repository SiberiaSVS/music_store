let cart = JSON.parse(localStorage.getItem('cart'));

function clearCart() {
    localStorage.removeItem('cart');
    location.reload();
}

for(let i=0; i<cart.length;i++) {
    document.getElementById('cart-table').innerHTML += '<tr><td>' + cart[i].name + '</td> <td>' + cart[i].price + ' Руб.</td> <td><a href="#" onclick="removeFromCart(' + i + ')">Удалить</a></td> </tr>';
}
    let sum = 0;
    for(let i=0; i<cart.length;i++) {
        sum += parseInt(cart[i].price);
    }
    document.getElementById('sum').innerHTML += sum + ' Руб';

function removeFromCart(a) {
    cart.splice(a,1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}