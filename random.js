var quotes = [
    'Talk is cheap. Show mw the code',
    'It is harder to raed code than to write it',
    'Bad programmers worry about the code. Good programmers worry about data structures and thier relastionships',
    'Good software like Wine takes time',
    'Software is a great combination between artistry and engineering',
    'This is a software powered world',
    'One of my most productive days was throwing away 1,000 lines of code '

]



function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}