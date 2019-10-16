exports.formatString = (inputString) => {

    let result = removeWhitespace(inputString);

    // capitalize first letter of words...
    return result
        .split(" ") // split string into single words
        .map(word => capitalizeInitial(word)) // for each word: capitalize it
        .join(" "); // concatenate the words to a string again
};

const removeWhitespace = (inputString) => {
    return inputString
        .trim() // trim space off the ends
        .replace(/\s+/g, " ");     // collapse duplicate spaces    
};

const capitalizeInitial = (inputString) => {
    return inputString.charAt(0).toUpperCase() + // capitalize first letter 
        inputString.slice(1).toLowerCase(); // format the rest of the string lowercase
};
