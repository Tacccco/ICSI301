import React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            image: './../../modelData/Sponge.png',
            text: `Uyanga's design is very poor LoL`
        }
    }
    render(){
        return (
            <div className="container-header">
                <div className="image">
                <img  src={this.state.image} alt="sponge" />
                </div>
                <div className="text">
                    {this.state.text}
                </div>
            </div>
            
        )
    }
}
export default Header;