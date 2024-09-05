let quote = [
    {
        'quote': '“Be yourself; everyone else is already taken.”',
        'author': '― Oscar Wilde'
    },
    {
        'quote': '“So many books, so little time.”',
        'author': '― Frank Zappa'
    },
    {
        'quote': '“A room without books is like a body without a soul.”',
        'author': '― Marcus Tullius Cicero'
    },
    {
        'quote': '“You only live once, but if you do it right, once is enough.”',
        'author': '― Mae West'
    },
    {
        'quote': '“Be the change that you wish to see in the world.”',
        'author': '― Mahatma Gandhi'
    },
    {
        'quote': '“A friend is someone who knows all about you and still loves you.”',
        'author': '― Elbert Hubbard'
    },
    {
        'quote': 'Beware of what you become in pursuit of what you want.',
        'author': '― Jim Rohn'
    },
    {
        'quote': 'The best revenge is massive success.'
        , 'author': '― Frank Sinatra'
    },
    {
        'author': '― Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': '― Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },

]
let secondNum;
function GenerateQuote() {

    do {
        randomNum = Math.floor(Math.random() * quote.length);
    } while (randomNum == secondNum);

    secondNum = randomNum

    console.log(randomNum)

    document.getElementById('quote').innerHTML = quote[randomNum].quote;
    document.getElementById('author').innerHTML = quote[randomNum].author
}