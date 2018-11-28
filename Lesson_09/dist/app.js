/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/*! exports provided: Builder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Builder\", function() { return Builder; });\nclass Builder{\r\n\tstatic createNewElement(tag, innerContent=null, classStr=null, attr=null){\r\n\t\tvar el = document.createElement(tag);\r\n\t\tel.innerHTML = (innerContent)?innerContent:\"\";\r\n\t\tel.className = (classStr)?classStr:\"\";\r\n\t\r\n\t\tif(attr){\r\n\t\t\tattr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));\r\n\t\t}\r\n\t\r\n\t\treturn el;\r\n\t}\r\n\r\n\tstatic attachChilderToParent(html, array_el){\r\n\t\tarray_el.filter(el=>!!el).map((el)=>html.appendChild(el));\r\n\t\treturn html;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/builder.js?");

/***/ }),

/***/ "./src/catalog.js":
/*!************************!*\
  !*** ./src/catalog.js ***!
  \************************/
/*! exports provided: Catalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Catalog\", function() { return Catalog; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _page_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_data */ \"./src/page_data.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n\r\n\r\n\r\n\r\n\r\nclass Catalog{\r\n\tconstructor(per_page){\r\n\t\tthis.element = document.getElementById(\"catalog\");\r\n\t\tthis.per_page = per_page;\r\n\t}\r\n\r\n\tcreateCard(product, index){\r\n\t\tlet link = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", \"Add to cart\", \"btn btn-primary\",[{\"name\":\"href\", \"value\":\"#\"}]);\r\n\t\tlet show_more = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", \"More\", \"btn btn-success product_more\",[{\"name\":\"href\", \"value\":\"#\"}, {\"name\":\"data-id\", \"value\":index}]);\r\n\t\tlet p = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"p\", product.description, \"card-text\");\r\n\t\tlet title = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"h5\", product.name, \"card-title\");\r\n\t\r\n\t\tlet cardBody = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"card-body\"), [title,p,link,show_more]);\r\n\t\r\n\t\tlet image = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"img\", null, \"card-img-top\", [{\"name\":\"src\", \"value\":\"images/\"+product.image},{\"name\":\"alt\", \"value\":product.name}]);\r\n\t\r\n\t\tlet card = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"card\"), [image,cardBody]);\r\n\t\r\n\t\tlet catalogItem = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"col-lg-3 col-md-6 mb-2 catalog-item\"), [card]);\r\n\t\r\n\t\treturn catalogItem;\r\n\t}\r\n\r\n\tstartFromFirstProducts(){\r\n\t\treturn this.current_page*this.per_page;\r\n\t}\r\n\r\n\tisLastProductInPage(i,array_products){\r\n\t\treturn i < this.current_page*this.per_page + this.per_page && i < array_products.length;\r\n\t}\r\n\r\n\trenderProducts(array_products, current_page){\r\n\t\tthis.current_page = current_page;\r\n\t\tthis.element.innerHTML = \"\";\r\n\t\tfor(let i = this.startFromFirstProducts(); this.isLastProductInPage(i,array_products); i++){\r\n\t\t\tthis.element.appendChild(this.createCard(array_products[i],i));\r\n\t\t}\r\n\t\tconst pagination = new _pagination__WEBPACK_IMPORTED_MODULE_3__[\"Pagination\"](this.per_page);\r\n\t\tpagination.createPagination(_data__WEBPACK_IMPORTED_MODULE_1__[\"Data\"].getProducts(), _page_data__WEBPACK_IMPORTED_MODULE_2__[\"PageData\"].getCurrentPage());\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/catalog.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Data\", function() { return Data; });\nconst load_products = [\r\n\t{\"name\": \"Snikers #1\", \"price\": 103.50, \"image\": \"bg-01.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #2\", \"price\": 152.14, \"image\": \"bg-02.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #3\", \"price\": 202.22, \"image\": \"bg-03.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #4\", \"price\": 240.00, \"image\": \"bg-04.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #5\", \"price\": 180.30, \"image\": \"bg-05.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #6\", \"price\": 186.50, \"image\": \"bg-06.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t\r\n\t{\"name\": \"Snikers #7\", \"price\": 111.60, \"image\": \"bg-07.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #8\", \"price\": 169.64, \"image\": \"bg-08.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"LeBron 16 #9\", \"price\": 215.20, \"image\": \"bg-09.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Nike Zoom KD11 #10\", \"price\": 245.00, \"image\": \"bg-10.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #11\", \"price\": 109.30, \"image\": \"bg-05.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #12\", \"price\": 198.50, \"image\": \"bg-06.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n  \r\n\t{\"name\": \"Snikers #13\", \"price\": 128.69, \"image\": \"bg-01.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #14\", \"price\": 179.00, \"image\": \"bg-02.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n\t{\"name\": \"Snikers #15\", \"price\": 260.20, \"image\": \"bg-03.jpg\", \"description\": \"This is very cool snikers. Nice beautifull and quality\"},\r\n\t{\"name\": \"Snikers #16\", \"price\": 301.20, \"image\": \"bg-03.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\r\n];\r\n\r\nconst load_users = [\r\n\t{\"login\": \"user01@gmail.com\", \"password\": \"user01\"},\r\n    {\"login\": \"user02@gmail.com\", \"password\": \"user02\"},\r\n    {\"login\": \"user03@gmail.com\", \"password\": \"user03\"},\r\n    {\"login\": \"user04@gmail.com\", \"password\": \"user04\"},\r\n    {\"login\": \"user05@gmail.com\", \"password\": \"user05\"},\r\n    {\"login\": \"user06@gmail.com\", \"password\": \"user06\"},\r\n];\r\n\r\nlet products = [];\r\n\r\nclass Data{\r\n\r\n\tstatic loadProducts(){\r\n\t\treturn load_products;\r\n\t}\r\n\r\n\tstatic getProducts(){\r\n\t\treturn products;\r\n\t}\r\n\r\n\tstatic setProducts(data){\r\n\t\treturn products = data;\r\n\t}\r\n\r\n\tstatic loadUsers(){\r\n    \r\n        localStorage.setItem(\"myKey\", load_users);\r\n    }\r\n\r\n    static getUsers(){\r\n        return load_users;\r\n    }\r\n\t\r\n}\r\n\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _page_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_data */ \"./src/page_data.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n/* harmony import */ var _pageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageTitle */ \"./src/pageTitle.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].loadUsers();\r\nconst isLogin = localStorage.getItem(\"isLogin\");\r\n\r\nnew _navigation__WEBPACK_IMPORTED_MODULE_6__[\"Navigation\"](\"pageNav\").renderHtmlElement(isLogin);\r\nnew _pageTitle__WEBPACK_IMPORTED_MODULE_5__[\"PageTitle\"](\"pageTitle\").renderHtmlElement(isLogin);\r\n\r\n\r\nswitch (location.hash) {\r\n\tcase \"#logout\":\r\n        localStorage.removeItem(\"isLogin\");\r\n        location = location.origin;\r\n\tcase \"#cart\":\r\n        console.log(location.hash);\r\n\tdefault:\r\n        if(isLogin){\r\n            const per_page = 6;\r\n\r\n            new _catalog__WEBPACK_IMPORTED_MODULE_2__[\"Catalog\"](per_page).renderProducts(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].setProducts(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].loadProducts()), _page_data__WEBPACK_IMPORTED_MODULE_1__[\"PageData\"].getCurrentPage());\r\n            new _pagination__WEBPACK_IMPORTED_MODULE_3__[\"Pagination\"](per_page).createPagination(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].getProducts(), _page_data__WEBPACK_IMPORTED_MODULE_1__[\"PageData\"].getCurrentPage());\r\n        }else{\r\n            new _login__WEBPACK_IMPORTED_MODULE_4__[\"Login\"]().createHtmlElement();\r\n        }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\r\n\r\n\r\nvar usersDB = _data_js__WEBPACK_IMPORTED_MODULE_1__[\"Data\"].getUsers();\r\n\r\nclass Login{\r\n\tconstructor(per_page){\r\n\t\tthis.element = document.getElementById(\"login_container\");\r\n\t}\r\n\r\n\tcreateHtmlElement(){\r\n\r\n\t\tconst labelEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"label\", \"Email address\", null,[{\"name\":\"for\", \"value\":\"exampleInputEmail1\"}]);\r\n\t\tconst emailInput = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", null, \"form-control\",[\r\n\t\t\t{\"name\":\"id\", \"value\":\"exampleInputEmail1\"},\r\n\t\t\t{\"name\":\"placeholder\", \"value\":\"Enter email\"}\r\n\t\t]);\r\n\t\tconst small = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"small\", \"We'll never share your email with anyone else.\", \"form-text text-muted\",[{\"name\":\"id\", \"value\":\"emailHelp\"}]);\r\n\r\n\t\tlet divEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-group\"), [labelEmail,emailInput,small]);\r\n\r\n\r\n\t\tconst labelPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"label\", \"Password\", null,[{\"name\":\"for\", \"value\":\"exampleInputPassword1\"}]);\r\n\t\tconst passInput = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", null, \"form-control\",[\r\n\t\t\t{\"name\":\"id\", \"value\":\"exampleInputPassword1\"},\r\n\t\t\t{\"name\":\"placeholder\", \"value\":\"Password\"},\r\n\t\t\t{\"name\":\"type\", \"value\":\"password\"},\r\n\t\t]);\r\n\r\n\t\tlet divPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-group\"), [labelPass,passInput]);\r\n\r\n\t\tconst button = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"button\", \"Login\", \"btn btn-primary\",[{\"name\":\"type\", \"value\":\"submit\"}]);\r\n\r\n\t\tlet form = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"form\", null, null, [{\"name\":\"id\", \"value\":\"login_form\"}]), [divEmail, divPass, button]);\r\n\r\n\t\tthis.element.appendChild(form);\r\n\r\n\t\tdocument.getElementById(\"login_form\").addEventListener(\"submit\", this.submit, false);\r\n\t}\r\n\r\n\tsubmit(e){\r\n\t\t\r\n\t\tconsole.log(\"submit\");\r\n\t\t\r\n\t\tlet emailInput = document.getElementById(\"exampleInputEmail1\").value;\r\n\t\tlet passInput = document.getElementById(\"exampleInputPassword1\").value;\r\n\t\tlet isLogin = false;\r\n\t\t\r\n\t\tusersDB.map(el => {\r\n            if ((el.login == emailInput)&&(el.password == passInput)){\r\n\t\t\t\tisLogin = true;\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t\tif(isLogin){\r\n\t\t\tlocalStorage.setItem(\"isLogin\", true);\r\n\t\t}else{\r\n\t\t\talert(\"Something`s not right...\");\r\n\t\t}\r\n\r\n\t\t// console.log(/[a-zA-Z]{2,12}/.test(e.target[0].value));\r\n\r\n\r\n\t\t// Validation\r\n\r\n\t\t//localStorage.setItem(\"isLogin\", true);\r\n\t\t//location = location.origin;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/login.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n\r\n\r\nclass Navigation {\r\n    constructor(id){\r\n        this.element = document.getElementById(id);\r\n    }\r\n\r\n    createHtmlElement(isLogin){\r\n\r\n        const brandLink = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", \"E-Store\", \"navbar-brand\",[{name:\"href\", value:\"/\"}]);\r\n        const spanToggler = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"span\", null, \"navbar-toggler-icon\");\r\n        const buttonToggler = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"button\", null, \"navbar-toggler\", [{name:\"id\", value:\"buttonToggler\"}]), [spanToggler]);\r\n\r\n        const menuList = [\r\n            {title:\"Home\", link: \"#\"},\r\n            {title:\"Link\", link: \"#\"},\r\n        ];\r\n\r\n        if(isLogin){\r\n            menuList.push({title:\"Logout\", link: \"?#logout\"})\r\n        }\r\n\r\n        const liList = menuList.map(el => {\r\n            const a = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", el.title, \"navbar-brand\",[{name:\"href\", value:el.link}]);\r\n            return _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"li\", null, \"nav-item\"), [a]);\r\n        });\r\n\r\n        const ulHtml = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"ul\", null, \"navbar-nav\"), liList);\r\n        const navbarCollapse = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"collapse navbar-collapse justify-content-end\", [{name:\"id\", value:\"navbarCollapse\"}]), [ulHtml]);\r\n\r\n        return _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"nav\", null, \"navbar navbar-expand-lg navbar-dark bg-dark\"), [brandLink, buttonToggler, navbarCollapse]);;\r\n    }\r\n\r\n    renderHtmlElement(isLogin){\r\n        this.element.appendChild(this.createHtmlElement(isLogin));\r\n\r\n        document.getElementById(\"buttonToggler\").addEventListener(\"click\", (e) => {\r\n            document.getElementById(\"navbarCollapse\").classList.toggle(\"show\")\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/navigation.js?");

/***/ }),

/***/ "./src/pageTitle.js":
/*!**************************!*\
  !*** ./src/pageTitle.js ***!
  \**************************/
/*! exports provided: PageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageTitle\", function() { return PageTitle; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n\r\n\r\nclass PageTitle {\r\n\r\n    constructor(id){\r\n        this.element = document.getElementById(id);\r\n    }\r\n\r\n    createHtmlElement(isLogin){\r\n        const title = isLogin?\"Catalog\":\"Login\";\r\n\r\n        const h1 = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"h1\", title, null);\r\n        const h1Div = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"col\"), [h1]);\r\n        const h1Row = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"row my-3\"), [h1Div]);\r\n\r\n        let searchRow = null;\r\n        if(isLogin){\r\n            const inputSearch = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", null, \"form-control mr-sm-2\",[\r\n                {name:\"id\", value:\"s\"},\r\n                {name:\"type\", value:\"search\"},\r\n                {name:\"placeholder\", value:\"Search\"},\r\n                {name:\"aria-label\", value:\"Search\"},\r\n            ]);\r\n            const button = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"button\", \"Search\", \"btn btn-outline-success my-2 my-sm-0\", [{name:\"id\", value:\"search\"}]);\r\n            const searchDiv = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-inline my-2 col\"), [inputSearch, button]);\r\n            searchRow = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"row\"), [searchDiv]);\r\n        }\r\n\r\n        return _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, null), [h1Row, searchRow]);\r\n    }\r\n\r\n    renderHtmlElement(isLogin){\r\n        this.element.appendChild(this.createHtmlElement(isLogin));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/pageTitle.js?");

/***/ }),

/***/ "./src/page_data.js":
/*!**************************!*\
  !*** ./src/page_data.js ***!
  \**************************/
/*! exports provided: PageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageData\", function() { return PageData; });\nlet current_page = 0;\r\n\r\nclass PageData{\r\n\tstatic getCurrentPage(){\r\n\t\treturn current_page;\r\n\t}\r\n\r\n\tstatic setCurrentPage(page){\r\n\t\treturn current_page = page;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/page_data.js?");

/***/ }),

/***/ "./src/pagination.js":
/*!***************************!*\
  !*** ./src/pagination.js ***!
  \***************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pagination\", function() { return Pagination; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _page_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_data */ \"./src/page_data.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n\r\n\r\n\r\n\r\n\r\nclass Pagination{\r\n\tconstructor(per_page){\r\n\t\tthis.element = document.getElementById(\"pagination\");\r\n\t\tthis.pagination_buttons = document.getElementsByClassName(\"page-link\");\r\n\t\tthis.per_page = per_page;\r\n\t}\r\n\r\n\tcreatePagination(array_products, current_page){\r\n\t\tthis.element.innerHTML = \"\";\r\n\t\tconst ul = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"ul\", null, \"pagination\");\r\n\t\tfor(let i = 0; i < Math.ceil(array_products.length / this.per_page); i++){\r\n\t\t\tconst link = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", i+1, \"page-link\",[{\"name\":\"data-link\", \"value\":i}]);\r\n\t\r\n\t\t\tconst classNameLi = (i == current_page)?\"page-item active\":\"page-item\";\r\n\t\t\tconst li = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"li\", null, classNameLi), [link]);\r\n\t\r\n\t\t\tul.appendChild(li);\r\n\t\t}\r\n\t\tthis.element.appendChild(ul);\r\n\t\r\n\t\tconst catalog = new _catalog__WEBPACK_IMPORTED_MODULE_3__[\"Catalog\"](this.per_page);\r\n\r\n\t\tArray.from(this.pagination_buttons).map((el)=>{\r\n\t\t\tel.addEventListener(\"click\", (e)=>{\r\n\t\t\t\t_page_data__WEBPACK_IMPORTED_MODULE_1__[\"PageData\"].setCurrentPage(e.target.dataset.link);\r\n\t\t\t\tcatalog.renderProducts(_data__WEBPACK_IMPORTED_MODULE_2__[\"Data\"].setProducts(_data__WEBPACK_IMPORTED_MODULE_2__[\"Data\"].loadProducts()), _page_data__WEBPACK_IMPORTED_MODULE_1__[\"PageData\"].getCurrentPage());\r\n\t\t\t});\r\n\t\t});\r\n\t\r\n\t\t// Array.from(document.getElementsByClassName(\"product_more\")).map((el)=>{\r\n\t\t// \tel.addEventListener(\"click\", eventHandle, false);\r\n\t\t// });\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/pagination.js?");

/***/ })

/******/ });