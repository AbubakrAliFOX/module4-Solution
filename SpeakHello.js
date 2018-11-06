(function (window) {
var helloPerson = {};
var speakWord = "Hello";
helloPerson.speak = function (name) {
  console.log(speakWord + " " + name);
}
window.helloPerson = helloPerson;

})(window);