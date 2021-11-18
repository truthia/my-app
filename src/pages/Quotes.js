import { useEffect, useState } from "react";
import QuotesMachine from "../components/QuotesMachine";
import classes from "./Quotes.module.css"

function Quotes (){
    const [isLoading, setIsLoading]=useState(true);
    const [list, setList]=useState([]);
    
    useEffect(()=>{
    setIsLoading(true);
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    ).then(respone=> respone.json())
    .then(data=>{
        console.log(data);
        setList(data.quotes);
        setIsLoading(false);
    });
},[]);
    if(isLoading){
        return <p>...Loading</p>;
    }
    return (
        <section>
            <QuotesMachine list={list}/>
        </section>
    );
}
 export default Quotes;