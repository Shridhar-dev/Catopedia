import React from 'react';

import './App.css';

const st ={
    display:"flex",
    justifyContent:"center",
    objectFit:"contain"
    
}

const sty ={
    display:"flex",
    justifyContent:"center"
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
                <div style={st}>
            <img src={this.state.cat} height="500" width="500"  />
            </div>
            <br />
            <div style={sty}>
           <button onClick ={this.handleChange} style={{padding:10}}>Generate</button>
           </div>
            <br />
            <br />
            </div>
        )
    }

}
export default App;

