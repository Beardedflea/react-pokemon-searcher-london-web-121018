import React from 'react'
import { Form } from 'semantic-ui-react'
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleNameChange = (e) =>{this.setState({name: e.target.value})}

  handleHPChange = (e) =>{this.setState({hp: e.target.value})}

  handleFrontURLChange = (e) =>{this.setState({frontUrl: e.target.value})}

  handleBackURLChange = (e) =>{this.setState({backUrl: e.target.value})}

  handleSubmit = (e) =>{
    e.preventDefault()
    const pokeForm = this.state 
    this.props.newPokemonObject(pokeForm)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" 
              value={this.state.name} onChange={this.handleNameChange}/>

            <Form.Input fluid label="hp" placeholder="hp" name="hp" 
              value={this.state.hp} onChange={this.handleHPChange}/>

            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" 
              value={this.state.frontUrl} onChange={this.handleFrontURLChange}/>

            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" 
              value={this.state.backUrl} onChange={this.handleBackURLChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
