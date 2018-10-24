var li, a, h1, activeTemp;
var navigation = document.getElementById("navigation");
var Converter = document.getElementById("converter");
var inputText = document.getElementById("inputText"); 
var outputText = document.getElementById("outputText"); 

Converter.onclick = () => {
    var input = inputText.value.split(' ');
    for(var i=0; i<input.length;i++){
        input[i] = input[i].toLowerCase();
        if(input[i]==" "){
            input.length = input.length - 1; 
        }
    }
    outputText.value = input.join('-');
}

//var menu = ["Home","Catalog","About us","Contacts","Portfolio", "Blog"]

var menu = [
    {"name": "Home", "href": "index.html"},
    {"name": "Catalog", "href": "catalog.html"},
    {"name": "About us", "href": "about_us.html"},
    {"name": "Contacts", "href": "contacts.html"},
    {"name": "Portfolio", "href": "portfolio.html"},
    {"name": "Blog", "href": "blog.html"}
]

for(var i=0; i<menu.length;i++){
    li = document.createElement("li");
    a = document.createElement("a");
    a.innerHTML = menu[i].name;
    a.setAttribute("class","nav-link");
    a.setAttribute("href",menu[i].href);
    li.setAttribute("class","nav-item");
    li.appendChild(a);
    navigation.appendChild(li);

    if(document.location.href.indexOf(menu[i].href)!= -1){
        h1 = document.getElementById("h1");
        h1.innerHTML = menu[i].name;
        document.getElementsByClassName("nav-item")[i].setAttribute("class","active");
    }
}



