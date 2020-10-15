import React from "react";
import "./App.css";
import { MillionsOfData } from "./MillionsOfData";

export default class App extends React.Component {
  state = { names: MillionsOfData, nameList: [] };

  renderDataList = (names) => {
    return names.map((name, i) => {
      return (
        <li className="data-name" key={i}>
          {name}
        </li>
      );
    });
  };

  searchData = (e) => {
    let names = this.state.names;
    const inputText = e.toUpperCase();
    console.log(names, inputText);

    names = names.filter((name) => name.toUpperCase().includes(inputText));
    console.log("filtered: ", names);

    this.setState({
      nameList: names,
    });
  };

  render() {
    const names = this.state.names;
    const nameList = this.state.nameList;
    console.log(nameList);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Millions of Data</h1>
        </header>
        <main>
          <label>
            Search:{" "}
            <input
              type="text"
              placeholder="Search for name..."
              onKeyUp={(e) => this.searchData(e.target.value)}
            ></input>
          </label>

          <ul className="data-list">
            {nameList.length === 0
              ? this.renderDataList(names)
              : this.renderDataList(nameList)}
          </ul>
        </main>
      </div>
    );
  }
}
