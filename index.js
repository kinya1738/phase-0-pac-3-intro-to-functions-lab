function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

console.log(string === string.toUpperCase());

// const greeting = "HELLO!";

// console.log(greeting);
// console.log(greeting.toLowerCase());

// console.log(greeting === string.toLowerCase());

function logShout(string) {
    console.log(string.toUpperCase());
}
 
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function  sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        return "I can't hear you!";
    } else if (string === string.toUpperCase()){
        return "YES INDEED!" ;
    } else if (string === "Let's have dinner together!") {
        return "I would love to!" ;
    }
}
 