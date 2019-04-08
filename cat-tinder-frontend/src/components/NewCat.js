import React, { Component } from 'react'
import {FormControl} from 'react-bootstrap'
class NewCat extends Component{
  constructor(props){
    super(props)
    this.state = {
      form : {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }
  handleChange(event){
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
    render(){
      return(
      <div>
      <label id="name">Name</label>
        <FormControl
        type="text"
        name="name"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.name}
        />
        <label id="age">Age</label>
        <FormControl
        type="text"
        name="age"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.age}
        />
        <label id="enjoys">Enjoys</label>
        <FormControl
        type="text"
        name="enjoys"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.enjoys}
        />
        <button onClick={()=>this.props.kitty(this.state.form)} id="submit">Create A New Cat</button>
      </div>
    )
    }
  }
export default NewCat
