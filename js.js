
// Question 1

function animal(animalName,type){
    this.animalName=animalName;
    this.type = type;

}

animal.prototype.getAnimalName()= function (){return animalName};
animal.prototype.createElement()= function () {
    $("body").append("<h1>hi its animal here</h1>");
}


var dog = new animal("lussy","dog");
dog.createElement();

// the end.

// Question 2

class Shape (height,length,area) {
    constructor(){

    _height=height;
    _length=length;
    _area= area;

    }
    getteArea() = function (){return area}

}

var square = new Shape ("13cm","12cm","256cm2");

// the end.


// Question 3

var arr = arrStr.filter(str=>str.length<=4);

// the end.
