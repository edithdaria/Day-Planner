//wait until the full html page is rendered to run the js
$(Document).ready(function(){

    
    var plannedEventToObject = JSON.parse(localStorage.getItem("storeEvent"));
    //alert(plannedEventToObject[(businessHours)[i]]);

    
    //display the current date and time at the top of the calendar
    function updateTime(){

    var current = moment();

    $("#currentDay").text(current.format("LLLL"));

    current.format("LLLL");

    }

    //update time
    updateTime();

    //this updates the time every minute
    setInterval(function(){
        updateTime();
     },1000);

     //diplay time-blocks for business hours
     var businessHours = [ "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
     
    //alert(Object.values(businessHours)[0]);

     var current = moment(moment(), 'hh:mm').format("ha");



    // for(var i=0; i < Object.keys(businessHours).length; i++ ){
    for(var i=0; i < businessHours.length; i++ ){

    //  var formattedTime = [];     
    //  formattedTime[i] = moment((businessHours[i]), "hmm").format("ha");
    //  if(formattedTime[0] == "8am"){         
    //     alert(true);
    // }
    // alert(formattedTime[i]);

    //compare current time to calendar time and will be used for color coding
     // alert(beginningTime);
    // alert(endTime);    
    //alert(beginningTime.isBefore(endTime));

    var currentTime = moment(current, 'ha');
    //var plannerTime = moment(Object.keys(businessHours)[i], 'ha');
    var plannerTime = moment((businessHours)[i], 'ha');
    var arrayVal = moment((businessHours)[i], 'hh:mm').format("hA");



    //this creates the row div
    var containerDiv = $("<div>").addClass("row").attr("data-index", i).appendTo($(".container"));
    
    //this creates the time-block div, child div to containerDiv
    var li = $("<div>").addClass("col-md-3 col-sm-3 col-xs-3 time-block hour").attr("data-index", i);
    
    //set the time for the div and create a child element to the container
    li.text(arrayVal).appendTo(containerDiv);

    //input div
    var text_value = "";
    if (plannedEventToObject) text_value = plannedEventToObject[(businessHours)[i]];
    var description = $("<textarea>").text(text_value).addClass("col-md-6 col-sm-6 col-xs-6 description textarea").attr("data-index", i).appendTo(containerDiv);

    //button div
    var button = $("<button>").addClass("col-md-3 col-sm-3 col-xs-3 saveBtn").text("save").attr("data-index", i).appendTo(containerDiv);

    //.html("<img src='save.jpg'>")
     

     if(currentTime.isAfter(plannerTime)){
        description.addClass("past");
    }

    else if(currentTime.isBefore(plannerTime)){
        description.addClass("future");

    }

    else{
        description.addClass("present");
    }




} 

var plannedEvent = {};

$(".container").click(function(event){

    if(event.target.matches("button")){
    event.preventDefault();

    //setting an index to the clicked item
    var index = event.target.parentElement.getAttribute("data-index");
    //alert("index is: " + index);

    var valueI = $("textarea")[index].value.trim();
    //alert("valueI is: " + valueI);

    Object.assign(plannedEvent, {[(businessHours)[index]] : valueI});

    //alert(Object.keys(plannedEvent)[index]);
    //alert(JSON.stringify($("input")[index].value.trim()));

    //alert(Object.entries(plannedEvent)[index]);
    var plannedEventFromObject = JSON.stringify(plannedEvent);
    //alert("plannedEventFromObject is: " + plannedEventFromObject);

    localStorage.setItem("storeEvent", plannedEventFromObject);
    //alert("text is" + $("input")[index].value); 
    
   }  
});









    

     

     










});
