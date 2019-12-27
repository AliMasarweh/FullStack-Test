import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ["Drawing", "Writing", "Surfing", "Eating", "Coding"],
      input: "",
      errors: []
    };
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-6">
            {this.state.hobbies.map(hobby => (
              <h1>{hobby}</h1>
            ))}
          </div>
          <div className="col-6">rightSide</div>
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
              if (value) {
                errors.push("empty input");
              } else if (this.state.hobbies.includes(value)) {
                errors.push("already contains this hobby!");
              }
              if (errors)
                this.setState({
                  errors: errors
                });
              else
                this.setState({
                  hobbies: [value].concat(this.state.hobbies)
                });
            }}
          ></input>
          {this.state.errors.map((error, index) => (
            <small key={index} className="form-text text-danger">
              {error}
            </small>
          ))}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
