//finding least common multiple.
function clicked(){
    let elementsArrayString = document.getElementById("input_numbers").value;
    let elementsArray = elementsArrayString.split(',');
    shiftForMaxCommon = 1;
    let maxCommonArray = elementsArray.map(element => {
        shiftForMaxCommon *= element;
        
        return shiftForMaxCommon;
    });
    
    let maxCommon = maxCommonArray[maxCommonArray.length - 1];
    let maxInput = Math.max(...elementsArray);
    let result;
    for(i = maxInput; i <= maxCommon; i++ ){
        
        let allRemaindersZero = true;

        elementsArray.every(element => {
            if(i % element != 0){
                allRemaindersZero = false;
                return false;
            }
            return true;
            
        });
        
        if(allRemaindersZero){
            result = i;
            break;
        }

    }


    document.getElementById("result").innerHTML = result;
    
}
