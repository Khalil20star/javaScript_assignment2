var selected;
var context = document.getElementById("context");
let randomNumber;
var quotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        autohr: '― Oscar Wilde'
    },
    {
        quote: '“Two things are infinite: the universe and human stupidity; and I m not sure about the universe.”',
        autohr: '― Albert Einstein'
    },
    {
        quote: '“So many books, so little time.”',
        autohr: '― Frank Zappa'
    },
    {
        quote: '“A room without books is like a body without a soul”',
        autohr: '― Marcus Tullius Cicero'
    },
    {
        quote: '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
        autohr: '― Bernard M. Baruch'
    },
    {
        quote: '“You know you are in love when you cant fall asleep because reality is finally better than your dreams.”',
        autohr: '― Dr. Seuss'
    }];

function display() {
    randomNumber = Math.floor(Math.random() * 6);
    if(randomNumber != selected){
        var infos = `<p>${quotes[randomNumber].quote}</p>
        <p>${quotes[randomNumber].autohr}</p>`
        selected = randomNumber;
        context.innerHTML = infos; 
    }
    else{
        display() 
    }
}
