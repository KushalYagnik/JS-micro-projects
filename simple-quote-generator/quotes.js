let arrayOfQuotes = [
    {
        "quote": "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
        "author": "Joe Girard"
    },
    {
        "quote": "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily",
        "author": "Zig Ziglar"
    },
    {
        "quote": "I always wanted to be somebody, but now I realise I should have been more specific.",
        "author": "Lily Tomlin"
    },
    {
        "quote": "I am so clever that sometimes I don’t understand a single word of what I am saying.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "People say nothing is impossible, but I do nothing every day.",
        "author": "Winnie the Pooh"
    },
    {
        "quote": "Life is like a sewer… what you get out of it depends on what you put into it.",
        "author": "Tom Lehrer"
    },
    {
        "quote": "You can’t have everything. Where would you put it?",
        "author": "Steven Wright"
    },
    {
        "quote": "Work until your bank account balance looks like a phone number",
        "author": "Unknown"
    },
    {
        "quote": "Change is not a four letter word...but often your reaction to it is!",
        "author": "Jeffrey Gitomer"
    },
    {
        "quote": "If you think you are too small to make a difference, try sleeping with a mosquoteuito.",
        "author": "Dalai Lama"
    },
    {
        "quote": "Bad decisions make good stories.",
        "author": "Ellis Vidler"
    },
]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    let randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = "-" + arrayOfQuotes[randomNumber].author;
}