/*
function a()
{
    if(true)
    {
        let aa= 5;
        console.log(aa);

    }

}
a()

/////



let n = {

    name:["kamal","hari"],
    age:12,
    address : {
        city:"chennai"
    },
    number : function(){
        console.log("hi")
    },
}

n.number()
*/


/*
let student = new Object();

student.name = function()
{
    console.log("hello");
}
student.name()    
*/

/*
let student1=new Object();
student1.name="abi";
student1.age=20;
student1.hel=function(){
      console.log("hi")
}

student1.hel()

*/
/*
let a=5
let b= a++ + --a
let c= b++ + ++b
a++
console.log(a);
console.log(b);
console.log(c);
*/

/*
const dayNumber = 3; // Change this number to test different cases

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
    break;
}

*/
/*
let a=1
for(console.log('a');a<=3;console.log('b')){
    console.log('c');
    a++
}
*/ 

/*
let apple =() => console.log("hello")
apple()

let orange = () => "orange"
console.log(orange())

let orange = () => {
    console.log("nandhini");
    return 3+3;
    }
    console.log.(banana());
    */

/*
function dog(callback){
    setTimeout(()=>{
        console.log("JACK the dog");
        callback();
    },2000);
}
function cat(){
    console.log("Rose the cat")
}
dog(cat)
*/

/*
function attendance(callback) {
    console.log("Need attendance");
    if (callback) callback(); // Call the callback function if it exists
}

function lunch(callback) {
    console.log("Go to lunch");
    if (callback) callback(); // Call the callback function if it exists
}

function goingtohome() {
    console.log("Going to home");
}

// Chain the callbacks
attendance(() => {
    lunch(() => {
        goingtohome();
    });
});

*/


/*
function attendance(callback){
    setTimeout(()=>{
        console.log("attendence")
        callback()
    },1500)
}

function lunch(callback){
    setTimeout(()=>{
        console.log("need lunch")
        callback()
    },2500)
}

function goingtohome(callback){
    setTimeout(()=>{
        console.log("veetuku po")
        callback()
    },3500)
}
//callback hell
attendance(()=>{
    lunch(()=>{
        goingtohome(()=>{
            setTimeout(()=>{
                console.log("day completed")
            },4500)
            
        })
    })
})

*/

/*

function attendance(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let attendanceAP=true;
            if(attendanceAP)
           resolve("attendence")
        else
        reject("absent")
            },1500)

    })
    
}

function lunch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lunch=true;
            if(lunch)
            resolve("saptan")
        else
        reject("sapadala")
           },2500)

    })
    
}

function goingtohome(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let goingtohome=false;
            if(goingtohome)
            resolve("veetuku poitan")
        else
        reject("veetuku pogala")
           },3500)
    
    })
}

attendance().then((value)=>{console.log(value);return lunch()})
            .then((value)=>{console.log(value);return goingtohome()})
            .then((value)=>{console.log(value);setTimeout(()=>{console.log("day completed")},4000)})
            .catch(error=>console.log(error))

*/
 /*
function a1(){
    return new Promise((resolve,reject)=>{
        let datas=false;
        if(datas)
            resolve("data returned")
        else
            reject("data never returned")
    })
}
a1().then((output)=>{console.log(output)}).catch((output)=>{console.error(output)})
*/