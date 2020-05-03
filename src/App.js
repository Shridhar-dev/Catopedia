import React from 'react';

import './App.css';

const st ={
    textAlign : "center"
    
}

const sty ={
    textAlign:"center",
    padding:10
    
}


class App extends React.Component{
    constructor(){
        super()
        this.state={
            cat:[]
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response =>response.json())
        .then(data => {
            this.setState({
                cat: data[0].url
            })
        })
    }
    render(){
        const text = this.state.cat
        return(
            <div>
            <div>
            <img src={this.state.cat} height="500" width="500" style={st} />
            </div>
            <br />
            <div>
           <button onClick ={this.handleChange} style={sty}>Generate</button>
            </div>
            <br />
            <br />
            </div>
        )
    }

}
export default App;
