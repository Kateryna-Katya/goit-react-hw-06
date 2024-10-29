import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

function App() {
  return (
    <div style={{ marginLeft: "50px", marginTop: "0px" }}>
      <h1 style={{ fontSize: "24px" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
