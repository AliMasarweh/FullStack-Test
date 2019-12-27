import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ["Drawing", "Writing", "Surfing", "Eating", "Coding"]
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          {this.state.hobbies.map(hobby => (
            <h1>{hobby}</h1>
          ))}
        </div>
        <div className="col-6">left side</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
