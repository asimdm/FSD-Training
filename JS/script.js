var studentInfo={
    Name: "Not entered",
    roll: 0,
    address: "Not entered"
};

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
    console.log(z);
    document.getElementById("here1").innerHTML=studentInfo.Name;
    document.getElementById("here2").innerHTML=studentInfo.roll;
    document.getElementById("here3").innerHTML=studentInfo.address;
}

// console.log(x);
// window.alert(x);

// y.addEventListener("click", function(){x.innerHTML=x+1;});