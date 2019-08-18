let weekday = 4; //Switch version



switch (weekday) {

  case 1:

    console.log("Today it's Monday");

    break;

  case 2:

    console.log("Today it's Tuesday");

    break;

  case 3:

    console.log("Today it's Wednesday");

    break;

    case 4:

    console.log("Today it's Thursday");

    break;
    
    case 5:

    console.log("Today it's Friday");

    break;

    case 6:

    console.log("Today it's Saturday");

    break;

    case 7:

    console.log("Today it's Sunday");

    break;

    case (weekday >1 && weekday >7):

    break;

  default:

    console.log("Error: Please input a number between 1 and 7");

}

let weekdayNumber = 5; //IF/ELSE/IF version:


let message = '';

if (weekdayNumber === 1){
    message = "Today it's Monday";
}else if(weekdayNumber === 2){
    message = "Today it's Tuesday";
}else if(weekdayNumber === 3){
    message = "Today it's Wednesday";
}else if(weekdayNumber === 4){
    message = "Today it's Thursday";
}else if(weekdayNumber === 5){
    message = "Today it's Friday";
}else if(weekdayNumber === 6){
    message = "Today it's Saturday";
}else if(weekdayNumber === 7){
    message = "Today it's Sunday";
}else if(weekdayNumber >1 && weekdayNumber >7){
        message = "Error: Please input a number between 1 and 7";
}

console.log(message);


let Weekday = 6; //Switch version refactor
let Message = null;



switch (Weekday) {

  case 1:

    Message = "Today it's Monday";

    break;

  case 2:

    Message = "Today it's Tuesday";

    break;

  case 3:

    Message = "Today it's Wednesday";

    break;

    case 4:

     Message = "Today it's Thursday";

    break;
    
    case 5:

    Message = "Today it's Friday";

    break;

    case 6:

    Message = "Today it's Saturday";

    break;

    case 7:

    Message= "Today it's Sunday";

    break;

    Message= Weekday >1 && Weekday >7;

    break;

  default:

    console.log("Error: Please input a number between 1 and 7");

}
