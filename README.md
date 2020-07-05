
https://edithdaria.github.io/Day-Planner/

```
GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar
- I called the moment.js method to retrieve the current date and time

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
- used concept of rows and cols to construct the time-block, textarea and buttons. Used the different column sizes to accomodate different screen sizes.

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, 
present, or future
- used the isBefore, isSame, isAfter functions to colorcode the text areas

WHEN I click into a timeblock
THEN I can enter an event
-used <textarea> to accept input from the user

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
-used localStorage.setItem and localStorage.getItem to make this work.
```
