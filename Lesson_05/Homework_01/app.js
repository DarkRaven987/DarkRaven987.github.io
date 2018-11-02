var products = [
	{"name": "Snikers #1", "price": 125.22, "image": "bg-01.jpg", "description": "Some kid of crosovki that looks pretty good, but who knows how they where created"},
	{"name": "Snikers #2", "price": 180.66, "image": "bg-02.jpg", "description": "Some kid of crosovki that looks pretty good, but who knows how they where created"},
	{"name": "Snikers #3", "price": 240.00, "image": "bg-03.jpg", "description": "Some kid of crosovki that looks pretty good, but who knows how they where created"},	
	{"name": "Snikers #4", "price": 100.99, "image": "bg-04.jpg", "description":"This is a cool snikers for your sport life"},	
	{"name": "Snikers #5", "price": 199.99, "image": "bg-05.jpg", "description":"This is a cool snikers for your sport life"},
	{"name": "Snikers #6", "price": 299.99, "image": "bg-06.jpg", "description":"This is a cool snikers for your sport life"},
	{"name": "Snikers #7", "price": 302.02, "image": "bg-07.jpg", "description":"This is a cool snikers for your sport life"},
	{"name": "Snikers #8", "price": 145.01, "image": "bg-08.jpg", "description":"This is a cool snikers for your sport life"}
];

function createNewElement (tag, innerContent=null, classString = null, attr = null) {
	var el = document.createElement(tag);

	el.innerHTML = (innerContent)? innerContent : "";
	el.className = (classString)? classString : "";
	if(attr){
		attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
	}
	return el;
}

function createNewCard(product){
	var link = createNewElement("a", "Add to cart", "btn btn-primary", [{"name":"href", "value":"#"}]);
	var p = createNewElement("p", product.description, "card-text");
	var title = createNewElement("h5", product.name, "card-title");
	var card_price = createNewElement("h3",product.price+"$","card-price");
	var card_body = createNewElement("div", null, "card-body");

	card_body = attachChildrenToParent(createNewElement("div",null,"card-body"),[title,p,card_price,link]);

	var productImage = createNewElement("img", null,"card-img-top", [{"name": "src", "value": "./images/"+product.image},{"name": "alt", "value": product.name}]);

	var wholeCard = createNewElement("div", null,"card");
	wholeCard = attachChildrenToParent(createNewElement("div",null,"card"),[productImage, card_body]);
	
	var cardContainer = createNewElement("div", null,".col-lg-3 col-md-6 mb-2 catalog-item");
	cardContainer = attachChildrenToParent(createNewElement("div", null,".col-lg-3 col-md-6 mb-2 catalog-item"),[wholeCard]);

	return cardContainer;
}

function attachChildrenToParent(html, array_el) {
	array_el.map((el)=> html.appendChild(el));
	return html;
}

var catalog = document.getElementById("prodCatalog");
var item_counter = document.getElementById("item-counter");
item_counter.innerHTML = products.length;

products.map((el)=> catalog.appendChild(createNewCard(el)));