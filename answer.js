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

///q-4


function getCngFare(distance, isNight=false, waitingMinutes=0){
let fare=50;

if (distance>=2){
    
    fare +=(distance-2)*15;

}
fare+=waitingMinutes*2;

if(isNight){
    fare +=fare*.20;
}
return fare
}




