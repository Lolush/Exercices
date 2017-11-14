var shoppingCart = [];
function addToCart(storeItemName, storeItemPrice) {
	var object = { name: storeItemName, price: storeItemPrice };
	shoppingCart.push(object);
}

addToCart('dress', '3 shekels');
addToCart('skirt', '4 shekels');
addToCart('shoes', '5 shekels');

function priceCheck(nameToCheck) {
	for (var i = 0; i < shoppingCart.length; i++) {
		if (nameToCheck === shoppingCart[i].name) {
			console.log('' + nameToCheck +' : ' + shoppingCart[i].price +'');
			return;
		}
	}
	console.log('The searched item '+ nameToCheck +' is not in the shopping cart array!');
}

priceCheck('dress');
priceCheck('tomato');
priceCheck('shoes');
