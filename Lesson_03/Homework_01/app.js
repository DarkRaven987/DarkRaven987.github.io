
	var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 	veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 	esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	var alphavet = ['a','b','c','d','e','f','g','h','i','g','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
	var symbol = ""	
	var arr_str = str.split(' ');	
	var word;

	function symbolInput(){
		var	symb=isSymbolOk(prompt("Enter a symbol to change to its upper case:"));
		return symb;	
	}

	function isSymbolOk(a){
		var res = false;
		for(var i=0;i<alphavet.length;i++){
			if (a===alphavet[i]){
				res=true;
			}
		}
		if(res){
			return a;
		}else{
			a = prompt("Data is wrong. Enter a letter in a lower case!");
			isSymbolOk(a);
		}
	}
	symbol = symbolInput();

	for(i=0;i<arr_str.length;i++){
		    
		word = arr_str[i].split(symbol);
		    
		arr_str[i] = word.join(symbol.toUpperCase());
		
	}
	
	console.log(arr_str.join(' '));



