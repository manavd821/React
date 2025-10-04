import { Component } from "react";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.componet";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search_val: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => ({ monsters: users }),
          () => {
            // console.log(this.state)
          }
        )
      );
  }

  onSearchChange = (event) => {
    let search_val = event.target.value.toLowerCase();
    this.setState(
      () => ({ search_val }),
      () => {
        // console.log(this.state)
      }
    );
  };

  render() {
    console.log("render app");
    // console.log(this)
    
    const { monsters, search_val } = this.state;
    const { onSearchChange } = this;
    
    const filtered_monsters = monsters.filter((ele) =>
      ele.name.toLowerCase().includes(this.state.search_val)
    );

    return (
      <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler = {onSearchChange}
          placeholder = "Search Monsters"
          className = "monster-search-box"/>
        
        <CardList monsters = {filtered_monsters}/>
      </div>
    );
  }
}

export default App;
