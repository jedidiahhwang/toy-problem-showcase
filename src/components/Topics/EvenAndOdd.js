import React, {Component} from "react"

class EvenAndOdd extends Component {
    constructor ()  {
        super ();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: "",
        }
    }

    handleInputLine (value) {
        this.setState ({
            userInput: value,
        })
    }

    solveEvenAndOdd (userInput) {
        let arr = userInput.split(','); //Review .split()
        let evens = [];
        let odds = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10)); //Review parse
            } else {
                odds.push(parseInt(arr[i], 10));
            }
        }

        this.setState ({
            evenArray: evens,
            oddArray: odds,
        })
    }

    render () {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleInputLine(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.solveEvenAndOdd(this.state.userInput)}}>Solve</button>
                <span className="resultsBox">Even Numbers: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odd Numbers: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd