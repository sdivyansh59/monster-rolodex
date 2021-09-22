import {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Event from './components/Imp-concepts/Event';

class App extends Component {
  constructor(){
    super();

    this.state={
       monsters: [],
       searchField: ''       
    };
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters: users}));
  }

  // write methods in Arrow fun Syntax only ,other wise this inside method
  // will be undefined (not bound )
  handleChange= e => {
    this.setState({searchField: e.target.value})
  }

  render(){ 
    const {monsters,searchField}=this.state;
    const filteredMonsters= monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    }) 

    return (
      <div className="App"> 
        <h1> Monster Rolodex</h1>
        <SearchBox placeholder='search monester' 
          handelChange={this.handleChange}/>
        <CardList monsters={(filteredMonsters.length=== 0 ? monsters : filteredMonsters)}/> 
        <Event/>
      </div>
  );
  }
  
}



export default App;
