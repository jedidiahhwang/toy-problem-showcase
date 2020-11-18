import React, {Component} from "react"

class FilterString extends Component {
    constructor () {
        super ();
        this.state = {
            hobbits: ["Frodo", "Sam", "Merry", "Pippin"],
            userInput: "",
            filteredArray: []
        }
    }


    handleInputLine (value) {
        this.setState ({
            userInput: value
        })
    }

    solveFilterString (userInput) {
        let hobbits = this.state.hobbits;
        let filteredHobbits = [];
        console.log(this);
        for (let i = 0; i < hobbits.length; i++) {
            if (hobbits[i].includes(userInput)) {
                filteredHobbits.push(hobbits[i]);
            }
        }

        this.setState ({
            filteredArray: filteredHobbits
        })

    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.hobbits, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleInputLine(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solveFilterString(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString