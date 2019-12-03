//'new' keyword
// var toDay = new Date();
var mouse = {
  weight: 10,
  getWeigth: function() {
    return this.weight;
  }
};

//constructor function

function Mouse() {
  this.type = 'mouse';
}
var mouse1 = new Mouse();
console.log(mouse1);
