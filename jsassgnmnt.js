console.log("Good Morning");
//Named function
function building(){
    console.log("This is named Function");
}
building();

//Self-invoking function

(function (){
    console.log("This is self invoking Function");
}())

//Arrow Function

const arrowFunction = () => {
    console.log("This is Arrow Function");
}

arrowFunction();

// Named Function Example
function fan(a,b){
    console.log("A value is " , a);
    console.log("B value is ", b);
    console.log(typeof(a));
    console.log(typeof(b));
    let total = a - Number(b);
    console.log(total);

    document.getElementById("sum").innerHTML = total
}
fan(40,"20")

//Paragraph

document.getElementById("Paragraph1").innerHTML = "<p style='color:green'>Let It allow for reinitialize or does not allow for duplicate declaration not allow for duplicate declaration and reinitialization</p>"
document.getElementById("Paragraph2").innerHTML = "<p style='color:gray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, asperiores!</p>"
document.getElementById("Paragraph3").innerHTML = "<p style='color:pink'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, placeat eaque saepe neque magni explicabo fugit excepturi quo asperiores minus!</p>"

//Heading

document.getElementById("Heading1").innerHTML = "<h1 style='color:red'>Introduction</h1>"
document.getElementById("Heading2").innerHTML = "<h1 style='color:orange'>About</h1>"
document.getElementById("Heading3").innerHTML = "<h1 style='color:blue'>Summary</h1>"


document.getElementById("table").innerHTML = "<tr> <th>EmpId</th> <th>First Name</th> <th>Last Name</th> </tr> <tr> <td>01</td> <td>Raksha</td> <td>Shetty</td> </tr> <tr> <td>02</td> <td>sinchana</td> <td>Shetty</td> </tr>"




function formSubmit(event) {
    event.preventDefault()
    let fName = document.getElementById("name");
    let length = fName.value.length;
    console.log(length , fName.value , "          " , fName.placeholder , "           " , fName.type);
    document.getElementById("displayName").innerHTML = fName.value;
}

const clickMe = () => {
    document.getElementById("good").style.color = "orange"
}

