import { Component } from 'react';

import { CardList } from './components/card-list.component'
import { SearchBox } from './components/search-box.component'

// function App() {
class App extends Component { // class based app
 
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {  // called automatically, when component rendered/mounted on webpage.
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(api => this.setState({ monsters: api }));
  }

  handleChange = e => {                            // arrow function refers to super class
    this.setState({ searchField: e.target.value }) // setState from Component class bind to this
  }

  render() { // class based app
    
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    const filterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
     return ( 
      <section class="h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white body-font">
        <div className = "container px-5 py-24 mx-auto text-center" >
          <h1 className="font-header text-7xl ">Monsters MailBook</h1>
          <SearchBox 
            placeholder='Search Monsters'
            handleChange={this.handleChange}
          />
          <CardList monsters={filterdMonsters} />
        </div>
      </section>
    );
  }
}
export default App;