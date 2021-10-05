import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookHeadline from "./PhonebookHeadline/PhonebookHeadline";
import PhonebookList from "./PhonebookList/PhonebookList";
import PhonebookListHeadline from "./PhonebookListHeadline/PhonebookListHeadline";
import PhonebookSearch from "./PhonebookSearch/PhonebookSearch";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Darth Vader", number: "459-12-56" },
      { id: "id-2", name: "Luke Skywalker", number: "443-89-12" },
      { id: "id-3", name: "ObiWan Kenobi", number: "645-17-79" },
      { id: "id-4", name: "R2 D2", number: "227-91-26" },
      { id: "id-5", name: "Padme Amidala", number: "123-34-67" },
      { id: "id-6", name: "Darth Sidius", number: "467-54-34" },
      { id: "id-7", name: "QuaiGon Jinn", number: "789-23-45" },
      { id: "id-8", name: "Boba Fett", number: "274-45-09" }
    ],
    filter: ""
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem("contacts");
    const parsedStoredContacts = JSON.parse(storedContacts);
    parsedStoredContacts && this.setState({ contacts: parsedStoredContacts });
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      number
    };

    contacts.some(contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase())
      ? alert(`${newContact.name} is alredy exist`)
      : this.setState({ contacts: [...contacts, newContact] });
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedInput = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedInput));
  };

  deleteContact = id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }));
  };

  render() {
    const { filter } = this.state;
    const filteredResults = this.filterContacts();
    return (
      <>
        <PhonebookHeadline title="Phonebook" />
        <PhonebookForm onSubmit={this.addContact} />
        <PhonebookListHeadline title="Contacts" />
        <PhonebookSearch value={filter} onChange={this.onChangeFilter} />
        <PhonebookList contacts={filteredResults} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
