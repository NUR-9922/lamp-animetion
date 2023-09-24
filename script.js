// right light 

function myFun1() {
    document.getElementById("container").style.filter = " blur(33px)";
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popup").style.transform = "scale(1)";


}
function myFun5() {
    var a = document.getElementById("inp1").value;
    var b = document.getElementById("inp2").value;
    var c = document.getElementById("light-color").value;
    document.getElementById("box-12").style.boxShadow = `0px 100px 250px ${a}px ${b}`;
    document.getElementById("box-12").style.backgroundColor = c;
    document.getElementById("container").style.display = "block";
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("popup").style.transform = "scale(0)";
    document.getElementById("container").style.filter = " blur(0px)";
}


// left light 

function myFun2() {
    document.getElementById("container").style.filter = " blur(33px)";
    document.getElementById("popup-2").style.visibility = "visible";
    document.getElementById("popup-2").style.transform = "scale(1)";


}
let click = true;
function myFun6() {
    if(click === true){
    var a = document.getElementById("inp1").value;
    var b = document.getElementById("inp2").value;
    var c = document.getElementById("light-color").value;
    document.getElementById("box-8").style.boxShadow = `0px 100px 250px ${a}px ${b}`;
    document.getElementById("box-8").style.backgroundColor = c;
    document.getElementById("container").style.display = "block";
    document.getElementById("popup-2").style.visibility = "hidden";
    document.getElementById("popup-2").style.transform = "scale(0)";
    document.getElementById("container").style.filter = " blur(0px)";
    click = false;
    }

else{
     // Update styles with new values when clicking again
     var newA = document.getElementById("inp1").value;
     var newB = document.getElementById("inp2").value;
     var newC = document.getElementById("light-color").value;
     document.getElementById("box-8").style.boxShadow = `0px 100px 250px ${newA}px ${newB}`;
     document.getElementById("box-8").style.backgroundColor = newC;
    document.getElementById("container").style.display = "block";
    document.getElementById("popup-2").style.visibility = "hidden";
    document.getElementById("popup-2").style.transform = "scale(0)";
    document.getElementById("container").style.filter = " blur(0px)";
    click = true;
}
} 

// booth light 

function myFun4() {
      document.getElementById("box-12").style.boxShadow = "";
    document.getElementById("box-12").style.backgroundColor = "";
    document.getElementById("box-8").style.boxShadow = "";
    document.getElementById("box-8").style.backgroundColor = "";
}
function myFun8() {

 
   
}