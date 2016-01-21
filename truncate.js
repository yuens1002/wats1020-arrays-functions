// WATS 1020 Array & Function Assignment - Sunny Yuen


function truncateWords(longText, numWords) {
    var str = longText.split(" ");
    function removeWords(arrayText) {
        // reminder to self: setting a var to store arrayText.splice is actually the parts removed not the remaining 
        // numWords is the 1st word to remove (position + 1) 
        arrayText.splice(numWords, arrayText.length - numWords);
        /* avoids the space between the last word and the ellipses doing it 
        way vs adding by splice from the previous step */
        return arrayText.join(" ") + "...";
    }
    /* this calls the function removeWords, gets the returned value 
    then returns the value of removeWords for truncateWords */
    document.getElementById('result').innerHTML = removeWords(str);
}




