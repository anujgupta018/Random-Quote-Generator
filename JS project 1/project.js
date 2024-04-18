// variables

let btn = document.querySelector(`#new-quote`);
let quote = document.querySelector(`.quote`);
let person = document.querySelector(`.person`);
const quotes = [
    {
      quote: "So many books, so little time.",
      person: "Frank Zappa"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity and I'm not sure about the universe.",
      person: "Albert Einstein"
    },
    {
      quote: "A room without books is like a body without a soul.",
      person: "Marcus Tullius Cicero"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      person: "Mae West"
    },
    {
      quote: "Be the change that you wish to see in the world.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      person: "Mark Twain"
    },
    {
      quote: "A friend is someone who knows all about you and still loves you.",
      person: "Elbert Hubbard"
    },
    {
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      person: "J.K. Rowling, Harry Potter and the Chamber of Secrets"
    },
    {
      quote: "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
      person: "John Green, The Fault in Our Stars"
    }
  ];
  
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})