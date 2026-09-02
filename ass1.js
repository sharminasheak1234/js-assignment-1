function describeValue(value){

    if(value){
        return `${typeof value} | truthy`;
    }
    else{

        return `${typeof value} | falsy`;
    }

}

console.log(describeValue(null));