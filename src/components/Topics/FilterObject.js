import React, {Component} from "react"

class FilterObject extends Component {
    constructor () {
        super ();
        this.state = {
            fellowship: [
                {
                    name: "Aragorn",
                    age: 87,
                    title: "King of Gondor"
                },
                {
                    name: "Legolas",
                    skill: "Archery",
                    count: 34
                },
                {
                    name: "Gimli",
                    height: 130,
                    food: "Salted Pork"
                },
            ],
            userInput: "",
            filteredFellowship: [],
        }
    }

    handleInputLine (value) {
        this.setState({
            userInput: value
        })
    }

    filterFellowship (prop) {
        let fellowship = this.state.fellowship;
        let filteredFellowship = [];

        for (let i = 0; i < fellowship.length; i++) {
            if (fellowship[i].hasOwnProperty(prop)) {
                filteredFellowship.push(fellowship[i]);
            }
        }

        this.setState({
            filteredFellowship: filteredFellowship
        })
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleTest">Original: {JSON.stringify(this.state.fellowship, null, 10)}</span>
                <input className="inputLine" onChange={(e)=> this.handleInputLine(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterFellowship(this.state.userInput)}>Filter</button>
                <span className="resultsBox  filterObjectRB">Filtered: {JSON.stringify(this.state.filteredFellowship, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject