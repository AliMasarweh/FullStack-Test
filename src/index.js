import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ["Drawing", "Writing", "Surfing", "Eating", "Coding"],
      rightSide: [],
      input: "",
      errors: [],
      history: []
    };
  }

  moveTo = (value, side) => {
    if (side === "right") {
      this.setState({
        hobbies: this.state.hobbies.filter(hobby => hobby !== value),
        rightSide: [value].concat(this.state.rightSide),
        history: [["Moved to right", value]].concat(this.state.history)
      });
    } else {
      this.setState({
        rightSide: this.state.rightSide.filter(hobby => hobby !== value),
        hobbies: [value].concat(this.state.hobbies),
        history: [["Moved to left", value]].concat(this.state.history)
      });
    }
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-6">
            {this.state.hobbies.map(hobby => (
              <h1 onClick={() => this.moveTo(hobby, "right")}>{hobby}</h1>
            ))}
          </div>
          <div className="col-6">
            {this.state.rightSide.map(hobby => (
              <h1 onClick={() => this.moveTo(hobby, "left")}>{hobby}</h1>
            ))}
          </div>
        </div>
        <div>
          <input
            type="text"
            onChange={e => (this.state.input = e.target.value)}
          ></input>
          <input
            value="add hobby"
            type="button"
            onClick={e => {
              const value = this.state.input;
              const errors = [];
              if (!value) {
                errors.push("empty input");
              } else if (this.state.hobbies.includes(value)) {
                errors.push("already contains this hobby!");
              }
              if (errors.length) {
                this.setState({
                  errors: errors
                });
              } else
                this.setState({
                  hobbies: [value].concat(this.state.hobbies),
                  history: [["Added", value]].concat(this.state.history)
                });
            }}
          ></input>
          {this.state.errors.map((error, index) => (
            <small key={index} className="form-text text-danger">
              {error}
            </small>
          ))}
        </div>
        <p>
          {this.state.history.map((operationAndValue, index) => (
            <small key={index} className="form-text text-secondary">
              {`Operation: ${operationAndValue[0]}, Value ${operationAndValue[1]}`}
            </small>
          ))}
        </p>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
