function shout(string) {
    //receives one argument and returns it in all caps
    return string.toUpperCase();
}

function whisper(string) {
    //receives one argument and returns it in all lowercase
    return string.toLowerCase();
}

function logShout(string) {
    //calls console.log() its one argument in all caps
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    //calls console.log() its one argument in all lowercase
    console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
    var Mixed = "I can't hear you!"

    var Upper = "YES INDEED!"

    var Lower = "I love you, too."

    if (string.toLowerCase() === string) {
        return Mixed;
    }
    else if (string.toUpperCase() === string) {
        return Upper;
    }
    else if ('I love you, Grandma.' === string) {
        return Lower
    }
}