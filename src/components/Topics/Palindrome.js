import React, {Component} from "react"

class Palindrome extends Component {
    constructor () {
        super ();
        this.state = {
            userInput: "",
            palindrome: ""
        };
    }

    handleInputLine (value) {
        this.setState ({
            userInput: value,
        });
    }

    //Check the first letter to the last and keep progressing inwards to check if it's a palindrome
    //Actually, the .reverse() method makes life way easier
    solvePalindrome (userInput) {
        let forward = userInput;
        let backward = userInput;

        backward = backward.split("").reverse().join("");
        //Didn't originally account for spaces, but a quick google explains this next portion
        //Reversing only applies to arrays, so separate the string into arrays of chars then reverse them

        if (forward === backward) {
            this.setState ({
                palindrome: "True"
            });
        } else {
            this.setState ({
                palindrome: "False"
            });
        }
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleInputLine(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solvePalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome