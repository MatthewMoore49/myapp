import React, { Component } from 'react';
import AddPerson from "./AddPeople";
import People from './People'

class App extends Component  {
    state = {

        people : [
            {name: "Austin", age:'22', favColor:'blue', id:1},
            {name: "Lashonda", age:'18', favColor:'red', id:2},
            {name: "Jamie", age:'83', favColor:'yellow', id:3}

        ]
    }
    addPerson = (person) => {
        person.id = Math.random();
        let people = [...this.state.people, person]
        this.setState({
            people: people
        })
    }
    deletePerson = (id) => { 
       // console.log(id);
       let people = this.state.people.filter(person => { 
           return person.id !== id
       });
    
    this.setState({
        people: people
    });
}
componentDidMount(){
    console.log('component mounted' );
}
componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps, prevState);
}

  render(){
      return (
          <div className="App">
              <h1>My first react app </h1>
              <p>Hey there Big boy!</p>
              <People people={this.state.people} deletePerson={this.deletePerson}/> 
              <AddPerson addPerson={this.addPerson} />
            
          </div>
      );
  }
  }
  
  export default App;
  
  
  
