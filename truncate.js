// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two parameters: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Use the join() function to convert the Array back into a String
// 6. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following 3 lines, but you may change them if you 
// are experimenting further.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var shortText = truncateWords(originalText, 8);
console.log(shortText);
