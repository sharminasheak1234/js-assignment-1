function describeValue(value){

    if(value){
        return `${typeof value} | truthy`;
    }
    else{

        return `${typeof value} | falsy`;
    }

}


//q-2

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

//q-3


function validateUsername(username){
    if(username.length<4){
        return"Too Short";
    }
    else if(username.includes(" ")){
        return"No Space Allowed";
    }
     else if(username.toLowerCase().includes(" ")){
        return"Reserved Word";
    }
     else{
        return "Available";
     }
}



