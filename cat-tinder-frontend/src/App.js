import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Cats from './components/Cats';
import NewCat from './components/NewCat';
import { getCats } from './api'
import { createCat } from './api'
import { deleteCat } from './api'

class App extends Component {
    constructor(props){
		super(props)
		this.state = {
			cats: []
		}
	}
	componentWillMount() {
		getCats()
		.then(APIcats => {
			this.setState({
				cats: APIcats
			})
		})
	}

    deleteTheCat(id){
        deleteCat(id)
        .then(APIcats =>{
            this.setState({
                cats: APIcats
            })
        })
    }


    handleNewCat(newCatInfo) {
	createCat(newCatInfo)
      .then(successCat => {
        console.log("SUCCESS! New cat: ", successCat);
    })
        window.location.reload()
}

  render() {
    return (
      <div>
        <Header />
        <Cats cats={this.state.cats} delete={this.deleteTheCat.bind(this)}/>
        <NewCat kitty={this.handleNewCat}/>
      </div>
    );
  }
}



export default App;
