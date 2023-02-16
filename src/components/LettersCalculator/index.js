import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countCharacters = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bgContainer">
        <div className="imgContentContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />

          <div className="contentContainer">
            <h1 className="heading">Calculate the Letters you enter</h1>

            <label htmlFor="inputText">Enter the phrase</label>
            <input
              type="text"
              className="input"
              placeholder="Calculator"
              id="inputText"
              onChange={this.countCharacters}
            />

            <p className="countContainer">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
