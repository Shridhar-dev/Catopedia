import React from 'react';

import './App.css';

const styles = {
    color : "white",
    backgroundColor : "black",
    textAlign: "center",
    margin:0,
    fontSize:50
}
const styler = {
    textAlign : "center",
    fontSize : 50
}

const stylers = {
    textAlign : "center",
    fontSize : 30
}

function Header(){
    return(
        <div>
        <h1 style={styles}>Catopedia😺</h1>
        <p style={styler}>For all the cat lovers!</p>
        
        <p style={stylers}>click the generate button for a cat</p>
        </div>
    )
}
export default Header;
