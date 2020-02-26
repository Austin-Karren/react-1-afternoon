import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        };
    }

    handleInput = (val => this.setState({userInput: val.target.value}));

    filterNames(input){
        let names = this.state.unfilteredArray;
        let filteredNames = [];

        for (let i = 0; i < names.length; i++){
            if(names[i].includes(input)){
                filteredNames.push(names[i]);
            }
        }
        this.setState({filteredArray: filteredNames})
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
        <span className="puzzleText"> Names: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e => this.handleInput(e))}/>
                <button className="confirmationButton" 
                onClick={() => this.filterNames(this.state.userInput)}> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;