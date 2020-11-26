import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';

class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
        }
    }
    
    render() {
        return (
            <div>
                <Header/>
                <button type="button" onClick={() => {
                    this.setState({clicked:!this.state.clicked})
                }}>
                    {this.state.clicked ? "to States" : "to Example"}
                </button>
                {this.state.clicked ? <Example/> : <States/>}
            </div>
        );
    }
}

ReactDOM.render(
  <Switcher />,
  document.getElementById('reactapp'),
);