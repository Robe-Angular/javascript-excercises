function clicked(){
    let original = document.getElementById("input_original").value;
    let modified = document.getElementById("input_modified").value;
    
    const result = findNaughtyStep(original,modified);
    
    document.getElementById("result").innerHTML = result;
}

function findNaughtyStep(original,modified){
    let result = "";
    let counter = 0;
    Array.from(original).every(element => {
        let modifiedChar = Array.from(modified)[counter];
        if(element != modifiedChar){
            result = modifiedChar;
            return false;
        }
        counter++;
        return true;
    });
    return result;
}
