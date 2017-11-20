
var myNodelist = document.getElementsByTagName("LI");
var i;


for (i = 0;
    i < myNodelist.length; 
    i++) {

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);


}
//Clicking close button closes candidate
var close = document.getElementsByClassName("close");
var i;


for (i = 0;
    i < close.length; 
    i++) {
    close[i].onclick = function() {
        
        var div = this.parentElement;
        div.style.display = "none";

    }
}
//Clicking the create button to create a new candidate
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);


    li.appendChild(t);


    if (inputValue === '') {
        alert("Enter a Candidate's Name please.");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");

    var txt = document.createTextNode("\u00D7");

    span.className = "close";

    span.appendChild(txt);

    li.appendChild(span);


//this is to increment it
    for (i = 0;
        i < close.length; 
        i++) 
    {
        close[i].onclick = function() 
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}