//To access an individual character, you can use the character's location in the string, called its index. Just put the index of the character inside square brackets (starting with [0] as the first character) immediately after the string. For example:
 "James"[0];

// Returns "J"

 // we can see it like, using a variable

var name = "James"
name[0]

// Returns "J"

var quote = "Stay awhile and listen!";
console.log(quote[6]);

// Returns "w"

//  "The man whispered, "please speak to me."

// f you try to use quotes within a string, you will receive a SyntaxError like the one above.

//Because you need to use quotes to denote the beginning and end of strings, the JavaScript engine misinterprets the meaning of your string by thinking "The man whispered, " is the string. Then, it sees the remaining please speak to me."" and returns a SyntaxError.

// If you want to use quotes inside a string, and have JavaScript not misunderstand your intentions, you’ll need a different way to write quotes. Thankfully, JavaScript has a way to do this using the backslash character ( \ ).

// Escaping characters
// In JavaScript, you use the backslash to escape other characters.
// Escaping a character tells JavaScript to ignore the character's special meaning and just use the literal value of the character. This is helpful for characters that have special meanings like in our previous example with quotes "…".

// Because quotes are used to signify the beginning and end of a string, you can use the backslash character to escape the quotes in order to access the literal quote character.

"The man whispered, \"please speak to me.\""

//  Returns: "The man whispered, "please speak to me.""