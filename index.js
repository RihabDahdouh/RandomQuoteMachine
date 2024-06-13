function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState(""); 
    const [color, SetColor] = React.useState("#000000"); 


    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
             let randomIndex = Math.floor(Math.random() * quotes.length);
             setRandomQuote(quotes[randomIndex]);
           
        }
        fetchData();
    }, [])

    const getNewQuote = ()=>{
        const colors= [
            "#87CEEB",
            "#9966CC",
            "#20B2AA",
            "#D2B48C",
            "#4682B4",
            "#FF00FF",
            "#40E0D0",
            "#EE82EE",
            "#DAA520",
            "#008080"

        ]
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomColor = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randomIndex]);
        SetColor(colors[randomColor]);
        
    }

    return(
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card" id="quote-box">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body">
                       {
                        randomQuote ?  
                        (
                            <div>
                                <h5 className="card-title" id="author">-{randomQuote.author}</h5>
                                <p className="card-text" id="text">&quot;{randomQuote.text}&quot;</p>
                            </div>
                        )
                        : 
                        (<p>loading</p>)
                       }
                        <div className="col">
                            <button onClick={getNewQuote} className="btn btn-primary ml-3" style={{backgroundColor: color}} id="new-quote">New Quote</button>
                            <a target="_blank" href="twitter.com/intent/tweet" className="btn btn-warning" id="tweet-quote" style={{borderColor: color}}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="btn btn-danger">
                                <i className="fab fa-tumblr"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('app'));