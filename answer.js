function describeValue(value){

    if(value){
        return `${typeof value} | truthy`;
    }
    else{

        return `${typeof value} | falsy`;
    }

}


//Assignment-2

function getDayType(day){
    day=day.toLowerCase();
    switch(day){
        case "friday":
           case "saturday": 
         return "Weekend"; 
         case "sunday":
         case "monday":
         case "tuesday":
         case "wednesday": 
         case "thursday":
            return "Working Day";
           
          default:
            return "Invalid Day";  
                   
    }
}



