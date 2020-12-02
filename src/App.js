import { Component } from "react";
import "./App.css";
import UserInput from "./UserInputComponent/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    content: "SuperMax",
    size: 10,
  };
  inputHandle = (e) => {
    this.setState({ content: e.target.value });
  };

  clickHandler = () => {
    this.setState((preState) => {
      return {
        size: preState.size + 10,
      };
    });
  };

  render() {
    const { content, size } = this.state;
    return (
      <div className="App">
        <h1>props and state</h1>
        <UserInput intial={this.state.content} changed={this.inputHandle} />
        <UserOutput
          intial={"Supermax"}
          changing={content}
          size={size}
          changeSize={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
