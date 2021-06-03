//aruguments object - no longer bound with arrow functions

// const add = function (a,b) {
//     console.log(arguments);
//     return a+b;
// }

//console.log(add(55,1,1000));

const add = (a,b) => {
    //console.log(arguments);
    return a+b;
}
console.log(add(55,1,1000));

// this keyword - no longer bound

// const user = {
//     name: 'Harish',
//     cities: ['Chennai','Mayiladuthurai','Mumbai','Goa'],
//     printPlacesLived: function (){
//          console.log(this.name);
//          console.log(this.cities);
//         const that=this;
//         //This will not work inside the child functions
//          this.cities.forEach(function (city) {
//              console.log(that.name + ' has lived in '+ city);
//          })
//     }
// }

// const user = {
//     name: 'Harish',
//     cities: ['Chennai','Mayiladuthurai','Mumbai','Goa'],
//     printPlacesLived: function (){
      
//         //Arrow function will have access to parent this keyword
//          this.cities.forEach((city)=> {
//              console.log(this.name + ' has lived in '+ city);
//          })
//     }
// }

const user = {
    name: 'Harish',
    cities: ['Chennai','Mayiladuthurai','Mumbai','Goa'],
    printPlacesLived(){
         return this.cities.map((city) => this.name + ' has lived in '+ city);
    }
}

console.log(user.printPlacesLived());

//Challenge area

const multiplier={
    numbers:[2,3,4,5],
    multiplyBy:2,
    multipy(){
        return this.numbers.map((num)=> 'Multiplied result for ' + num + '*'+ this.multiplyBy +" = " + num*this.multiplyBy);
    }
}

console.log(multiplier.multipy());