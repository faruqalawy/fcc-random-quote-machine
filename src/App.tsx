import { useState } from 'react'
import quotes from "./assets/quotes.json"
import {FaTwitter, FaQuoteRight, FaQuoteLeft, FaTumblr} from "react-icons/fa";
import './App.css'

interface Quote {
  quote: string;
  author: string;
};

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${blue}, ${green})`;
}

const transition = "all 1s"

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor);

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return (
    <>
      <div className='background' style={{backgroundColor: randomColor, transition}}>
        <div id="quote-box">
          <div className='quote-content' style={{color: randomColor, transition}} >
            <h2 id='text' >
              <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
              {quote.quote}
              
            </h2>
            <h4 id="author">- {quote.author}</h4>
          </div>
          <div className='buttons' >
            <div className='social-icons'>
            <a 
              href="https://twitter.com/intent/tweet"
              id='tweet-quote'
              style={{backgroundColor: randomColor, transition}}
            >
              <FaTwitter color="white" />
            </a>
            <a 
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Jim%20Rohn&amp;content=Either%20you%20run%20the%20day%2C%20or%20the%20day%20runs%20you.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
              id='tumblr-quote'
              style={{backgroundColor: randomColor, transition}}
            >
              <FaTumblr color="white" />
            </a>
            </div>
            <button id='new-quote' onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>New Quote</button>
          </div>
        </div>
        <div className='by-faruq'>
          <h5>by Faruq</h5>
        </div>
      </div>
    </>
  )
}

export default App
