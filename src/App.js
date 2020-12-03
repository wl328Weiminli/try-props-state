import { Component } from "react";
import "./App.css";
import UserInput from "./UserInputComponent/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import ColorDisplay from "./ColorDisplay/ColorDisplay";
import ColorAdjust from "./ColorAdjust/ColorAdjust";
class App extends Component {
  state = {
    content: "SuperMax",
    size: 10,
    red: 100,
    green: 100,
    blue: 100,
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
    const { content, size, red, green, blue } = this.state;

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
        <ColorDisplay r={red} g={green} b={blue} />

        <ColorAdjust
          color={"red"}
          changed={(e) => this.setState({ red: e.target.value })}
          value={red}
        />

        <ColorAdjust
          color={"green"}
          changed={(e) => this.setState({ green: e.target.value })}
          value={green}
        />

        <ColorAdjust
          color={"blue"}
          changed={(e) => this.setState({ blue: e.target.value })}
          value={blue}
        />
      </div>
    );
  }
}

export default App;
