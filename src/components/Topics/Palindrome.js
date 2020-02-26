import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange = (e => this.setState({userInput: e}));

    isPalindrome(input){
        let forwards = input;
        let backwards = input;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        (forwards === backwards) ? this.setState({palindrome: 'true'}) : this.setState({palindrome: 'false'})
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}> Check </button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}

export default Palindrome;