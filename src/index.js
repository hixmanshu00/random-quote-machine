const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "Life is what happens when you're busy making other plans."
];

const authors = [
    "Nelson Mandela",
    "Walt Disney",
    "Steve Jobs",
    "Eleanor Roosevelt",
    "Oprah Winfrey",
    "James Cameron",
    "John Lennon"
]

const colors = [
    "darkslateblue",
    "darkcyan",
    "cornflowerblue",
    "cadetblue",
    "brown",
    "dodgerblue",
    "crimson"
]

function RandomQuote(props) {
    return <h4 className="display-4 quote colour">"{props.quote}</h4>;
}

function Author(props) {
    return <h3 className = "display-6 author colour">-{props.author}</h3>
}

function NewQuote(){
    return <button className = "btn btn-primary newQuote" onClick = {handleOnClick} id="ok">New Quote</button>
}

function handleOnClick(){
    const random = Math.floor(Math.random() * 7 );
    const text = document.getElementById("text")
    const author = document.getElementById("author")
    unfade(text)
    unfade(author)
    ReactDOM.render(<RandomQuote quote = {quotes[random]}/>, text);
    ReactDOM.render(<Author author = {authors[random]}/>, author);
    document.body.style.background = colors[random];
    document.getElementById("text").style.color = colors[random];
    document.getElementById("author").style.color = colors[random];
    document.getElementById("tweet-quote").style.color = colors[random];
    document.getElementById("tumbler").style.color = colors[random];
    document.getElementById("ok").style.backgroundColor = colors[random];
}

function unfade(element) {
    var op = 0.1;  
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}


const random = Math.floor(Math.random() * 7 );
ReactDOM.render(<RandomQuote quote = {quotes[random]}/>, document.getElementById('text'));
ReactDOM.render(<Author author = {authors[random]}/>, document.getElementById('author'));
ReactDOM.render(<NewQuote />,document.getElementById("new-quote"))

