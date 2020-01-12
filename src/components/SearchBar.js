import React, {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            'userInput': '',
            'results': []
        }
    }

    setUserInput = (event) => {
        const newInput = event.target.value;
        this.setState({
            userInput: newInput
        });
        console.log(newInput);
    }

    render() {
        return(
            <div>
                <input type="text" onChange={this.setUserInput} />
                <button>Search</button>
            </div>
        );
    }
}

export default SearchBar;