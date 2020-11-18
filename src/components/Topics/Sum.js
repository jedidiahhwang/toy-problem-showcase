import React, {Component} from "react"

class Sum extends Component {
    constructor () {
        super ();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleInputLine1 (value) {
        this.setState ({
            number1: parseInt(value, 10)
        })
    }

    handleInputLine2 (value) {
        this.setState ({
            number2: parseInt(value, 10)
        })
    }

    solveSum (num1, num2) {
        this.setState ({
            sum: num1 + num2
        })
    }

    render () {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleInputLine1(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.handleInputLine2(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.solveSum(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum} </span>
            </div>
        )
    }
}

export default Sum