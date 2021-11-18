import { useState } from "react";
import classes from "./QuotesMachine.module.css";

function QuotesMachine(props){

    console.log(props.list);
    const [quote, setQuote]=useState(props.list[Math.floor(Math.random()*props.list.length)].quote);
    const [author, setAuthor]=useState(props.list[Math.floor(Math.random()*props.list.length)].author);

    function randomHandler(){
        setQuote(props.list[Math.floor(Math.random()*props.list.length)].quote);
        setAuthor(props.list[Math.floor(Math.random()*props.list.length)].author);
    }
    return (
        <div className={classes.quoteBox} id="quote-box">
            <div className={classes.content}>
                <span className={classes.text} id="text">" {quote} "</span>
                <div className={classes.author} id="author">- {author}</div>
            </div>
                <button className={classes.newQuote} id="new-quote" onClick={randomHandler}>New Quote</button>
            <div className={classes.twitter}>
            <span>Share current quote!</span>
                <a className="twitter-share-button" id="tweet-quote"
                href="https://twitter.com/intent/tweet" >
                <img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" /></a>
            </div>
           
        </div>
    );
}
export default QuotesMachine;