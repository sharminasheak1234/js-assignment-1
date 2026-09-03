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

console.log(validateUsername("abcd"))