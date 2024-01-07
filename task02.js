console.log(myPad("I love QA", 20, "*", false));
console.log(myPad("I love QA", 20, "hi"));


function myPad(sourceString, targetLength, filler = " ", addToStart = true){
    const sourceLength = sourceString.length;
    if(sourceLength >= targetLength)
        return sourceString;

    const diff = targetLength - sourceLength;
    let pad = filler.repeat(diff).slice(0, diff);
     
    return addToStart ? pad + sourceString : sourceString + pad;
}