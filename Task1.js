//A function that accept a number and return the number formatted with commas as thousands separators
function formatThousand(number){
    return number.toLocaleString();
}

console.log(formatThousand(1000000))
console.log(formatThousand(3615554))

//A  function that accept a string and return the trimmed and capitalized version of the string.
function formatName(strg){

    let trimmedStrg = strg.trim();

    let eachWord = trimmedStrg.split(' ');

    let capitalizedWord = eachWord.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return capitalizedWord.join(' ');

}

console.log(formatName("   hakeem white   "));
