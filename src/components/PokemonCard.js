import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super();
    this.state = {
      sprite: true
    }
  }
  
  handleSpriteSwap = () =>{
    this.setState({sprite: !this.state.sprite})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleSpriteSwap}>
            {this.state.sprite ? <img src={this.props.sprites.front} alt="oh no!" /> :<img src={this.props.sprites.back} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP: {this.props.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
