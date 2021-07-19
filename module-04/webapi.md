# DOM & API

* **DOM** is always traversal, and it means it goes through the Document Object Model.
* **DOM** is the object version/representation of the HTML.
* **Browser** has 3 engines: HTML, CSS, JS.
* **Browser** renders the data from the HTML and transforms it into the DOM.
* **URLs** are structures to communicate back and forth.
* **API** is one machine talking/communicating with another machine: Two machines talking each other.
* **API** extracts or adds information/data, but it must be something specific.
* **API** is an interaction between two things (drone with a mobile application).
* **WEB API** works solely in web browsers (like asking IMDB to get info about horror movies).
* **DOM NODE** is everything inside the DOM, and some NODEs could change the data inside them.
* **WINDOW** is the biggest OBJECT inside the DOM.
* **WINDOW** is at the highest of the hierarchy.
* **LOCAL** when it's wrapped inside a function (variable).
* **GLOBAL** when it's accessible to everything and everyone (variable).
* **THIS** is the reference for the calling object (Constructor referencing object).

``` javascript
// DOM in action, by hierarchy:

console.log(window);
console.log(window.document);
console.log(window.head);
console.log(document.body);
console.log(document.body.children[2]);
console.log(document.body.children[0].children[2]);
``` 

``` javascript
.getElementById('') 
// Retrieves an ID element from a HTML NODE, for example:

let var_name_01 = document.getElementById('id_name_01'); 
let var_name_02 = document.getElementById('id_name_02');
let var_name_03 = document.getElementById('id_name_03');
let var_name_04 = document.getElementById('id_name_04');       
```  

``` javascript
.style.style_property = '';
// Direct styling for the HTML NODE, for example:

var_name_01.style.background = '#fff';
var_name_02.style.color = '#000';
var_name_03.children[0].children[2].style.margin = '10px';
var_name_04.children[3].style.padding = '20px';
``` 

``` javascript
.querySelectorAll('')   
// Retrieves all the elements that match ALL the CLASSes or TAGs inside the HTML.

let var_name_05 = document.querySelectorAll('.class_05');
let var_titles  = document.querySelectorAll('h1');
let var_images  = document.querySelectorAll('img');
let var_div     = document.querySelectorAll('div');
```

``` javascript
.querySelector('')  
// Retrieves a specific element from the HTML matching the ID, CLASS or TAG.

let var_name_06 = document.querySelector('.class_06');
let var_name_07 = document.querySelector('#id_name_07');  
```

``` javascript
.setAttribute('','');
// Appends attributes to a specific NODE in the HTML, like styles, images, alts, CLASS, ID and others.

var_name_05.setAttribute('style','background:#000;color:#fff;margin:0 auto;');
var_titles.setAttribute('style','font-size:2em,line-height:1.4;text-align:center;');
var_images.setAttribute('src','https://www.pathtotheimage.com');
var_div.setAttribute('class','box';);
var_name_06.children[0].setAttribute('style','display:flex;flex-direction:row;');
``` 

``` javascript
.createElement('')
// Creates (only) a new element or NODE inside another NODE in the HTML.

let var_name_01 = document.body.createElement('header');
let var_name_02 = document.body.children[0].createElement('h1');
let var_name_03 = document.body.children[0].createElement('ul');
let var_name_04 = document.body.children[0].children[1].createElement('li');
```

``` javascript
.appendChild()
// Appends a created element or NODE inside another NODE of the HTML <body>.

document.body.appendChild('var_name_01');
document.body.children[0].appendChild('var_name_02');
document.body.children[0].appendChild('var_name_03');
document.body.children[0].children[1].appendChild('var_name_04');
```

``` javascript
.textContent = ''
// Appends a new line of text inside an element or NODE.

document.body.children[0].children[0].textContent = 'Title';
document.body.children[0].children[1].children[0] = 'Option #1';
document.body.children[0].children[1].children[1] = 'Option #2';
document.body.children[0].children[1].children[2] = 'Option #3';
```

``` javascript
.addEventListener('click','options'); 
// Listen when a specific element is clicked

let var_btn = document.getElementById('button_id_name');
let var_bg  = "black";

var_btn.addEventListener('click',function(){
    if (var_bg === 'black') {
        document.style.background = "#fff";
    }
    else {
        document.setAttribute('style','background:#000;')
    }
});

``` 

``` javascript
function(){}
// ANONYMOUS functions are created to be executed at any moment

let var_btn = document.getElementById('button_id_name');
var_btn.addEventListener('click',function(){
    ...
});
``` 

``` javascript
.preventDefault()
//  It will cancels the event and any action in the program will not occur.

function validation(event){
    event.preventDefault();
    document.children[2].children[0].textContainer = "Now any default action will not occur.";
    console.log(event);
}
document.getElementById('button_id_name').addEventListener('click',validation);
``` 

``` javascript
.cancelable
//  It prevents and cancels a specific interaction from the user, like click, scroll, wheel scroll

function validation(event){
    event.cancelable;
    document.children[2].children[0].textContainer = "It cancels only the assiociated event.";
    console.log(event);
}
document.getElementById('button_id_name').addEventListener('click',validation);
``` 

``` javascript
.value
// Retrieves the value from a HTML, like a PROMPT dialog box or a FORM input text

let amount = document.getElementById('input_01');
let price  = document.getElementById('input_02');

function buy() {
    let total = amount.value * price.value;
    return total;
}
buy();
``` 

``` javascript
function func_name(arg1, arg2) {
    return arg1 + arg2;
}
// IIFE replace the arguments of the function and replace them with the values of the chosen variables

let var_name_02 = func_name("This is an ", "IIFE Function!");
console.log(var_name_02);
``` 
``` javascript
.addEventListener('keydown','options');
// Listen when the key of the keyboard is clicked

<textarea rows="5" name="test" id="textarea"></textarea>

let typing = document.getElementById('textarea');
typing.addEventListener('keydown',function(event){
    console.log(event.key + "key is pressed.");
}); 
``` 

``` javascript
.addEventListener('keyup','options');
// Listen when the key of the keyboard is clicked

let typing = document.getElementById('textarea');
typing.addEventListener('keyup',function(event){
    console.log(event.key + "key is released.");
}); 
``` 

``` javascript
.addEventListener('change','options');
// Listen when an option a select tag has changed

typing.addEventListener('change',function(event){
    ...
}); 
``` 

``` javascript
.includes()
// Includes is a method to validate a value inside an array.

let var_name_01 = ['a','b','c','d','e','f','g'];
let var_name_02 = [0123456789];

console.log(var_name_01.includes('c'));     // TRUE
console.log(var_name_01.includes('z'));     // FALSE
console.log(var_name_02.includes(1));       // TRUE
console.log(var_name_02.includes(z));       // FALSE
``` 

``` javascript
.currentTarget
// Commonly used with Event Listeners to attach the same event to several elements.

let var_name_01 = document.querySelectorAll('p');
var_name_01.addEventListener('click',function(event){
    event.currentTarget.setAttribute('style','color:#000;font-size:30px;');
});
``` 

``` javascript
.target
// A reference of the object 
``` 

``` javascript
.matches()
// Method to check if the element is selected
``` 

``` javascript
.dataset()
// Exposes a map of strings for each data-* attribute inside the HTML
``` 

``` javascript
localStorage.getItem()
// Used to obtain the storaged value, the data won't disappear after refreshing the browser.

let var_name_01 = localStorage.getItem('bg');
document.getElementById('bg').value = var_name_01
``` 

``` javascript
localStorage.setIten('keyname','keyvalue')
// Used to define the value to storage, the data won't disappear after refreshing the browser.

function func_name(){
    localStorage.setItem('bgcolor','black');
}
```

``` javascript
.stopPropagation()
// It's a method of the EVENT to stop the bubbling. 
``` 
``` javascript
index
``` 
``` javascript
``` 






confirm('') =

.addEventListener('click', function(){...})

// Floor goes to the Bottom, helps you round the numbers
// Random helps you select numbers