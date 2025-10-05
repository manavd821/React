import { useState, useEffect } from "react";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.componet";
import "./App.css";

const App = () => {
  console.log("app render")
    const [search_val, setSearch_val] = useState('');
    const [monsters, setmonsters] = useState([]);
    const [filtered_monsters, setfiltered_monsters] = useState(monsters);

    useEffect(()=>{
      console.log("fetch useeffect fire")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => setmonsters(users));
    }, [])

    useEffect(()=>{
      // console.log("newFilteredMonsters useeffect fire")
      const newFilteredMonsters = monsters.filter((ele) =>
          ele.name.toLowerCase().includes(search_val)
      );
      setfiltered_monsters(newFilteredMonsters)
    },[monsters, search_val])

    const onSearchChange = (event) => {
      let search_valString = event.target.value.toLowerCase();
      setSearch_val(search_valString);
    };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>  
      <SearchBox
          onChangeHandler = {onSearchChange}
          placeholder = "Search Monsters"
          className = "monster-search-box"
      />
      <CardList monsters = {filtered_monsters}/>

    </div>
  )
}


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       search_val: "",
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(
//           () => ({ monsters: users }),
//           () => {
//             // console.log(this.state)
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     let search_val = event.target.value.toLowerCase();
//     this.setState(
//       () => ({ search_val }),
//       () => {
//         // console.log(this.state)
//       }
//     );
//   };

//   render() {
//     console.log("render app");
//     // console.log(this)
    
//     const { monsters, search_val } = this.state;
//     const { onSearchChange } = this;
    
//     const filtered_monsters = monsters.filter((ele) =>
//       ele.name.toLowerCase().includes(this.state.search_val)
//     );

//     return (
//       <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler = {onSearchChange}
//           placeholder = "Search Monsters"
//           className = "monster-search-box"/>
        
//         <CardList monsters = {filtered_monsters}/>
//       </div>
//     );
//   }
// }

export default App;
