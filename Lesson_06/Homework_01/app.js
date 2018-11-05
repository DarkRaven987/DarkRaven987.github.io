let products = [
	{"name": "Snikers #1", "price": 103.50, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #2", "price": 152.14, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #3", "price": 202.22, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #4", "price": 240.00, "image": "bg-04.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #5", "price": 180.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #6", "price": 186.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	
	{"name": "Snikers #7", "price": 111.60, "image": "bg-07.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #8", "price": 169.64, "image": "bg-08.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "LeBron 16 #9", "price": 215.20, "image": "bg-09.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Nike Zoom KD11 #10", "price": 245.00, "image": "bg-10.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #11", "price": 109.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #12", "price": 198.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice beautiful and quality"},
  
	{"name": "Snikers #13", "price": 128.69, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #14", "price": 179.00, "image": "bg-02.jpg", "description": "This is not very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #15", "price": 260.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #16", "price": 301.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
  ];

  const per_page = 6;
  let current_page = 0;

  const search_button = document.getElementById("search");
  var pagination_buttons = document.getElementsByClassName("page-link");
  let search_textbox = document.getElementById("s");

function createPagination(array_products, index){
	var pagination = document.getElementById("pagination");
	pagination.innerHTML="";
	var link;
	var li;
	var ul = createNewElement("ul",null,"pagination justify-content-center pagination-lg");
	var activeINdex = 0;
	console.log("activeIndex is "+index)

	for( let i=0;i<Math.ceil(array_products.length/per_page);i++){
		link = createNewElement("a", i+1, "page-link",[{"name":"href", "value":"#"},{"name":"data-link", "value": i}]);
		if(i===index){
			li=attachChilderToParent(createNewElement("li",null,"page-item active"),[link]);
		}else{
		li=attachChilderToParent(createNewElement("li",null,"page-item"),[link]);
		}
		ul.appendChild(li);
	}
	pagination.appendChild(ul);
	
	Array.from(pagination_buttons).map((el) => {
		el.addEventListener("click", (e) => {
			current_page=Number(e.target.dataset.link);
			activeIndex = Number(e.target.innerHTML);
			renderProducts(array_products);
			createPagination(array_products, activeIndex-1);
		});
	});
}


function createNewElement(tag, innerContent=null, classStr=null, attr=null){
	var el = document.createElement(tag);
	el.innerHTML = (innerContent)?innerContent:"";
	el.className = (classStr)?classStr:"";

	if(attr){
		attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
	}

	return el;
}

function createCard(product){
	var link = createNewElement("a", "Add to cart", "btn btn-primary",[{"name":"href", "value":"#"}]);
	var p = createNewElement("p", product.description, "card-text");
	var title = createNewElement("h5", product.name, "card-title");

	var cardBody = attachChilderToParent(createNewElement("div", null, "card-body"), [title,p,link]);

	var image = createNewElement("img", null, "card-img-top", [{"name":"src", "value":"images/"+product.image},{"name":"alt", "value":product.name}]);

	var card = attachChilderToParent(createNewElement("div", null, "card"), [image,cardBody]);

	var catalogItem = attachChilderToParent(createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);

	return catalogItem;
}

function attachChilderToParent(html, array_el){
	array_el.map((el)=>html.appendChild(el));
	return html;
}

var catalog = document.getElementById("catalog");

function startFromProduct(){
	return current_page*per_page;
}
function isLastProduct(i,array_products){
	return i< current_page*per_page+per_page && i<array_products.length;
}

function renderProducts(array_products){
	catalog.innerHTML="";
	for(var i = startFromProduct(); isLastProduct(i,array_products);i++){
		catalog.appendChild(createCard(array_products[i]));
	}
}

function filterAndRenderProducts() {
	let search_products = [];
	let s = document.getElementById("s").value;
	const reg = RegExp(s);
	search_products = products.filter((el)=>reg.test(el.description));
	current_page=0;
	renderProducts(search_products);
	createPagination(search_products);
}

search_button.addEventListener("click", (e) =>{
	filterAndRenderProducts();	
});

search_textbox.addEventListener("keypress", (e) =>{
	if(e.keyCode==13){
		filterAndRenderProducts();
	}
})

renderProducts(products);
createPagination(products,0);

this.addEventListener("keypress", (e)=>{
	/*console.log(e.keyCode);
	if(e.keyCode==122){
		console.log("Message will be closed");
	}*/
})





















// *.search("") - поиск фрагмента в стринге
/*
var str = "hello there"
undefined
str.match("ll");
["ll", index: 2, input: "hello there", groups: undefined]0: "ll"groups: undefinedindex: 2input: "hello there"length: 1__proto__: Array(0)]
str.match(/ll/g);
["ll"]
*/
