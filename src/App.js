import React from 'react';

import './App.css';

const st ={
    marginLeft : 430
    
}

const sty ={
    marginLeft : 650,
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
            <img src={this.state.cat} height="500" width="500" style={st} />
            
            <br />
           <button onClick ={this.handleChange} style={sty}>Generate</button>
            <br />
            <br />
            </div>
        )
    }

}
export default App;
