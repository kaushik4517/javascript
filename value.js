function display(){

    // get the value of input field
const sub = document.getElementById('submit').value;
    // print the input field in anotr another section called output by using 
    //"textcontent" - which is used to print the o/p of/between any tag.  
document.getElementById('output').textContent= "Value in the box is: "+  sub;


//code for validation

if(sub == ""){
    document.getElementById('error').innerHTML="please write something in the box"
    return false;
}
    else  {
        document.getElementById("error").innerHTML=""; 
    }
}


// ----------------------------------------------------//


function add() {

    // taking value from div that is id is value1
    const containervalue = document.getElementById('value1');

    //  copying the input field by clonenode function of javascript
    const newcontainer =  containervalue.cloneNode(true);
    // empty the value of input field as the clone is made
    newcontainer.querySelector('input').value = '';
    // asscess the part between container value and new cotainer
    containervalue.parentNode.insertBefore(newcontainer, containervalue.nextSibling);
}

function display1(btn) {

    // We find the input field associated with the button that was clicked.
    var inputField = btn.parentNode.querySelector('input');
    //Once we find the input field, we look inside that smaller box to see what's written inside it
    var enteredValue = inputField.value;
    //We prepare a new empty box (a <span> element) to put the value into
    var span = document.createElement('span');
    //We write the value we found inside the input field
    span.textContent = "" + enteredValue + " ";
    //We place the value (the <span> element) next to the box with the input field 
    inputField.parentNode.appendChild(span);


}


//----------------------------------------------------------//


// declaring function
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Convert time(hours) to 12-hour format
       
     //hour%12 means value of hour between 0to11
    var hours12 = hours % 12;
     //If hours12 is 0, set it to 12
    hours12 = hours12 || 12; 

    // Add zeros to minutes and second as for eg 04, 07(as minutes,second)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Determine AM/PM for 12-hour format
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Set the time in both 12-hour and 24-hour formats
    var time12 = hours12 + ':' + minutes + ':' + seconds + ' ' + ampm;
    var time24 = hours + ':' + minutes + ':' + seconds;

    // Display the time 
    document.getElementById('time12').textContent = time12;
    document.getElementById('time24').textContent = time24;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();




