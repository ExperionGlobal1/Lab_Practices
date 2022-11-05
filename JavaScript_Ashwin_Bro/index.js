let name = "mario"; 
let age = 7; 
let ismarried = false; 
// console.log("name","age");


let fav_foods= ["biryani","chapathi","sandwich",100,10,40,[1,2,3,[1,2,3,4]],false,"lingaaaaa"];
// console.log(fav_foods[6][3][2]);

let kishore = { 
    name:'kishore', 
    address:"bihar", 
    age:25, 
    fav_food:["chappathi","sandwich"], 
    ismarried:false, 
    eat:function(){ 
        console.log('eating....') 
    } 
} 
// console.log(kishore.fav_food)
// console.log(fav_foods[fav_foods.length-1]) 

let ispassed = true
let userage = 18;
let username = "raj"

// if(userage){
//     console.log('you are failed')
// }
// else{
//     console.log('else')
// }
const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

   console.log(greeting)

