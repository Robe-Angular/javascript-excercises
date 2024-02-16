function clicked(){
    let elementsArrayString = document.getElementById("input_numbers").value;
    let gifts = elementsArrayString.split(',');
    const firstRepeatedId = findFirstRepeated(gifts);
    
    document.getElementById("result").innerHTML = firstRepeatedId;
}

function findFirstRepeated(gifts) {
    let repeated = -1;
    let counter = 0;
    let repeatedArray = [];
    let leastIndex;
    gifts.forEach(element => {
        for(let i = counter + 1 ; i < gifts.length; i++){
            if(element == gifts[i]){
                if(leastIndex == undefined){
                    leastIndex = i;
                    repeated = element;
                }
                if(leastIndex > i){
                    repeated = element;             
                }
            }
        }
        counter++;
    });
    return repeated
}