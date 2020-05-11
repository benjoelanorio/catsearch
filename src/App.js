import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.components';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   this.setState({ searchFeild: e.target.value })
  // }

  handleChange = (e) => {
    this.setState({ searchFeild: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log('Something went Wrong'));
  }


  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFeild.toLowerCase()));
    return (
      <div className="App">
        <h1>Meow Search</h1>
        <SearchBox
          placeholder='search cats'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
