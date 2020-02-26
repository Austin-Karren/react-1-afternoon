import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: [{'name': 'Jimmy'}, {'title': 'Sir eats a lot'}, {'position': 'Manager'}, {'name': 'Heather'}, {'favoriteColor': 'blue'}, {'title': 'mr. dad jokes'}],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput = (val => this.setState({userInput: val}))

    filterArray(prop){
        let array = this.state.unfilteredArray;
        let filteredArray = this.state.filteredArray;

        for(let i = 0; i < array.length; i++){
            if(array[i].hasOwnProperty(prop)){
                filteredArray.push(array[i]);
            }
        }
        this.setState({filteredArray: filteredArray});
    }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Origional: {JSON.stringify(this.state.unfilteredArray, null, 10)} </span>
                <input className="inputLine" onChange={(e => this.handleInput(e.target.value))} />

                <button className="confirmationButton" onClick={ () => { this.filterArray(this.state.userInput) }
                }> Filter </button>

        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        )
    }
}

export default FilterObject;