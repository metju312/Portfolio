import React, {Component} from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    persons: [
      {id: '1', name: 'Osoba1'},
      {id: '2', name: 'Osoba2'},
      {id: '3', name: 'Osoba3'},
      {id: '4', name: 'Osoba4'}
    ],
    showPerson: false
  };

  showPerson = () => {
    const toggle = this.state.showPerson;
    this.setState({
      showPerson: !toggle
    })
  };

  deletePerson = (index: any) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  };

  personChanged = (event: any, id: any) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let person: any = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})


  };

  render() {

    let persons = this.state.persons.map((person, index) => {
      return <Person click={() => this.deletePerson(index)}
                     name={person.name}
                     key={person.id}
                     changed={(event: any) => this.personChanged(event, person.id)}></Person>
    });

    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <span className="badge badge-secondary">New</span>
        <button onClick={this.showPerson}>Button</button>
        {this.state.showPerson ?
          persons : null
        }

      </div>
    );
  }
}

export default App;
