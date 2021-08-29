import "./App.css";
import { Component } from "react";
import { v4 as uuidv } from "uuid";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
    console.log(this.state.contacts);
  }

  addToContactList = (nameForCheck, number) => {
    if (
      this.state.contacts.find((contact) => {
        return contact.name === nameForCheck;
      })
    ) {
      return alert(`${nameForCheck} is already in contacts!`);
    }

    return this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: uuidv(),
            name: nameForCheck,
            number: number,
          },
        ],
      };
    });
  };

  handleInputFilterChange = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContactsByName = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toUpperCase().includes(this.state.filter.toUpperCase())
    );
  };

  deleteContactFromList = (event) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== event.target.id
        ),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addToContactList={this.addToContactList}
        />
        <h2>Contacts</h2>
        <Filter onChangeFilterInput={this.handleInputFilterChange} />
        <ContactList
          contacts={this.filterContactsByName()}
          deleteContactFromList={this.deleteContactFromList}
        />
      </div>
    );
  }
}

export default App;
