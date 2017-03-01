/* ARGUMENTS SHOULD NOT BE MUTATED */


/*
Write a function which adds a class "highlight" to the introduction paragraph
*/
var highlightText = function(){
  document.querySelector('.introduction').classList.add('highlight');
}
highlightText(); //uncomment me to test

/*
Write a function which removes the class "highlight" from the introduction
paragraph
*/
var unHighlightText = function(){
  document.querySelector('.introduction').classList.remove('highlight');
}
unHighlightText(); //uncomment me to test


/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function(){
  document.querySelector('.introduction').classList.toggle('highlight');
}
toggleHighlight(); //uncomment me to test



/*
Write a function which returns all text content of the introduction paragraph
*/
var getText = function(){
  return document.querySelector('.introduction').textContent;
}
console.log(getText()); //uncomment me to test


/*
Write a function which returns the number of characters in the introduction
paragraph
*/
var getNumChars = function(){
  return document.querySelector('.introduction')
    .textContent.trim().length;
}
console.log(getNumChars()); //uncomment me to test


/*
Write a function which returns the number of words in the introduction paragraph
*/
var getNumWords = function() {
  return document.querySelector('.introduction')
    .textContent.trim().split(' ').length;
}
console.log(getNumWords()); //uncomment me to test


/*
Write a function which returns the number of sentences in the introduction
paragraph
*/
var getNumSentences = function(){
  return document.querySelector('.introduction')
    .textContent.trim().split('.').slice(0, -1).length;
}
console.log(getNumSentences()); //uncomment me to test

/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function(string){
  return document.querySelector('.introduction')
    .textContent.trim().includes(string)
}
console.log(containsString('Lorem ipsum')); //true
console.log(containsString('I want 2 break free')); //false


/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function(){
  return document.getElementsByName('firstName')[0].value;
}
console.log(getFirstNameValue()); //uncomment me to test


/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var getValue = function(inputName){
  return document.getElementsByName(inputName)[0].value;
}
getValue('lastName'); //uncomment me to test


/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
var updateStateValue = function (formState, inputName){
  var value = document.getElementsByName(inputName)[0].value;
  return Object.assign({}, formState, { inputName: value});
}

console.log(updateStateValue({ inputName: 'nothing', test: 'still here' }, 'email')); // { inputName: 'emailfieldvalue', test: 'still here' }


/*
Write a function which takes an object,`formState`, and an array of string,
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues = function(formState, inputArray){
  var values = inputArray.map((inputName) => {
    return document.getElementsByName(inputName)[0].value
  })
  return Object.assign({}, formState, { inputNames: values});
}

console.log(updateStateValues({ inputName: 'nothing', test: 'still here' },
  ['firstName', 'lastName', 'email']));


/*
Write a function which returns an **array** of values of inputs with a given class
*/
var getInputValues = function(className){
  var elements = document.getElementsByClassName(className);
  var result = [];
  for (var i = 0; i < elements.length; i++) {
    result.push(elements[i].value);
  };
  return result
}
console.log(getInputValues('test')); // ["John", "fake@notreal.false"]

/*
Write a function which takes a className, and returns the number of elements in
the DOM with that className. If the function is passed an argument which doesn't
have type `string`, the function should return 0;
*/
var getNumElsOfClass = function(className){
  return typeof className !== 'string'
    ? 0
    : document.getElementsByClassName(className).length
}
console.log(getNumElsOfClass('test')); // 2
console.log(getNumElsOfClass(true)); // 0



/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function(array){
  var li = array.map(function(value) {
    return '<li>' + value + '</li>'
  })
  return '<ul>\n' + li.join('\n') + '\n</ul>'
}

console.log(generateUl(['call', 'me', 'ishmael']));


/*
Write a function, `generateNestedUl`, which takes array whose elements can be
either strings or arrays of strings, and which returns a `ul` htmlElement
containing `li` elements for each array element. Each `li` should contain the
value of the array element if is a string, or a `ul` containing `li` elements
of the array if element is an array.
*/
var generateNestedUl = function(nested) {
  var mapper = function (arr) {
    return arr.map(function(value) {
      return value.constructor === Array
        ? '<ul>\n' + mapper(value).join('\n') + '\n</ul>'
        : '<li>' + value + '</li>'
    })
  }
  return '<ul>\n' + mapper(nested).join('\n') + '\n</ul>'
} // there is probably a way to do this recursively :)

console.log(
  generateNestedUl(['call', ['me', 'on', 'my', 'cell', 'phone'], 'ishmael']));


/*
Using the above functions, write a function which takes a filter function,
which returns a function that takes an array, that generates a `ul` as above
but with filtered elements.
*/
