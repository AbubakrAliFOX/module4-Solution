(function (window) {
var byePerson = {};
var speakWord = "Good Bye";
byePerson.speak = function (name) {
  console.log(speakWord + " " + name);
}
window.byePerson = byePerson;

})(window);