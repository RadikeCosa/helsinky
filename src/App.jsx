import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./components/Contact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fullfilled");
      setContacts(response.data);
    });
  }, []);
  console.log("reder", contacts.length, "notes");

  const addContact = (event) => {
    event.preventDefault();
    const contactObject = {
      name: newContact,
      number: newNumber,
    };
    setContacts(contacts.concat(contactObject));
    setNewContact("");
    setNewNumber("");
  };
  const handleContactChange = (event) => {
    setNewContact(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={addContact}>
          <input value={newContact} onChange={handleContactChange} />
          <input value={newNumber} onChange={handleNumberChange} />
          <button type="submit">Save Contact</button>
        </form>
      </div>
      <h2>Notes</h2>
      <ul>
        {contacts.map((contact) => (
          <Contact key={contact.name} contact={contact} />
        ))}
        <div>debug: {newContact}</div>
      </ul>
    </div>
  );
};

export default App;
