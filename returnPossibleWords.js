function clicked(){
    let elementsArrayString = document.getElementById("input_text_array").value;
    let word = document.getElementById("input_word").value;
    let word_array = elementsArrayString.split(',');
    const result = returnPossibleWords(word_array,word);
    
    document.getElementById("result").innerHTML = result;
}

function returnPossibleWords(gifts,materials){
    let possibleWords = [];
    gifts.forEach(element => {
        let isValue = true;
        Array.from(element).forEach(char => {
            if(materials.indexOf(char) == -1){
                isValue = false;
            }
        });
        if(isValue){
            possibleWords.push(element);
        }
    });
    return possibleWords;
    
}
