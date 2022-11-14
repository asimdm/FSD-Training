var studentInfo={
    Name: "Not entered",
    roll: 0,
    address: "Not entered"
};
var studentInfo1={
    Name: "Not entered",
    roll: 0,
    address: "Not entered"
};


var arr = [];

function add()
{
    x=document.getElementById("head").innerHTML;
    t=parseInt(x)+1;
    document.getElementById("head").innerHTML=t;
}

function sub()
{
    x=document.getElementById("head").innerHTML;
    t=parseInt(x)-1;
    document.getElementById("head").innerHTML=t;
}

function divide()
{
    x=document.getElementById("head").innerHTML;
    t=parseInt(x)/2;
    document.getElementById("head").innerHTML=t;
}

function multiply()
{
    x=document.getElementById("head").innerHTML;
    t=parseInt(x)*2;
    document.getElementById("head").innerHTML=t;
}

function modu()
{
    x=document.getElementById("head").innerHTML;
    t=parseInt(x)%10;
    document.getElementById("head").innerHTML=t;
}

function dis()
{
    z=document.getElementById("name").value;
    studentInfo.Name=z;
    z=document.getElementById("roll").value;
    studentInfo.roll=parseInt(z);
    z=document.getElementById("address").value;
    studentInfo.address=z;
    console.log(studentInfo);
    arr.push(this.studentInfo);
    console.log(arr);
}

// function dis1()
// {
//     z=document.getElementById("name1").value;
//     studentInfo1.Name=z;
//     z=document.getElementById("roll1").value;
//     studentInfo1.roll=parseInt(z);
//     z=document.getElementById("address1").value;
//     studentInfo1.address=z;
//     console.log(studentInfo1);
//     arr.push(studentInfo1);
//     console.log(arr);
// }

// console.log(x);
// window.alert(x);

// y.addEventListener("click", function(){x.innerHTML=x+1;});

function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }

var name="Ali";
var Class="A";

const person1={
    "name": "Asim",
    "Class": "A",
    "fullName": function () {
        return this.name+" "+this.Class;
    }
};

const person2={
    "name": "Mohammed",
    "Class": "A",
};

let fullName=person1.fullName.bind(person2);
console.log(fullName());

const hello=()=>{
    console.log("This is arrow function");
}

hello();

const fullame=(name, callback)=>{
    console.log("full name"+name);
    callback();
}

fullame("Asim",()=>{
    console.log("done!");
});

const promise= new Promise((resolve, reject)=> {
    resolve(true);
    reject(false);
});

promise.then((value)=>{
    console.log("Promise then");
});

promise.catch((value)=>{
    console.log("What is this?");
});