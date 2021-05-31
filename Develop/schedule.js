
/* time block is color-coded to indicate whether it is in the 
(a) past, 
(b) present, 
(c) or future */

// ID time to match the time of local storage
var nine = document.querySelector("#nineAm");
var ten = document.querySelector("#tenAm");
var eleven = document.querySelector("#elevenAm");
var twelve = document.querySelector("#twelvePm");
var one = document.querySelector("#onePm");
var two = document.querySelector("#twoPm");
var three = document.querySelector("#threePm");
var four = document.querySelector("#fourPm");
var five = document.querySelector("#fivePm");

var hourEl = {
    nine, ten, eleven, twelve, one, two, three, four, five
}

// THEN a function to calculate local time
function presentColor(){
    for(i = 0; i < hourEl; i++){
        hourEl[i].append = currentTime;
        if (currentTime){
            var colorRed = querySelector(".present");
            colorRed.attr("class", "fancy");
        } 
    //console.log(hourEl);
    }
    // console.log(currentTime);
    //presentColor();
}
//console.log(colorRed);

// WHEN the duration of time is between 9a-5p
// THEN every hour the function changes   
// IF the hour is present 
// THEN the row changes color 
