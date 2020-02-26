import React, {Component} from 'react';

class EvanAndOdds extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleInput = (e => this.setState({inputText: e.target.value}))

    assignEvansAndOdds(inputText){
        let arr = inputText.split(',');
        let evens = [];
        let odds = [];

        for(let i = 0; i < arr.length; i++){
            (arr[i] %2 === 0) ? evens.push(parseInt(arr[i], 10)) :
            odds.push(parseInt(arr[i], 10));
        }
        this.setState({ evenArray: evens, oddArray: odds });
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4 > Evans and Odds </h4>

                <input 
                className="inputLine"
                onChange={e => this.handleInput(e)}
                />

                <button className="confirmationButton" onClick={
                    () => {this.assignEvansAndOdds(this.state.inputText)}
                    }> Split </button>

                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}

export default EvanAndOdds;