import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class PokemonPage extends React.Component {

  constructor(){
    super();
    this.state = {
      pokemons: [],
      search: ''
    }
  }

  componentWillMount(){
      fetch('http://localhost:3000/pokemon').then(resp => resp.json()).then(monsters =>{this.setState({pokemons: monsters})})
  }

  handlePokemonFilter = () =>{
    const filteredPokemons = this.state.pokemons.filter(pokemon =>{
      return pokemon.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return filteredPokemons
  }

  newPokemonObject = (pokeData) =>{
  
    const newPokemon = {
    "name": pokeData.name,
    "abilities": [],
    "moves": [ ],
    "stats": [{},{},{},{},{},{"value": pokeData.hp,"name": "hp"}],
    "types": [],
    "sprites": {
      "front": pokeData.frontUrl,
      "back": pokeData.backUrl
      }
    }
    this.newPokemonFetch(newPokemon)
  }

  newPokemonFetch = (newPokemon) =>{
    this.setState({pokemons: this.state.pokemons.concat(newPokemon)})
    
    return fetch('http://localhost:3000/pokemon',{
      method:'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPokemon)
    }).then(resp => resp.json())
  }
    



  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e, data) => this.setState({search: data.value})} showNoResults={false} />
        <br />
        <PokemonForm newPokemonObject={this.newPokemonObject}/>
        <br />
        <PokemonCollection pokemons={this.handlePokemonFilter()}/>
      </div>
    )
  }
}

export default PokemonPage
