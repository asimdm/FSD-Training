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
    arr.push(studentInfo);
    console.log(arr);
}

function dis1()
{
    z=document.getElementById("name1").value;
    studentInfo1.Name=z;
    z=document.getElementById("roll1").value;
    studentInfo1.roll=parseInt(z);
    z=document.getElementById("address1").value;
    studentInfo1.address=z;
    console.log(studentInfo1);
    arr.push(studentInfo1);
    console.log(arr);
}

// console.log(x);
// window.alert(x);

// y.addEventListener("click", function(){x.innerHTML=x+1;});